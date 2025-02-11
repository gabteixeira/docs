module.exports = {
    head: [
        ['link', { rel: 'icon', href: '/images/icone.png' }]
    ],
    title: "Documentação | Linguagem Egua",
    description: "Programação simples e moderna em português",
    themeConfig: {
        nav: [
            { text: "Home", link: '/' },
            { text: "Introdução", link: '/introducao/'},
            { text: "Egua", link: '/egua/' },
            { text: "EguaMat", link: '/eguamat/' },
            { text: "GitHub", link: 'https://github.com/eguatech' }
        ],

        sidebar: {
            '/egua/': [
                '',
                'tipos_dados',
                'variaveis',
                'operadores',
                'fluxo_controle',
                'funcao',
                'classes',
                'funcoes_internas',
                'importar',
                'CONTRIBUTING'
            ],

            '/eguamat/': [
                '',
                'uteis',
                'funcao1_2',
                'estatistica',
                'matrizes',
                'trigonometria',
                'cinematica',
                'controle',
                'matrizes',
                'numerico',
                'CONTRIBUTING'
            ],

            '/introducao/':[
                '',
                'IDEgua',
                'modulos',
                'contribuindo',
                'CONTRIBUTING'
            ]

        },
        logo: "/images/logo.png"
    },
    base: "/docs/"
}
