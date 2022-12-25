var n1=Math.random();
n1=Math.floor(n1*6)+1;
var randomimg1="dice"+n1+".png";

var path1="images/"+randomimg1;

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",path1); 

var n2=Math.random();
n2=Math.floor(n2*6)+1;

var randomimg2="dice"+n2+".png";
var path2="images/"+randomimg2;

var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",path2);

if(n1>n2){
    title=document.querySelector("h1");
    title.innerHTML="🚩Player 1 Wins";
}
else if(n1<n2){
    title=document.querySelector("h1");
    title.innerHTML="Player 2 Wins🚩";
}
else{
    title=document.querySelector("h1");
    title.innerHTML="Draw!";
}
