window.cipher = {
  encode: (numberOffset,encode) => {
    /* Acá va tu código */
    let result="";

    for (let i=0;i<encode.length;i++){

      let transformText=encode.charCodeAt(i);
      if (transformText>=65 && transformText<=90){
      let concatenarCipher=String.fromCharCode((transformText-65+parseInt(numberOffset))%26+65);
      result+=concatenarCipher; 

      }else if (transformText===32){
        result+=" ";

      }else if (transformText>=33 && transformText<=63){
        concatenarCipher=String.fromCharCode((transformText-33+parseInt(numberOffset))%31+33);
        result+=concatenarCipher; 
      }else  if (transformText>=97 && transformText<=122){
        concatenarCipher=String.fromCharCode((transformText-97+parseInt(numberOffset))%26+97);
        result+=concatenarCipher; 
      }else {

      }
      
          }
          return result;
  },
  decode: (offsetNumber,decode) => {
    /* Acá va tu código */
    let result="";
    for (let i=0;i<decode.length;i++){
      let transformText2=0;
      transformText2=decode.charCodeAt(i);
      let concatenarDecipher="";
      concatenarDecipher=String.fromCharCode((transformText2-90-parseInt(offsetNumber))%26+90);
      result+=concatenarDecipher;
          }
          return result;

  }
};