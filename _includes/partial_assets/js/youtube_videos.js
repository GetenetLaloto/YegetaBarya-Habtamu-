// to use this, in the main page js you need to have a variable called youtube_ids_array which is an array of ids for youtube videos. also another var called youtube_ids which is string enoced uri for the fetch api.

const tag = document.createElement('script');
const first_hash = window.location.hash.substring(1);
const first_id = youtube_ids_array.includes(first_hash) ? first_hash : youtube_ids_array[0];

let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    videoId: first_id,
    width: '100%',
    height: '450'
  });
}

function changeVideo(id){
  player.loadVideoById(id);
  window.location.hash = id;
  $('.active-video').removeClass('active-video');
  $(`.${id}`).addClass('active-video');
};

function singlePlaylistItem(id, thumbnail, title){
  return (`
    <div class='thumbnail ${id}' style='background-image:url("${thumbnail}")' onClick='changeVideo("${id}")'>
    </div>
  `)
}

function makePlaylistItems(data){
  const htmlPlaylist = (data.map((e)=> singlePlaylistItem(e.id, e.snippet.thumbnails.medium.url, e.snippet.title))).join('');
  $('.plalist-thumbnails').html(htmlPlaylist)
}

$(document).ready(()=>{

  tag.src = "https://www.youtube.com/iframe_api";
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // TODO: cache the json to avoid api calls and update the cache manually (video info rarely change, i assume)
  fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${youtube_ids}&key=AIzaSyBmApRVTyrATOLw9-OBk-lSHppn-bFngyE`)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      makePlaylistItems(data.items);
      $(`.${first_id}`).addClass('active-video');
      window.location.hash = first_id;
    });
});
