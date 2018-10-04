---
data_file: media
---
const youtube_ids_array = [
  {% for ids in site.data[page.data_file].youtube_videos.ids %}"{{ids}}",{% endfor %}
];
const youtube_ids =
  encodeURIComponent("{% for ids in site.data[page.data_file].youtube_videos.ids %}{{ids}},{% endfor %}");

{% include partial_assets/javascript_partials.js %}
