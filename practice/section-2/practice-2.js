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
      var arr=collection[j].split('-');
      if(collectionA[i]==arr[0]&&arr[1]){
        count+=parseInt(arr[1]);
      }
      else if(collectionA[i]==arr[0]&&!arr[1]){
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
