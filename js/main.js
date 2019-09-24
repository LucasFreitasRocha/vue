var app = new Vue({
    el: "#app",
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
        color: "",
        limpar: ['btn-sm', 'btn-danger'],
        enviar: {
            'btn-lg': true,
            'btn-primary': true,

        },
    },
    filters: {
        toUpCase(str) {
            return str.toUpperCase();
        }
    },
    methods: {
        teste() {
            alert('Enviado!');
        }
    }
})