window.cipher = {
  encode: (numberOffset,encode) => {
    /* Acá va tu código */
    let result="";
    for (let i=0;i<encode.length;i++){
      let transformText=0;
      transformText=encode.charCodeAt(i);
      let concatenarCipher="";
      concatenarCipher=String.fromCharCode((transformText-65+numberOffset)%26+65);
      result+=concatenarCipher;
          }
          return result;
  },
  decode: (numberOffset,decode) => {
    /* Acá va tu código */
    let result="";
    for (let i=0;i<decode.length;i++){
      let transformText=0;
      transformText=decode.charCodeAt(i);
      let concatenarDecipher="";
      concatenarDecipher=String.fromCharCode((transformText-90-numberOffset)%26+90);
      result+=concatenarDecipher;
          }
          return result;

  }
};
