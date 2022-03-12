function iso8601_to_html(duration)
{
  return duration.replace("PT","").replace("H"," h ").replace("M"," min ").replace("S"," sec")
}

const googleapi_key = 'AIzaSyC5UT9H9iVrP1UHv7eEcISsqc-aqjvUBuc'

// callback appelé de manière asynchrone avec le modèle suivant:
//   {
//     title: "titre de la video"
//     thumbnail: "url de la thumbnail par défaut"
//     duration: durée de la vidéo au format ISO8601
//   }
function get_youtube_video(videoid, callback)
{
  $.get('https://www.googleapis.com/youtube/v3/videos',
    { key: googleapi_key, id: videoid, part: 'snippet, contentDetails' },
    function(result) {
      callback({
        title: result.items[0].snippet.title,
        thumbnail: result.items[0].snippet.thumbnails.default.url,
        duration: result.items[0].contentDetails.duration
      });
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
  $.get('https://www.googleapis.com/youtube/v3/playlists',
  { key: googleapi_key, id: playlistid, part: 'snippet, contentDetails' },
  function(result) {
    callback({
      title: result.items[0].snippet.title,
      thumbnail: result.items[0].snippet.thumbnails.default.url,
      nbvideos: result.items[0].contentDetails.itemCount
    });
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
  let request = {
    key: googleapi_key,
    part: 'snippet'
  }
  request[selector] = identifier
 
  $.get('https://www.googleapis.com/youtube/v3/channels',
    request,
    function(result) {
      callback({
        title: result.items[0].snippet.title,
        thumbnail: result.items[0].snippet.thumbnails.default.url
      });
  }, 'jsonp');
}

