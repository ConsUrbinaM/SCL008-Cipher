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
document.getElementById('user_name').innerHTML=`<h4>Bienvenida ${name} ¿En qué situación te encuentras?</h4>`;


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

    document.getElementById('container4').style.display="none";
    document.getElementById('container5').style.display="block";

    let numberOffset=document.getElementById('offset').value;
    document.getElementById('offset').value="";
    let encode=document.getElementById('mesagge').value;
    document.getElementById('mesagge').value="";
       

  document.getElementById('mesagge_2').value=cipher.encode(numberOffset,encode);

  })

const fifthButton=document.getElementById('decipher');
fifthButton.addEventListener('click',() => {

  
  document.getElementById('container4').style.display="none";
  document.getElementById('container5').style.display="block";

  let offsetNumber=document.getElementById('offset').value;
  document.getElementById('offset').value="";
  let decode=document.getElementById('mesagge').value; 
    document.getElementById('mesagge').value="";
      
  document.getElementById('mesagge_2').value=cipher.decode(offsetNumber,decode);

})

const sixthButton=document.getElementById('back');

sixthButton.addEventListener('click',() =>{

   document.getElementById('container5').style.display="none";
  document.getElementById('container4').style.display="block";
 
})




