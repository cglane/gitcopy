var arrayRepos = _.map(events,function(items){
  return items.repo;
})
var arrayNames = _.pluck(arrayRepos,'name');
var splitNames= [];
  (function splitWords(){
      _.each(arrayNames,function(item){
        var newWord = item.split("/");
        if(!_.contains(splitNames, newWord[1])){
          console.log(newWord[1]);
          splitNames.push(newWord[1]);
        }
      })
  })();
  console.log(splitNames);
