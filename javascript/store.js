function submit()  {
var career=document.getElementById('career').value;
var name=document.getElementById('name').value;
var phonenumber=document.getElementById('phonenumber').value;
var mail=document.getElementById('mail').value;
var degree=document.getElementById('degree').value;
var dcollege=document.getElementById('dcollege').value;
var branch=document.getElementById('branch').value;
var dmarks=document.getElementById('dmarks').value;
var idegree=document.getElementById('idegree').value;
var icollege=document.getElementById('icollege').value;
var ibranch=document.getElementById('ibranch').value;
var imarks=document.getElementById('imarks').value;
var board=document.getElementById('board').value;
var school=document.getElementById('school').value;
var medium=document.getElementById('medium').value;
var smarks=document.getElementById('smarks').value;
var skils=document.getElementById('skils').value;


var indexedDB=window.indexedDB||window.mozIndexedDB ||window.webKitIndexedDB|| window.msIndexedDB;
 //ternary Operation
 indexedDB?console.log("Success"):console.log("browser not Supported");

  //creating DataBase

  var request=indexedDB.open("DBMS",1);
  var result;
  var store;
  console.log(request);

  // upgradeneeded
  request.onupgradeneeded=function(e){
    result=e.target.result;
    store=result.createObjectStore("resume",{keyPath:'id',autoIncrement:true});
  }
//success
   request.onsuccess=function(e){
     console.log("reached Successfully");
       result=e.target.result;
       var tx=result.transaction("resume","readwrite");
       store=tx.objectStore("resume");
       store.put(
       {
         co:career
       }
     );
  }
  //error
  request.onerror=function(e){
    console.log("error"+e);
  }


}
