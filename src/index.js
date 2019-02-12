document.getElementById('container1').style.display="block";
document.getElementById('container2').style.display="none";
document.getElementById('container3').style.display="none";
document.getElementById('container4').style.display="none";
document.getElementById('container5').style.display="none";


// funciones 1 pantalla

const firstButton= document.getElementById('btn_enter');
firstButton.addEventListener('click',() =>{
  let name= document.getElementById("write_name").value;
  //let userText=  document.getElementById('user_name');
document.getElementById('user_name').innerHTML=`<h2>Bienvenida ${name}¿En qué situación te encuentras?</h2>`;


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

alert("AMIGA!, sólo puedes escribir con MAYÚSCULAS ysinespacios, :)")

  document.getElementById('container3').style.display="none";
document.getElementById('container4').style.display="block";

})

//4 pantalla (acá es donde sucede la magia)


// decirle que a presionar boton cifrar, llame al cipher.encode y ejecute el codigo
  const quarterButton=document.getElementById('cipher');
  quarterButton.addEventListener('click',() =>{

    let numberOffset=document.getElementById('offset').value;
    let encode=document.getElementById('mesagge').value;


document.getElementById('mesagge_2').innerHTML+=cipher.encode(numberOffset,encode);

document.getElementById('container4').style.display="none";
  document.getElementById('container5').style.display="block";
})

const fifthButton=document.getElementById('decipher');
fifthButton.addEventListener('click',() => {

let numberOffset=document.getElementById('offset').value;
let decode=document.getElementById('mesagge').value; 

document.getElementById('mesagge_2').innerHTML+=cipher.decode(numberOffset,decode);

document.getElementById('container4').style.display="none";
document.getElementById('container5').style.display="block";


})

const sixthButton=document.getElementById('back');
sixthButton.addEventListener('click',() =>{

  document.getElementById('container5').style.display="none";
  document.getElementById('container4').style.display="block";

})



  //  encodeMesagge.innerHTML=`${encode}`;

/*
const quarterButton=document.getElementById('cipher');
quarterButton.addEventListener('click',() =>{

  let encode=document.getElementById('mesagge').value;
  let encodeMesagge=document.getElementById('mesagge_2');
  encodeMesagge.innerHTML=`${encode}`;

  let numberOffset=document.getElementById('offset').value;

  function cifrado(numberOffset,encode){
    let result="";
    for (let i=0;i<encode.length;i++){
      let transformText=0;
      transformText=encode.charCodeAt(i);
      let concatenarCipher="";
      concatenarCipher=String.fromCharCode((transformText-65+numberOffset)%26+65);
      result+=concatenarCipher;
          }
          return result;
  }
*/




//5 pantalla
