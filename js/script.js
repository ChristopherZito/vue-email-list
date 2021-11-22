var app = new Vue(
    {
        el:"#container",
        data:{
            //dati
            email: [],
        },
        mounted() {
            //ciclo for per la creazione di più elementi(e-mail)
            for(let i = 0; i < 10; i++){
                const self = this;
                axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then(function(component) {   
                    //push nell'array email dell'elemento creato                 
                    self.email.push(component.data.response);
                });
            }
        }
    }
);