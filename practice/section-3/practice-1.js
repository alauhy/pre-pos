'use strict';

function createUpdatedCollection(collectionA, objectB) {
 var list=[];
 var value=objectB.value;
 for(var i in collectionA){
   for(var j in value){
     if(collectionA[i].key==value[j]){
       collectionA[i].count--;
     }

   }
 }
 return collectionA;
}
