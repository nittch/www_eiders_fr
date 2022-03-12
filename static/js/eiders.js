function iso8601_to_html(duration)
{
  return duration.replace("PT","").replace("H"," h ").replace("M"," min ").replace("S"," sec")
}

const googleapi_key = 'AIzaSyC5UT9H9iVrP1UHv7eEcISsqc-aqjvUBuc'

function get_youtube_video(videoid, callback)
{
  $.get('https://www.googleapis.com/youtube/v3/videos', {
    key: googleapi_key,
    id: videoid,
    part: 'snippet, contentDetails'
  }, function(result) {
    callback({
      title: result.items[0].snippet.title,
      thumbnail: result.items[0].snippet.thumbnails.default.url,
      duration: result.items[0].contentDetails.duration
    });
  }, 'jsonp');
}

function get_youtube_playlist(playlistid, callback)
{
  $.get('https://www.googleapis.com/youtube/v3/playlists', {
    key: googleapi_key,
    id: playlistid,
    part: 'snippet, contentDetails'
  }, function(result) {
    callback({
      title: result.items[0].snippet.title,
      thumbnail: result.items[0].snippet.thumbnails.default.url,
      nbvideos: result.items[0].contentDetails.itemCount
    });
  }, 'jsonp');
}

function get_youtube_channel(selector, identifier, callback)
{
  let request = {
    key: googleapi_key,
    part: 'snippet'
  }

  request[selector] = identifier
 
  $.get('https://www.googleapis.com/youtube/v3/channels', request, function(result) {
    callback({
      title: result.items[0].snippet.title,
      thumbnail: result.items[0].snippet.thumbnails.default.url
    });
  }, 'jsonp');
}

