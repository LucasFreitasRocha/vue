var app = new Vue({
    el: "#app",
    beforeCreate() {
        console.log('beforeCreate');
        console.log('status', this.status);
        console.log('elemento', this.$el);
    },
    created() {
        console.log('Created');
        console.log('status', this.status);
        console.log('elemento', this.$el);
    },
    beforeMount() {
        console.log('beforeMount');
        console.log('elemento', this.$el);
    },
    mounted() {
        console.log('mounted');
        console.log('elemento', this.$el);
    },
    beforeUpdate() {
        console.log('beforeUpdate');
    },
    updated() {
        console.log('updated');
    },
    data: {
        status: false,
        titulo_true: "O status é verdadeiro!",
        titulo_false: " O status é falso",
        lingua: "Linguagens de programação",
        linguagens: [
            { nome: "JavaScript" },
            { nome: "Ruby" },
            { nome: "PHP" },
        ],
        texto: " ",
        logo: "imgs/logo.svg",
        alt: "logo da empresa",
        lifecycle: "imgs/lifecycle.png",
        color: "",
        limpar: ['btn-sm', 'btn-danger'],
        enviar: {
            'btn-lg': true,
            'btn-primary': true,

        },
        firstName: "",
        lastName: "",
    },
    filters: {
        toUpCase(str) {
            return str.toUpperCase();
        }
    },
    methods: {
        teste() {
            alert('Enviado!');
        },
        updateUser() {
            alert('Usuario atualizado com sucesso');
        }

    },
    computed: {
        fullName() {

            return this.firstName + ' ' + this.lastName;
        }
    },
    watch: {
        firstName(newValue, oldValue) {
            console.log('oldValue:', oldValue);
            console.log('newValue', newValue);
            this.updateUser();
        },
        lastName(newValue, oldValue) {
            console.log('oldValue:', oldValue);
            console.log('newValue', newValue);
            this.updateUser();
        },
    }
})