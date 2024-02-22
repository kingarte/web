function showlatestposts(json) {
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
    if ("content" in entry) {
      var postcontent = entry.content.$t;}
    else
    if ("summary" in entry) {
      var postcontent = entry.summary.$t;}
    else var postcontent = "";
    var re = /<\S[^>]*>/g; 
    postcontent = postcontent.replace(re, "");
    document.write('<li class="recent-post-title">');
    document.write(posttitle);
    document.write('</li><div class="recent-post-summ">');
    if (post_summary == true) {
      if (postcontent.length < summary_chars) {
         document.write(postcontent);
      }
      else {
         postcontent = postcontent.substring(0, summary_chars);
         var quoteEnd = postcontent.lastIndexOf(" ");
         postcontent = postcontent.substring(0,quoteEnd);
         document.write(postcontent + ' ' + readmorelink);
      }
    }
    document.write('</div>');
  }
}
