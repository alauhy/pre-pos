'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var list=[];
  var value=objectB.value;
  for(var i in collectionA){
    for(var j in value){
      if(collectionA[i].key==value[j]){
        var discount=collectionA[i].count/3;
        collectionA[i].count-=parseInt(discount.toString());
      }
 
    }
  }
  return collectionA;
}
