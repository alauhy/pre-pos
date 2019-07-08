'use strict';

function countSameElements(collection) {
  const collectionA= [
    'a',
    'e', 
    'h', 
    't', 
    'f', 
    'c', 
    'g', 
    'b',
    'd',
  ];
  var list=[];
  for(var i in collectionA){
    var count=0;
    for(var j in collection){
      if(collectionA[i]==collection[j]){
        count++;
      }
    }
    list.push({
      'key':collectionA[i],
      'count':count
    })
  }
  return list;
}
