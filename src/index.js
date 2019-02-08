document.getElementById('container1').style.display="block";
document.getElementById('container2').style.display="none";
document.getElementById('container3').style.display="none";
document.getElementById('container4').style.display="none";


/*const container=document.getElementById("container1");*/

const firstButton= document.getElementById('btn_enter');
firstButton.addEventListener('click',() =>{
  let name= document.getElementById("write_name").value;
  //document.getElementById("write_name").value="";//

let userText=  document.getElementById('user_name');
user_name.innerHTML=`<h2>Bienvenida ${name}¿En qué situación te encuentras?</h2>`;

  document.getElementById('container1').style.display="none";
  document.getElementById('container2').style.display="block";
})

const secondButton= document.getElementById('btn_select');
secondButton.addEventListener('click',() => {

document.getElementById('container2').style.display="none";
document.getElementById('container3').style.display="block";


})

const thirdButton= document.getElementById('btn_go');
thirdButton.addEventListener('click',() =>{

document.getElementById('container3').style.display="none";
document.getElementById('container4').style.display="block";

})
