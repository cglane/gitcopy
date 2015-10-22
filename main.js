
var joined = "";

(function date(){
  var str = cglane.created_at;
  var strDate = str.split('T');
  var gregorian = Date(strDate[0]);
  var gregorianArray = gregorian.split(" ");
  joined = " " + gregorianArray[1] + " " + gregorianArray[2]+ " ,  "+ gregorianArray[3];
  console.log(strDate);
  console.log(gregorian);
  console.log(gregorianArray)
})();
$(document).ready(function(){
  //column left
  console.log(avatar);
  $('#avatar').attr('src',cglane.avatar_url);
  $('#login').text(cglane.login);
  $('#joined').append(joined);
  $('#followers').text(cglane.followers);
  $('#stared').text(cglane.public_gists);
  $('#following').text(cglane.following);
  //navbar
  $('#account').attr('src', cglane.avatar_url);
    //icon_dropdown message
    console.log(events);
    console.log(events[10]);
    console.log(arrayRepos);
    console.log(arrayNames);
    console.log(splitNames);
//populate content
  _.each(splitNames,function(item){
      $('.documents').append("<i class=fa fa-book></i>" + "<p>"+item+"</p>");

  });


});
