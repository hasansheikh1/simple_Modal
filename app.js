

var btn1=document.getElementById("btn1");
var tab1=document.getElementById("tab1");
tab1.style.display="block";
btn1.style.borderBottom="1px solid lightseagreen";

var btn2=document.getElementById("btn2");
var tab2=document.getElementById("tab2");

var btn3 =document.getElementById("btn3");
var tab3 =document.getElementById("tab3");

var btn4=document.getElementById("btn4");
var tab4=document.getElementById("tab4");



function tabChange(arg){

if(arg==="1"){
    tab1.style.display="block";
    btn1.style.borderBottom="1px solid lightseagreen";

    tab2.style.display="none";
    btn2.style.borderBottom="transparent";

    tab3.style.display="none";
    btn3.style.borderBottom="transparent";
    tab4.style.display="none";
    btn4.style.borderBottom="transparent";
}

 if(arg==="2"){

tab1.style.display="none";
btn1.style.borderBottom="transparent";

tab2.style.display="block";
btn2.style.borderBottom="1px solid lightseagreen";

tab3.style.display="none";
btn3.style.borderBottom="transparent";
tab4.style.display="none";
btn4.style.borderBottom="transparent";

}

if(arg==="3"){
    tab1.style.display="none";
    btn1.style.borderBottom="transparent";
    tab2.style.display="none";
    btn2.style.borderBottom="transparent";
    tab3.style.display="block";
    btn3.style.borderBottom="1px solid lightseagreen";
    tab4.style.display="none";
    btn4.style.borderBottom="transparent";


}

if(arg==="4"){
    tab1.style.display="none";
    btn1.style.borderBottom="transparent";
    tab2.style.display="none";
    btn2.style.borderBottom="transparent";
    tab3.style.display="none";
    btn3.style.borderBottom="transparent";
    tab4.style.display="block";
    btn4.style.borderBottom="1px solid lightseagreen";


}
}


var modal=document.getElementsByClassName("modal")[0];
function modal1(){
    if(modal.style.display==="none"){
        modal.style.display="flex";
    }
    else{
        modal.style.display="none";
    }


}
function up(){

    document.getElementsByClassName("modal-content")[0].style.height="80vh";
}