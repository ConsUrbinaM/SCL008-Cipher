document.getElementById('container1').style.display="block";
document.getElementById('container2').style.display="none";
document.getElementById('container3').style.display="none";
document.getElementById('container4').style.display="none";
document.getElementById('container5').style.display="none";


/*const container=document.getElementById("container1");*/

const firstButton= document.getElementById('btn_enter');
firstButton.addEventListener('click',() =>{
  let name= document.getElementById("write_name").value;
  let userText=  document.getElementById('user_name');
user_name.innerHTML=`<h2>Bienvenida ${name}¿En qué situación te encuentras?</h2>`;


/*const quarterButton=document.getElementById('cipher');
  quarterButton.addEventListener('click',() => {
  let encode= document.getElementById('message').value;
  let encodeMessage=document.getElementById('mesagge2');
  mesagge2.innerHTML=`<input ${encode} id="mesagge2" type="text" style="width:450px;height:150px">${encode}`;*/

  document.getElementById('container1').style.display="none";
  document.getElementById('container2').style.display="block";
})
//2 pantalla
const secondButton= document.getElementById('btn_select');
secondButton.addEventListener('click',() => {

document.getElementById('container2').style.display="none";
document.getElementById('container3').style.display="block";


})
//3 pantalla
const thirdButton= document.getElementById('btn_go');
thirdButton.addEventListener('click',() =>{

document.getElementById('container3').style.display="none";
document.getElementById('container4').style.display="block";

})

//4 pantalla



const quarterButton=document.getElementById('cipher');
quarterButton.addEventListener('click',() =>{

  let encode=document.getElementById('mesagge').value;
  let encodeMesagge=document.getElementById('mesagge_2');
  encodeMesagge.innerHTML=`${encode}`;


  document.getElementById('container4').style.display="none";
  document.getElementById('container5').style.display="block";

})

  /*let encode= document.getElementById('message').value='mesagge2';
  let encodeMessage= document.getElementById('message2');
  message2.innerHTML=`${encode}`;

  /*let encodeMessage=document.getElementById('message2');
  message2.innerHTML=`${encode}`
  document.getElementById('container4').style.display="none";
  document.getElementById('container5').style.display="block";*/

/*const firstButton= document.getElementById('btn_enter');
firstButton.addEventListener('click',() =>{
  let name= document.getElementById("write_name").value;
  let userText=  document.getElementById('user_name');
user_name.innerHTML=`<h2>Bienvenida ${name}¿En qué situación te encuentras?</h2>`;






/*const fifthButton=

const sixthButton= */










































/* function start(){

document.getElementById('container1').style.display="block";
document.getElementById('container2').style.display="none";
document.getElementById('container3').style.display="none";
document.getElementById('container4').style.display="none";


}

function loadName(){
  let writeName=document.getElementById('write_name').value;
  writeName= document.getElementById('user_name').innerHTML;
  document.getElementById('container1').style.display="none";
  document.getElementById('container2').style.display="block";
  document.getElementById('container3').style.display="none";
  document.getElementById('container4').style.display="none";
}

document.getElementById("btn_select").onclick= function situation(){

  document.getElementById('container1').style.display="none";
  document.getElementById('container2').style.display="none";
  document.getElementById('container3').style.display="block";
  document.getElementById('container4').style.display="none";


}
 document.getElementById('btn_ggo').onclick= function insecurity(){

   document.getElementById('container1').style.display="none";
   document.getElementById('container2').style.display="none";
   document.getElementById('container3').style.display="none";
   document.getElementById('container4').style.display="block";


 }
window.onload=start; */
