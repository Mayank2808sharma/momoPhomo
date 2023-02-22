var vegsteammomo = 0;
var chickensteammomo = 0;
var pannersteammomo = 0;
var vegfriedmomo = 0;
var chickenfriedmomo = 0;
var pannerfriedmomo = 0;
var vegkurkuremomo = 0;
var chickenkurkuremomo = 0;
var pannerkurkuremomo = 0;
var springrolls = 0;
var springrollsh = 0;
document.getElementById('vegsteam').addEventListener("click",function(){
    vegsteammomo+=1;
    document.getElementById('vegmomocount').innerHTML = vegsteammomo;
});

document.getElementById('pannersteam').addEventListener("click",function(){
    pannersteammomo+=1;
    document.getElementById('pannermomocount').innerHTML = pannersteammomo;
});

document.getElementById('chickensteam').addEventListener("click",function(){
    chickensteammomo+=1;
    document.getElementById('chickenmomocount').innerHTML = chickensteammomo;
});

document.getElementById('vegfried').addEventListener("click",function(){
    vegfriedmomo+=1;
    document.getElementById('vegfriedmomocount').innerHTML = vegfriedmomo;
});

document.getElementById('pannerfried').addEventListener("click",function(){
    pannerfriedmomo+=1;
    document.getElementById('pannerfriedmomocount').innerHTML = pannerfriedmomo;
});

document.getElementById('chickenfried').addEventListener("click",function(){
    chickenfriedmomo+=1;
    document.getElementById('chickenfriedmomocount').innerHTML = chickenfriedmomo;
});

document.getElementById('vegkur').addEventListener("click",function(){
    vegkurkuremomo+=1;
    document.getElementById('vegkurcount').innerHTML = vegkurkuremomo;
});

document.getElementById('pannerkur').addEventListener("click",function(){
    pannerkurkuremomo+=1;
    document.getElementById('pannerkurcount').innerHTML = pannerkurkuremomo;
});

document.getElementById('chickenkur').addEventListener("click",function(){
    chickenkurkuremomo+=1;
    document.getElementById('chickkurkcount').innerHTML = chickenkurkuremomo;
});

document.getElementById('springrollid').addEventListener("click",function(){
    springrolls+=1;
    document.getElementById('springrollcount').innerHTML = springrolls;
});

document.getElementById('springrollhalf').addEventListener("click",function(){
    springrollsh+=1;
    document.getElementById('springrollhalfcount').innerHTML = springrollsh;
});
