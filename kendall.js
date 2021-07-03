var app = new Vue({
    el: '#app',

    data: {
      tiempollegada: 0,
      
      tiempoServicio: 0,

      promediodeunidadesenelsistema: 0,
      tiempoconsumosistema: 0,

      tiempopromediofila: 0,

 
    },

    methods: {
      LambdaMiu: function () {

        let lambda = 1 / parseInt(this.tiempollegada) * 60
        let miu = 1 / parseInt(this.tiempoServicio) * 60

        this.promediodeunidadesenelsistema = lambda / ( miu - lambda );

        this.tiempoconsumosistema = 1 / (miu - lambda);

        this.tiempopromediofila = lambda^2 /  miu * (miu - lambda) ;

      }  
    }
  })
