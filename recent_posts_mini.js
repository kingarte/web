function showlatestposts(e){for(var t=0;t<posts_no;t++){var r,s=e.feed.entry[t],n=s.title.$t;if(t==e.feed.entry.length)break;for(var i=0;i<s.link.length;i++)if("alternate"==s.link[i].rel){r=s.link[i].href;break}n=n.link(r);var a="... leia mais";a=a.link(r);var l=s.published.$t,o=l.substring(0,4),u=l.substring(5,7),m=l.substring(8,10),c=new Array;if(c[1]="Jan",c[2]="Feb",c[3]="Mar",c[4]="Abr",c[5]="Mai",c[6]="Jun",c[7]="Jul",c[8]="Ago",c[9]="Set",c[10]="Out",c[11]="Nov",c[12]="Dez","content"in s)var d=s.content.$t;else if("summary"in s)d=s.summary.$t;else d="";if(d=d.replace(/<\S[^>]*>/g,""),document.write('<li class="recent-post-title">'),document.write(n),document.write('</li><div class="recent-post-summ">'),1==post_summary)if(d.length<summary_chars)document.write(d);else{var f=(d=d.substring(0,summary_chars)).lastIndexOf(" ");d=d.substring(0,f),document.write(d+" "+a)}document.write("</div>"),1==posts_date&&document.write('<div class="post-date">'+c[parseInt(u,10)]+" "+m+" "+o+"</div>")}}