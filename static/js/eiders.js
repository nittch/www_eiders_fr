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
const k = 'AIzaSyC5UT9H9iVrP1UHv7eEcISsqc-aqjvUBuc'

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

  $.get('https://www.googleapis.com/youtube/v3/videos',
    { key: k, id: videoid, part: 'snippet, contentDetails' },
    function(result) {
      formatted_result = {
        title: result.items[0].snippet.title,
        thumbnail: result.items[0].snippet.thumbnails.default.url,
        duration: result.items[0].contentDetails.duration,
      };

      set_cache(session_key, formatted_result);

      callback(formatted_result);
  }, 'jsonp');
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

  $.get('https://www.googleapis.com/youtube/v3/playlists',
  { key: k, id: playlistid, part: 'snippet, contentDetails' },
  function(result) {
    formatted_result = {
      title: result.items[0].snippet.title,
      thumbnail: result.items[0].snippet.thumbnails.default.url,
      nbvideos: result.items[0].contentDetails.itemCount
    };

    set_cache(session_key, formatted_result);

    callback(formatted_result);
  }, 'jsonp');
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

  let request = {
    key: k,
    part: 'snippet'
  }
  request[selector] = identifier
 
  $.get('https://www.googleapis.com/youtube/v3/channels',
    request,
    function(result) {
      formatted_result = {
        title: result.items[0].snippet.title,
        thumbnail: result.items[0].snippet.thumbnails.default.url
      };

      set_cache(session_key, formatted_result);

      callback(formatted_result);
  }, 'jsonp');
}

