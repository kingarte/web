function showlatestposts(json) {
  var result = '';
  for (var i = 0; i < posts_no; i++) {
    var entry = json.feed.entry[i];
    var posttitle = entry.title.$t;
    var posturl;
    if (i == json.feed.entry.length) break;
    for (var k = 0; k < entry.link.length; k++) {
      if (entry.link[k].rel == 'alternate') {
        posturl = entry.link[k].href;
        break;
      }
    }
    posttitle = posttitle.link(posturl);
    var readmorelink = "(leia mais)";
    readmorelink = readmorelink.link(posturl);
    var postcontent = "content" in entry ? entry.content.$t : "summary" in entry ? entry.summary.$t : "";
    var re = /<\S[^>]*>/g; 
    postcontent = postcontent.replace(re, "");
    result += '<li class="recent-post-title">' + posttitle + '</li><div class="recent-post-summ">';
    if (post_summary == true) {
      if (postcontent.length < summary_chars) {
         result += postcontent;
      }
      else {
         postcontent = postcontent.substring(0, summary_chars);
         var quoteEnd = postcontent.lastIndexOf(" ");
         postcontent = postcontent.substring(0,quoteEnd);
         result += postcontent + ' ' + readmorelink;
      }
    }
    result += '</div>';
  }
  var recentPosts = document.getElementById('recent-posts');
  recentPosts.innerHTML = result;
}
