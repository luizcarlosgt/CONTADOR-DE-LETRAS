// PEGAR A TAG ROOT
var app = new Vue({
    el: '#app',
    data: {
      message: null,
      letterscount : 0,
      wordscount: 0
    },
    watch:{
        message: function(){
            texto = formatarTexto(this.message);
            this.letterscount = this.message.length
            this.wordscount = texto.split(" ").length;
        }
    }
  })

  function formatarTexto(texto){
    var primerBlanco = /^ /
    var ultimoBlanco = / $/
    var variosBlancos = /[ ]+/g

    texto = texto.replace (variosBlancos," ");
    texto = texto.replace (primerBlanco,"");
    texto = texto.replace (ultimoBlanco,"");

    return texto;
  }