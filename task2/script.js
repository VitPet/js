var a = [4,4];
var x2 = prompt('Please enter x2', '2');
var y2 = prompt('Please enter y2', '2');
var result = Math.sqrt(Math.pow((a[0] - x2),2) + Math.pow((a[1] - y2),2));
alert("Distance of  A("+a[0]+","+a[1]+ ") and B(" + x2 +","+y2+ ")=" + Math.round (result*100)/100);

