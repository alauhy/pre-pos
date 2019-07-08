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
      if(collection[j].indexOf('-')!=-1){
      let arr=collection[j].split('-');
      if(collectionA[i]==arr[0]&&arr[1]){
        count+=parseInt(arr[1]);
      }
      else if(collectionA[i]==arr[0]&&!arr[1]){
        count++;
      }
    }
    else if(collection[j].indexOf('[')!=-1){
      let arr=collection[j].split('[');
      if(collectionA[i]==arr[0]&&arr[1]){
        let arr2=arr[1].split("]");
        count+=parseInt(arr2[0]);
      }
      else if(collectionA[i]==arr[0]&&!arr[1]){
        count++;
      }
    }
    else if(collection[j].indexOf('\:')!=-1){
      let arr=collection[j].split('\:');
      console.log(arr);

      if(collectionA[i]==arr[0]&&arr[1]){
        count+=parseInt(arr[1]);
      }
      else if(collectionA[i]==arr[0]&&!arr[1]){
        count++;
      }
    }
    else if(collectionA[i]==collection[j]){
      count++;
    }
    }
    list.push({
      'name':collectionA[i],
      'summary':count
    })
  }
  return list;
}
