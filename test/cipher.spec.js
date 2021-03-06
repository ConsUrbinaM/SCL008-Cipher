


// a quien vamos a testear, es un arrow function 
describe('cipher', () => {
//siempre va dentro del describe, es lo que quiero comprobar, siempre va con "debería" o "should be"
  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
//assert.equal busca la igualdad (dentro pongo la función(dentro pongo los parámetros,parámetro), coma, aquí va el resultado)
    assert.equal(cipher.encode(33, "ABCDEFGHIJKLMNOPQRSTUVWXYZ"), "HIJKLMNOPQRSTUVWXYZABCDEFG");
  });

  it ('debería recibir como resultado sólo string',() => {
    //quiero solo datos de tipo string
    assert.typeOf(cipher.encode(2,"HOLA"),'string')
});

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', ()=>{
    assert.equal(cipher.decode(33,"HIJKLMNOPQRSTUVWXYZABCDEFG"),"ABCDEFGHIJKLMNOPQRSTUVWXYZ" );
  });

  describe('cipher.decode', () => {
    
    it('debería retornar "PWTIKWUWMABIA" para "HOLACOMOESTAS" con offset 200',()=>{
      assert.equal(cipher.decode(200,"HOLACOMOESTAS"), "PWTIKWUWMABIA");
    });

  });

});
});
}); 
