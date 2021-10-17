// PEGAR A TAG ROOT
var app = new Vue({
    el: '#app',
    data: {
      message: null,
      letterscount : "0",
    },
    watch:{
        message: function(){
            return this.letterscount = this.message.length
        }
    }
  })