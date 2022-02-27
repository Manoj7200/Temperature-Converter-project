function tempconverter(){
    var degree=document.getElementById("num").value;
    var typevalue=document.getElementById("typee").value;
    
   if(typevalue=="Fahrenheit"){
       var f=degree*1.8+32;
       document.getElementById("result").innerHTML=`${f}  °F`;
   }
   else{
       var c=(degree-32)/1.8;
       document.getElementById("result").innerHTML=`${c}  °C`;
   }
}