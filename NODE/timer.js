setInterval(function (){
console.log("Hello Raghav Wait for 5sec :(");
},100);
    var i =0;  
    console.log(i);  
    setInterval(function(){  
    i++;  
    console.log(i);  
    }, 100);   
    setTimeout(function() {   
    console.log("setTimeout: Hey! 1000 millisecond completed!..");  
    }, 1000);  