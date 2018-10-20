 

 $(function() {

'use strict';
//Adjust slider Height  //تحديد الطول بضريقه دينماكيه    

var winH=$(window).height(),
upperH = $('.upper-bar').innerHeight(),
navH   = $('.navbar').innerHeight();
     $('.slider,.carousel-item ').height(winH - (upperH + navH)); 
 });

