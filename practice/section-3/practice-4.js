'use strict';

function createUpdatedCollection(collectionA, objectB) {
  const collection= [
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
  var value=objectB.value;
  for(var i in collection){
    var count=0;
    for(var j in collectionA){
      var arr=collectionA[j].split('-');
      if(collection[i]==arr[0]&&arr[1]){
        count+=parseInt(arr[1]);
      }
      else if(collection[i]==arr[0]&&!arr[1]){
        count++;
      }
    }
    list.push({
      'key':collection[i],
      'count':count
    })
  }
  console.log(list);
  for(var i in list){
    for(var j in value){
      if(list[i].key==value[j]){
        var discount=list[i].count/3;
        list[i].count-=parseInt(discount.toString());
      }
 
    }
  }
  // return collection;
  return list;
}
