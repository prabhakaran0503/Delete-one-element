var arrlengh=prompt("Enter The Lenght Of Array");
var a=[];
for (let i=0;i<arrlengh;i++){
a[i]=prompt("Enter The"+(i+1)+"Value");

}
document.write("a="+a+"<br>"+"<br>");
var b=prompt("Enter The Position Element");
var del=prompt("Enter The Delete  Element");
var c=a.splice(b,del);
document.write("Delete The Element"+a);