/////////////
// HELPERS //
/////////////
function iso8601_to_html(duration)
{
  return duration.replace("PT","").replace("H"," h ").replace("M"," min ").replace("S"," sec")
}

///////////////////
// MISE EN CACHE //
///////////////////
//
// mise en cache dans le sessionCache (non persistent, mais tant que la fenêtre est ouverte dans le browser)
//   note: dans firefox, utiliser F12, onglet storage, sessionCache pour les voir
//

// Retourne la clé si toujours valide, sinon null
function get_cache(session_key)
{
  let stringValue = window.sessionStorage.getItem(session_key);

  if (stringValue == null) {
    return null;
  }

  let value = JSON.parse(stringValue);
  let expirationDate = new Date(value.expirationDate);
  if (expirationDate > new Date())
    return value; // toujours OK

  window.sessionStorage.removeItem(session_key)
  return null;
}

function set_cache(session_key, value)
{
  const storage_in_minutes = 60 * 24; // 24h

  value.expirationDate = new Date(new Date().getTime() + storage_in_minutes * 60 * 1000).toISOString(); // en millisecondes ici

  window.sessionStorage.setItem(session_key, JSON.stringify(formatted_result));
}

//////////////////////////////////
// UTILISATION DE L'API YOUTUBE //
//////////////////////////////////
const k = 'AIzaSyC5UT9H9iVrP1UHv7eEcISsqc-aqjvUBuc';
const max_elt_by_request = 50;

// pour délayer/grouper les requêtes
let missing_youtube_videos = {};
let missing_youtube_playlists = {};
let missing_youtube_channels = {};

///////////////////////////////////////////////////////////////////////////////////////////////////////////
// première partie : on cherche dans le session cache, sinon on note pour process plus tard (groupé)     //
// on peut ainsi réduire le nombre de requêtes vers youtube : améliorer la latence et sauver notre quota //
///////////////////////////////////////////////////////////////////////////////////////////////////////////

// callback appelé de manière asynchrone avec le modèle suivant:
//   {
//     title: "titre de la vidéo"
//     thumbnail: "url de la thumbnail par défaut"
//     duration: durée de la vidéo au format ISO8601
//   }
function get_youtube_video(videoid, callback)
{
  let session_key = "youtube_video_" + videoid;

  previous_data = get_cache(session_key);
  if (previous_data != null)
  {
    callback(previous_data);
    return;
  }

  // on note videoid, session_key et le callback
  missing_youtube_videos[videoid] = {
    session_key: session_key,
    callback: callback
  };
}

// callback appelé de manière asynchrone avec le modèle suivant:
//   {
//     title: "titre de la playlist"
//     thumbnail: "url de la thumbnail par défaut"
//     nbvideos: nombre de vidéos dans la playlist
//   }
function get_youtube_playlist(playlistid, callback)
{
  let session_key = "youtube_playlist_" + playlistid;

  previous_data = get_cache(session_key);
  if (previous_data != null)
  {
    callback(previous_data);
    return;
  }

  // on note playlistid, session_key et le callback
  missing_youtube_playlists[playlistid] = {
    session_key: session_key,
    callback: callback
  };
}

// selector: soit 'id', soit 'forUsername'.
//   En allant sur la chaine, regarder l'url. Il y a trois formats possible
//     https://www.youtube.com/channel/blablabla    -> utiliser 'id'
//     https://www.youtube.com/c/blablabla -> utiliser 'id', pour récupérer le l'id afficher la source de la page et chercher 'channelId'
//     https://www.youtube.com/user/blabla -> utiliser 'forUsername'
// identifier: l'id vu précédemment
// callback appelé de manière asynchrone avec le modèle suivant:
//   {
//     title: "titre de la chaine"
//     thumbnail: "url de la thumbnail par défaut"
//   }
function get_youtube_channel(selector, identifier, callback)
{
  let session_key = "youtube_channel_" + selector + "_" + identifier;

  previous_data = get_cache(session_key);
  if (previous_data != null)
  {
    callback(previous_data);
    return;
  }

  // dans le cas "id" on peut délayer/grouper...
  if (selector == "id")
  {
    // on note identifier, session_key et le callback
    missing_youtube_channels[identifier] = {
      session_key: session_key,
      callback: callback
    };

    return;
  }

  // dans le cas "forUsername" on ne peut pas grouper... du coup on lance la requête de suite
  console.log("channels(forUsername): requesting " + identifier);

  $.get('https://www.googleapis.com/youtube/v3/channels',
    { key: k, forUsername: identifier, part: 'snippet', fields: "items(snippet(title,thumbnails/medium/url))" },
    function(result) {
      if (result["items"] == null)
      {
        console.error("channels(forUsername): " + result.error.message);
        return;
      }
      formatted_result = {
        title: result.items[0].snippet.title,
        thumbnail: result.items[0].snippet.thumbnails.medium.url
      };

      set_cache(session_key, formatted_result);
      callback(formatted_result);
  }, 'jsonp');
}

////////////////////////////////////////////////////////////////////////////////////////
// seconde partie, on process tout d'un coup et on rappelle les callbacks pour la vue //
////////////////////////////////////////////////////////////////////////////////////////

function get_youtube_videos_groupped()
{
  if (Object.entries(missing_youtube_videos).length == 0)
    return;

  for (let step = 0; step < Object.entries(missing_youtube_videos).length; step += max_elt_by_request) {
    var sub_request = Object.keys(missing_youtube_videos).slice(step, step + max_elt_by_request);
    console.log("videos: requesting " + sub_request);

    $.get('https://www.googleapis.com/youtube/v3/videos',
      // on join les id
      { key: k, id: sub_request.join(','), part: 'snippet, contentDetails', fields: "items(id,snippet(title,thumbnails/medium/url),contentDetails/duration)" },
      function(result) {
        if (result["items"] == null)
        {
          console.error("videos: " + result.error.message);
          return;
        }
        result.items.forEach(function(entry) {
          // on retrouve la session_key et le callback originaux
          let original_context = missing_youtube_videos[entry.id];
          if (original_context != null)
          {
            formatted_result = {
              title: entry.snippet.title,
              thumbnail: entry.snippet.thumbnails.medium.url,
              duration: entry.contentDetails.duration,
            };

            set_cache(original_context.session_key, formatted_result);

            original_context.callback(formatted_result);
          }
        });

    }, 'jsonp');
  }
}

function get_youtube_playlists_groupped()
{
  if (Object.entries(missing_youtube_playlists).length == 0)
    return;

  for (let step = 0; step < Object.entries(missing_youtube_playlists).length; step += max_elt_by_request) {
    var sub_request = Object.keys(missing_youtube_playlists).slice(step, step + max_elt_by_request);
    console.log("playlists: requesting " + sub_request);
  
    $.get('https://www.googleapis.com/youtube/v3/playlists',
      // on join les id
      { key: k, id: sub_request.join(','), part: 'snippet, contentDetails', fields: "items(id,snippet(title,thumbnails/medium/url),contentDetails/itemCount)" },
      function(result) {
        if (result["items"] == null)
        {
          console.error("playlists: " + result.error.message);
          return;
        }
        result.items.forEach(function(entry) {
          // on retrouve la session_key et le callback originaux
          let original_context = missing_youtube_playlists[entry.id];
          if (original_context != null)
          {
            formatted_result = {
              title: entry.snippet.title,
              thumbnail: entry.snippet.thumbnails.medium.url,
              nbvideos: entry.contentDetails.itemCount
            };
  
            set_cache(original_context.session_key, formatted_result);
            original_context.callback(formatted_result);
          }
        });
  
      }, 'jsonp');
    }
}

function get_youtube_channel_ids_groupped()
{
  if (Object.entries(missing_youtube_channels).length == 0)
    return;

  for (let step = 0; step < Object.entries(missing_youtube_channels).length; step += max_elt_by_request) {
    var sub_request = Object.keys(missing_youtube_channels).slice(step, step + max_elt_by_request);
    console.log("channels(id): requesting " + sub_request);

    $.get('https://www.googleapis.com/youtube/v3/channels',
      // on join les id
      { key: k, id: sub_request.join(','), part: 'snippet', fields: "items(id,snippet(title,thumbnails/default/url))" },
      function(result) {
        if (result["items"] == null)
        {
          console.error("channels(id): " + result.error.message);
          return;
        }
        result.items.forEach(function(entry) {
          // on retrouve la session_key et le callback originaux
          let original_context = missing_youtube_channels[entry.id];
          if (original_context != null)
          {
            formatted_result = {
              title: entry.snippet.title,
              thumbnail: entry.snippet.thumbnails.default.url
            };
      
            set_cache(original_context.session_key, formatted_result);
            original_context.callback(formatted_result);
          }
        });

    }, 'jsonp');
  }
}

