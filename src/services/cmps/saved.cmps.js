import { utilService } from '@/services/util-service.js'

export const savedCmps = [
    // navbar: 

    {
        type: 'web-container',
        name: 'navbar',
        previewImg: 'https://i.ibb.co/yyHX4HL/vita-nav.jpg',
        id: 'nav003',
        'class': 'navbar-1',
        info: {
            dir: 'row',
            cmps: [{
                    id: 'YeVPIjtYjZ',
                    type: 'web-button',
                    info: {
                        content: 'VITA'
                    },
                    style: {
                        fontFamily: 'robotomono',
                        fontSize: '1.5rem',
                        color: '#161d2e',
                        backgroundColor: '#fff',
                        borderRadius: '0px',
                        letterSpacing: '0rem'
                    },
                    _rootId: 'nav003'
                },
                {
                    type: 'web-div',
                    name: 'card-tem-01',
                    'class': 'web-div',
                    id: 'smgo5aUcOd',
                    info: {
                        dir: 'row',
                        cmps: [{
                                id: 'nTvMfKampL',
                                type: 'web-button',
                                info: {
                                    content: 'SHOP',
                                    linkTo: '#'
                                },
                                style: {
                                    borderRadius: '0px',
                                    fontSize: '1.125rem',
                                    letterSpacing: '0rem'
                                },
                                _rootId: '__vue_devtool_undefined__'
                            },
                            {
                                id: 'aScot9Y9h4',
                                type: 'web-button',
                                info: {
                                    content: 'ABOUT',
                                    linkTo: '#'
                                },
                                style: {
                                    borderRadius: '0px',
                                    fontSize: '1.125rem'
                                },
                                _rootId: '__vue_devtool_undefined__'
                            },
                            {
                                id: 's5ZNJwGF9E',
                                type: 'web-button',
                                info: {
                                    content: 'CONTACT US',
                                    linkTo: '#'
                                },
                                style: {
                                    borderRadius: '0px',
                                    fontSize: '1.125rem'
                                },
                                _rootId: '__vue_devtool_undefined__'
                            }
                        ]
                    },
                    style: {
                        fontSize: '1rem',
                        color: '#161d2e',
                        backgroundColor: '#fff'
                    }
                }
            ]
        },
        style: {
            fontSize: '1rem',
            height: '4rem',
            color: '#161d2e',
            backgroundColor: '#fff',
            width: '100%'
        }
    },
    {
        type: "web-container",
        name: "navbar",
        id: "nav002",
        class: "navbar-1",
        previewImg: 'https://i.ibb.co/s3ptfYv/chateau.jpg',
        info: {
            dir: "row",
            cmps: [{
                    id: utilService.makeId(10),
                    type: "web-button",
                    info: {
                        content: "CHÂTEAU DU BRUNCH"
                    },
                    style: {
                        fontSize: "1.5rem",
                        color: "#e3baba",
                        backgroundColor: "#161d2e",

                    }
                },
                {
                    type: "web-div",
                    name: "card-tem-01",
                    class: "",
                    id: utilService.makeId(10),
                    info: {
                        dir: "row",
                        cmps: [{
                                id: utilService.makeId(10),
                                type: "web-button",
                                info: {
                                    content: "ABOUT",
                                    linkTo: "#"
                                },
                                style: {
                                    fontSize: "1rem"
                                },
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-button",
                                info: {
                                    content: "RESERVE TABLE",
                                    linkTo: "#"

                                },
                                style: {
                                    fontSize: "1rem"
                                },
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-button",
                                info: {
                                    content: "CONTACT US",
                                    linkTo: "#"

                                },
                                style: {
                                    fontSize: "1rem"
                                },
                            }
                        ]
                    },
                    style: {
                        fontSize: "1rem",
                        color: "#fff",
                        backgroundColor: "#161d2e",

                    }
                }
            ]
        },
        style: {
            fontSize: "1rem",
            color: "#fff",
            backgroundColor: "#161d2e",

        }
    },
    {
        type: "web-container",
        name: "navbar",
        id: "nav001",
        class: "navbar-1",
        previewImg: 'https://i.ibb.co/mzq5Y41/basic-nav.jpg',
        info: {
            dir: "row",
            cmps: [{
                    id: utilService.makeId(10),
                    type: "web-button",
                    info: {
                        content: "Logo"
                    },
                    style: {
                        fontFamily: "assistantLight",
                        fontSize: "3.375rem",
                        lineHeight: "auto",
                        padding: "15px",
                    }
                },


                {
                    type: "web-div",
                    name: "nav-btns",
                    id: utilService.makeId(10),
                    class: "web-div-nav-btns",
                    info: {
                        dir: "row",
                        cmps: [{
                                id: utilService.makeId(10),
                                type: "web-button",
                                info: {
                                    content: "Home",
                                    linkTo: "#"
                                },
                                style: {
                                    fontFamily: "assistantLight",
                                    fontWeight: "bold",

                                },
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-button",
                                info: {
                                    content: "Services",
                                    linkTo: "#"

                                },
                                style: {
                                    fontFamily: "assistantLight",
                                    fontWeight: "bold",
                                    letterSpacing: '0.08rem'
                                },
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-button",
                                info: {
                                    content: "Gallery",
                                    linkTo: "#"

                                },
                                style: {
                                    fontFamily: "assistantLight",
                                    fontWeight: "bold",
                                },
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-button",
                                info: {
                                    content: "About us  ",
                                    linkTo: "#"

                                },
                                style: {
                                    fontFamily: "assistantLight",
                                    fontWeight: "bold",
                                },
                            },
                        ]
                    }
                },


                {
                    id: utilService.makeId(10),
                    type: "web-hamburger",
                    class: "hamburger",
                    info: {
                        content: "",
                        linkTo: ""
                    },
                    style: {


                    },
                },

            ]
        },
        style: {

        }
    },
    {
        type: 'web-container',
        name: 'navbar',
        id: 'saas-nav',
        previewImg: 'https://i.ibb.co/Vw9mynd/nav1.jpg',
        'class': 'navbar-2-container',
        info: {
            dir: 'row',
            cmps: [{
                    id: 'f8ayy9gw4I',
                    type: 'web-img',
                    info: {
                        src: 'https://res.cloudinary.com/dksmeovlj/image/upload/v1607278761/4249703744_cb4556d2-0594-47e7-8852-6eebfafa4f5d_hhtzug.png'
                    },
                    style: {
                        width: '70%',
                        borderRadius: '0%'
                    },
                    _rootId: 'saas-nav'
                },
                {
                    type: 'web-div',
                    name: 'card',
                    id: '4caepCz5sO',
                    'class': 'navbar-2-div',
                    info: {
                        dir: 'row',
                        cmps: [{
                                id: '75pxcwv5jh',
                                type: 'web-button',
                                'class': 'navbar-2-menu-link',
                                info: {
                                    content: 'Order Delivery'
                                },
                                style: {
                                    color: 'aliceblue',
                                    fontSize: '0.9375rem',
                                    fontWeight: '400',
                                    borderRadius: '0px',
                                }
                            },
                            {
                                id: 'AmmT3uY0Aa',
                                type: 'web-button',
                                'class': 'navbar-2-menu-link',
                                info: {
                                    content: 'Our Shops'
                                },
                                style: {
                                    color: 'aliceblue',
                                    fontSize: '0.9375rem',
                                    fontWeight: '400',
                                    borderRadius: '0px'
                                }
                            },
                            {
                                id: '96MlZ0lAvN',
                                type: 'web-button',
                                'class': 'navbar-2-menu-link',
                                info: {
                                    content: 'Menu'
                                },
                                style: {
                                    color: 'aliceblue',
                                    fontSize: '0.9375rem',
                                    fontWeight: '400',
                                    borderRadius: '0px'
                                }
                            }
                        ]
                    },
                    style: {
                        paddingRight: '2.75rem',
                        paddingLeft: '2.75rem'
                    }
                },
                {
                    id: 'dfg564fghfgh9808',
                    type: 'web-hamburger',
                    'class': 'hamburger',
                    info: {
                        content: '',
                        linkTo: ''
                    },
                    style: {}
                }
            ]
        },
        style: {
            color: '#fff',
            backgroundColor: 'rgba(255, 0, 150, 0.3)',
            paddingRight: '7rem',
            paddingLeft: '7rem'
        }
    },

    // header: 

    {
        type: "web-container",
        name: "header",
        id: "head001",
        class: "web-header-1",
        previewImg: "https://i.ibb.co/09X6T9w/preview-header-basic001.jpg",
        info: {
            dir: "row",
            cmps: [{
                    type: "web-div",
                    name: "header-1",
                    class: "header-1-div",
                    id: utilService.makeId(10),
                    info: {
                        dir: "column",
                        cmps: [{
                                id: utilService.makeId(10),
                                type: "web-txt",
                                class: "header-1-h1",
                                info: {
                                    content: "This is a sample H1 text"
                                },
                                style: {
                                    fontSize: "4.1875rem",
                                    margin: "0 50px",
                                    color: "#fff",
                                    letterSpacing: "0.08rem"

                                },
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-txt",
                                class: "web-header-1-p",
                                info: {
                                    content: "The smallest unit that has \"organizational\" meaning in the book is the paragraph. The single letter does not survive the translation from language to language, nor does the word."
                                },
                                style: {
                                    fontSize: "1rem",
                                    color: "#fff",
                                    maxWidth: "80ch",
                                    textAlign: "left"
                                },
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-button",
                                class: "header-1-btn",
                                info: {
                                    content: "Get Started",
                                    linkTo: "#"
                                },
                                style: {
                                    fontSize: "1.2em",
                                    fontWeight: "100",
                                    margin: "50px",
                                    padding: "20px",
                                    color: "#333",
                                    backgroundColor: "#fff",
                                    borderRadius: "30px",
                                },
                            }

                        ]
                    }
                }

            ]
        }
    },
    {
        type: 'web-container',
        name: 'header',
        id: 'header004',
        previewImg: 'https://i.ibb.co/1rgR188/screencapture-localhost-8080-editor-2020-11-30-20-39-28-1-8.jpg',
        'class': 'header-v',
        info: {
            dir: 'col',
            cmps: [{
                    id: 'mTL09zuRKP',
                    type: 'web-txt',
                    'class': 'v-title',
                    info: {
                        content: 'VITA urban living'
                    },
                    style: {
                        textAlign: 'center',
                        fontFamily: 'romantika',
                        fontSize: '6rem',
                        letterSpacing: '0.3125rem',
                        margin: '0 auto',
                        color: 'rgb(84, 84, 84)',
                        textShadow: 'unset'
                    },
                    _rootId: 'header004'
                },
                {
                    id: '48aoy00CE6',
                    type: 'web-button',
                    'class': 'v-button',
                    info: {
                        content: 'BRING NATURE HOME',
                        linkTo: '#'
                    },
                    style: {
                        fontFamily: 'champagneLimousines',
                        fontWeight: 'bold',
                        letterSpacing: '0.01953125rem',
                        padding: '5px 10px',
                        color: '#fff',
                        backgroundColor: 'rgb(94,204,191)',
                        border: '2px solid #fff',
                        outline: '3px solid rgb(94,204,191)',
                        borderRadius: '0px',
                        fontSize: '0.875rem'
                    },
                    _rootId: 'header004'
                }
            ]
        },
        style: {
            paddingTop: '4rem',
            padding: '15px',
            backgroundImage: 'url("https://res.cloudinary.com/dksmeovlj/image/upload/v1606596890/2179_1_yr7og7.jpg")',
            backgroundSize: 'contain',
            minHeight: '0rem',
            paddingRight: '15rem',
            paddingLeft: '15rem'
        }
    },
    {
        type: "web-container",
        name: "header",
        id: "header002",
        previewImg: 'https://res.cloudinary.com/dksmeovlj/image/upload/v1607071492/screencapture-localhost-8080-editor-2020-11-30-20_39_28_1_1_mwekqy.png',
        class: "first-section-cdb",
        info: {
            dir: "row",
            cmps: [{
                    type: "web-div",
                    name: "card-tem-02",
                    class: "card-text",
                    id: utilService.makeId(10),
                    info: {
                        dir: "row",
                        cmps: [{
                                id: utilService.makeId(10),
                                type: "web-txt",
                                info: {
                                    content: "CHÂTEAU/DU/BRUNCH",
                                },
                                style: {
                                    display: "inline-block",
                                    fontSize: "3.1rem",
                                    color: "#fff",
                                },
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-txt",
                                info: {
                                    content: "It's always brunch o'clock",
                                },
                                style: {
                                    fontSize: "2rem",
                                    color: 'rgb(227, 186, 186)',
                                },
                            },
                        ]
                    },
                },
                {
                    type: "web-div",
                    name: "card-tem-02",
                    class: "card-image",
                    id: utilService.makeId(10),
                    info: {
                        dir: "row",
                        cmps: [{
                            id: utilService.makeId(10),
                            type: "web-img",
                            info: {
                                src: "https://images.unsplash.com/photo-1550411294-56f7d0c7fbe6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
                            },
                            style: {}
                        }]
                    },
                }
            ]
        },
        style: {
            display: "flex",
            color: "#fff",
            backgroundColor: "#161d2e",
        },
    },
    {
        type: "web-container",
        previewImg: "https://i.ibb.co/2ZDxMWd/medellin-header-preview.jpg",
        name: "header",
        id: "header006",
        class: "test",
        info: {
            dir: "row",
            cmps: [{
                    type: "web-div",
                    class: "md-nav",
                    id: utilService.makeId(8),
                    info: {
                        cmps: [{
                                id: utilService.makeId(10),
                                type: "web-button",
                                class: "md-nav-title",
                                info: {
                                    content: "Medellin"
                                },
                                style: {
                                    fontSize: "1.8rem",
                                    color: "#fff",
                                    letterSpacing: "0.08rem"
                                }
                            },
                            {
                                type: "web-div",
                                name: "card-tem-01",
                                class: "md-nav-btns",
                                id: utilService.makeId(10),
                                info: {
                                    dir: "row",
                                    cmps: [{
                                            id: utilService.makeId(10),
                                            type: "web-button",
                                            info: {
                                                content: "Portfolio",
                                                linkTo: "#"
                                            },
                                            style: {
                                                color: "#fff",
                                                fontSize: "0.9rem"
                                            },
                                        },
                                        {
                                            id: utilService.makeId(10),
                                            type: "web-button",
                                            info: {
                                                content: "Elements",
                                                linkTo: "#"

                                            },
                                            style: {
                                                color: "#fff",
                                                fontSize: "0.9rem"
                                            },
                                        },
                                        {
                                            id: utilService.makeId(10),
                                            type: "web-button",
                                            info: {
                                                content: "Get in touch",
                                                linkTo: "#"

                                            },
                                            style: {
                                                color: "#fff",
                                                fontSize: "0.9rem"
                                            },
                                        }
                                    ]
                                },
                                style: {
                                    fontSize: "1rem",
                                    color: "#fff",
                                }
                            }
                        ]
                    },
                },
                {
                    type: "web-div",
                    name: "card-tem-02",
                    class: "card-text",
                    previewImg: 'https://i.ibb.co/2ZDxMWd/medellin-header-preview.jpg',
                    id: utilService.makeId(10),
                    info: {
                        dir: "row",
                        cmps: [{
                                id: utilService.makeId(10),
                                type: "web-txt",
                                info: {
                                    content: "Get Creative",
                                },
                                style: {
                                    fontSize: "6rem",
                                    color: "#fff",
                                    fontFamily: 'assistantBold',
                                    textAlign: 'center',
                                    letterSpacing: "0.09rem"
                                },
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-txt",
                                class: "mb1",
                                info: {
                                    content: "Strategic thinking. compelling design.",
                                },
                                style: {
                                    fontSize: "2rem",
                                    color: "#fff",
                                    fontFamily: 'assistantLight',
                                    textAlign: 'center',
                                    letterSpacing: "0.08rem"
                                },
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-button",
                                info: {
                                    content: "Get Started",
                                },
                                style: {
                                    fontSize: "1.3rem",
                                    color: "#fff",
                                    fontFamily: 'assistantLight',
                                    textAlign: 'center',
                                    backgroundColor: "#26c4e5",
                                    borderRadius: '48px',
                                    padding: "0.5rem 2rem !important",
                                    letterSpacing: "0.08rem"
                                },
                            }
                        ]
                    },
                    style: {
                        textAlign: 'center',
                    }
                },
            ]
        },
        style: {
            display: "flex",
            color: "#fff",
            backgroundImage: "url(\"https://res.cloudinary.com/dksmeovlj/image/upload/v1606995796/New_Project_pdn1zl.png\")",
            minHeight: "50rem"
        },
    },
    {
        type: 'web-container',
        name: 'header',
        id: 'saas-header',
        previewImg: 'https://i.ibb.co/v1dc6nF/screencapture-localhost-8080-editor-2020-11-30-20-39-28-1-15.jpg',
        'class': 'header-2-container',
        info: {
            dir: 'row',
            cmps: [{
                    id: 's4OCXoCpZm',
                    type: 'web-img',
                    info: {
                        src: 'https://i.ibb.co/qBTKyLh/i-Phone-App-3.png'
                    },
                    style: {
                        width: '90%'
                    },
                    _rootId: 'saas-header'
                },
                {
                    type: 'web-div',
                    name: 'card',
                    id: '1mZp4Udpnv',
                    'class': 'header-2-div',
                    info: {
                        dir: 'row',
                        cmps: [{
                                id: 'HffeArf3Gf',
                                type: 'web-txt',
                                'class': 'header-2-title',
                                info: {
                                    content: 'Discover Great Music Every Day'
                                },
                                style: {
                                    textAlign: 'start',
                                    fontSize: '3.625rem'
                                },
                                _rootId: '__vue_devtool_undefined__'
                            },
                            {
                                id: '8DOzi6I1Pj',
                                type: 'web-txt',
                                'class': 'header-2-pa',
                                info: {
                                    content: 'High-quality, original content. Ad-free, start today with a 14-day free trial.  No credit card required.'
                                },
                                style: {
                                    textAlign: 'start',
                                    fontSize: '1.4375rem'
                                },
                                _rootId: '__vue_devtool_undefined__'
                            },
                            {
                                id: 'pUhUBHrIeW',
                                type: 'web-button',
                                'class': 'navbar-2-button',
                                info: {
                                    content: 'START NOW'
                                },
                                style: {
                                    fontSize: '1rem',
                                    letterSpacing: '0.04375rem',
                                    color: 'rgb(97, 95, 95)',
                                    backgroundColor: '#fcc400',
                                    borderRadius: '50px'
                                },
                                _rootId: '__vue_devtool_undefined__'
                            }
                        ]
                    },
                    style: {}
                }
            ]
        },
        style: {
            backgroundColor: 'rgba(255, 0, 150, 0.3)',
            backgroundImage: `url('https://svgshare.com/i/Rta.svg')`
        }
    },

    // footer:

    {
        type: "web-container",
        name: "footer",
        id: "footer-v",
        class: "footer-v  ",
        previewImg: 'https://i.ibb.co/3SKGTxv/screencapture-localhost-8080-editor-2020-11-30-20-39-28-1-13.jpg',
        info: {
            dir: "row",
            cmps: [{
                    type: "web-div",
                    name: "",
                    class: "div-v",
                    id: utilService.makeId(10),
                    info: {
                        dir: "row",
                        cmps: [{
                                id: utilService.makeId(10),
                                type: "web-txt",
                                info: {
                                    content: "shop"
                                },
                                style: {
                                    fontSize: "1rem",
                                    fontWeight: "bold",
                                    textAlign: "center",
                                    marginTop: "1rem",
                                    backgroundColor: "#fff",
                                    lineHeight: "auto"
                                }
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-txt",
                                info: {
                                    content: "all plants"
                                },
                                style: {
                                    fontSize: "0.9rem",
                                    margin: "0 auto",
                                    textAlign: "center",
                                    backgroundColor: "#fff",
                                    lineHeight: "auto"
                                }
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-txt",
                                info: {
                                    content: "books and accessories"
                                },
                                style: {
                                    fontSize: "0.9rem",
                                    margin: "0 auto",
                                    textAlign: "center",
                                    backgroundColor: "#fff",
                                    lineHeight: "auto"
                                }
                            }
                        ]
                    },
                },
                {
                    type: "web-div",
                    name: "",
                    class: "div-v",
                    id: utilService.makeId(10),
                    info: {
                        dir: "row",
                        cmps: [{
                                id: utilService.makeId(10),
                                type: "web-txt",
                                class: "footer-v-02",
                                info: {
                                    content: "my account"
                                },
                                style: {
                                    fontSize: "1rem",
                                    fontWeight: "bold",
                                    marginTop: "1rem",
                                    margin: "0 auto",
                                    textAlign: "center",
                                    backgroundColor: "#fff",
                                    lineHeight: "auto"
                                }
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-txt",
                                info: {
                                    content: "manage your account"
                                },
                                style: {
                                    fontSize: "0.9rem",
                                    margin: "0 auto",
                                    textAlign: "center",
                                    backgroundColor: "#fff",
                                    lineHeight: "auto"
                                }
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-txt",
                                info: {
                                    content: "order history"
                                },
                                style: {
                                    fontSize: "0.9rem",
                                    margin: "0 auto",
                                    textAlign: "center",
                                    backgroundColor: "#fff",
                                    lineHeight: "auto"
                                }
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-txt",
                                info: {
                                    content: "save items"
                                },
                                style: {
                                    fontSize: "0.9rem",
                                    margin: "0 auto",
                                    textAlign: "center",
                                    backgroundColor: "#fff",
                                    lineHeight: "auto"
                                }
                            }
                        ]
                    }
                },
                {
                    type: "web-div",
                    name: "",
                    class: "div-v",
                    id: utilService.makeId(10),
                    info: {
                        dir: "row",
                        cmps: [{
                                id: utilService.makeId(10),
                                type: "web-txt",
                                class: "footer-v-02",
                                info: {
                                    content: "customer service"
                                },
                                style: {
                                    fontSize: "1rem",
                                    fontWeight: "bold",
                                    marginTop: "1rem",
                                    margin: "0 auto",
                                    textAlign: "center",
                                    backgroundColor: "#fff",
                                    lineHeight: "auto"
                                }
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-txt",
                                info: {
                                    content: "FAQ"
                                },
                                style: {
                                    fontSize: "0.9rem",
                                    margin: "0 auto",
                                    textAlign: "center",
                                    backgroundColor: "#fff",
                                    lineHeight: "auto"
                                }
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-txt",
                                info: {
                                    content: "transport and delivery"
                                },
                                style: {
                                    fontSize: "0.9rem",
                                    margin: "0 auto",
                                    textAlign: "center",
                                    backgroundColor: "#fff",
                                    lineHeight: "auto"
                                }
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-txt",
                                info: {
                                    content: "return and recycle service"
                                },
                                style: {
                                    fontSize: "0.9rem",
                                    margin: "0 auto",
                                    textAlign: "center",
                                    backgroundColor: "#fff",
                                    lineHeight: "auto"
                                }
                            },
                        ]
                    },
                }
            ]
        }
    },
    {
        type: "web-container",
        name: "footer",
        id: "footer002",
        class: "footer-cdb",
        previewImg: 'https://res.cloudinary.com/dksmeovlj/image/upload/v1606848477/screencapture-localhost-8080-editor-2020-11-30-20_39_28_1_5_wniexp.jpg',
        info: {
            dir: "row",
            cmps: [{
                id: utilService.makeId(10),
                type: "web-txt",
                info: {
                    content: "ALL RIGHTS RESERVED TO CHÂTEAU DU BRUNCH (C) MAY YOUR LIFE BE FILLED WITH BRUNCHES"
                },
                style: {
                    fontSize: "1.1rem",
                    margin: "0 auto",
                    textAlign: "center",
                    color: "#e3baba",
                    backgroundColor: "#161d2e",

                }
            }]
        },
    },
    {
        type: "web-container",
        name: "footer",
        previewImg: 'https://i.ibb.co/cg396Kf/footer-md.jpg',
        id: "footer-md",
        class: "footer-md  ",
        info: {
            dir: "row",
            cmps: [{
                    type: "web-div",
                    name: "",
                    class: "div-v",
                    id: utilService.makeId(10),
                    info: {
                        dir: "row",
                        cmps: [{
                                id: utilService.makeId(10),
                                type: "web-txt",
                                info: {
                                    content: "Portfolio"
                                },
                                style: {
                                    fontSize: "1rem",
                                    fontWeight: "bold",
                                    textAlign: "center",
                                    color: "#fff",
                                    marginTop: "1rem",
                                    lineHeight: "auto"
                                }
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-txt",
                                info: {
                                    content: "Visual design"
                                },
                                style: {
                                    fontSize: "0.9rem",
                                    margin: "0 auto",
                                    textAlign: "center",
                                    color: "#fff",
                                    lineHeight: "auto"
                                }
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-txt",
                                info: {
                                    content: "Creative"
                                },
                                style: {
                                    fontSize: "0.9rem",
                                    color: "#fff",
                                    margin: "0 auto",
                                    textAlign: "center",
                                    lineHeight: "auto"
                                }
                            }
                        ]
                    },
                },
                {
                    type: "web-div",
                    name: "",
                    class: "div-v",
                    id: utilService.makeId(10),
                    info: {
                        dir: "row",
                        cmps: [{
                                id: utilService.makeId(10),
                                type: "web-txt",
                                class: "footer-v-02",
                                info: {
                                    content: "Elements"
                                },
                                style: {
                                    fontSize: "1rem",
                                    fontWeight: "bold",
                                    marginTop: "1rem",
                                    margin: "0 auto",
                                    color: "#fff",
                                    textAlign: "center",
                                    lineHeight: "auto"
                                }
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-txt",
                                info: {
                                    content: "Developing"
                                },
                                style: {
                                    fontSize: "0.9rem",
                                    color: "#fff",
                                    margin: "0 auto",
                                    textAlign: "center",
                                    lineHeight: "auto"
                                }
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-txt",
                                info: {
                                    content: "Maintenance"
                                },
                                style: {
                                    fontSize: "0.9rem",
                                    color: "#fff",
                                    margin: "0 auto",
                                    textAlign: "center",
                                    lineHeight: "auto"
                                }
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-txt",
                                info: {
                                    content: "Upgrading"
                                },
                                style: {
                                    fontSize: "0.9rem",
                                    color: "#fff",
                                    margin: "0 auto",
                                    textAlign: "center",
                                    lineHeight: "auto"
                                }
                            }
                        ]
                    }
                },
                {
                    type: "web-div",
                    name: "",
                    class: "div-v",
                    id: utilService.makeId(10),
                    info: {
                        dir: "row",
                        cmps: [{
                                id: utilService.makeId(10),
                                type: "web-txt",
                                class: "footer-v-02",
                                info: {
                                    content: "Find us in"
                                },
                                style: {
                                    fontSize: "1rem",
                                    fontWeight: "bold",
                                    marginTop: "1rem",
                                    margin: "0 auto",
                                    textAlign: "center",
                                    color: "#fff",
                                    lineHeight: "auto"
                                }
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-txt",
                                info: {
                                    content: "Above Bar St, Southampton SO14 7DQ, UK"
                                },
                                style: {
                                    fontSize: "0.9rem",
                                    margin: "0 auto",
                                    textAlign: "center",
                                    color: "#fff",
                                    lineHeight: "auto"
                                }
                            },
                        ]
                    },
                }
            ]
        },
        style: {
            backgroundColor: "#07112d",
            minHeight: "10rem"
        }
    },
    {
        type: "web-container",
        name: "footer",
        id: "footer001",
        class: "footer-1",
        previewImg: 'https://i.ibb.co/2W3fSc9/footer-basic001.jpg',
        info: {
            dir: "column",
            cmps: [{
                    id: utilService.makeId(10),
                    type: "web-txt",
                    info: {
                        content: "All right reserved to Webix©"
                    },
                    style: {
                        fontFamily: "assistantLight",
                        fontSize: "1.0625rem",
                    },
                },
                {
                    type: "web-div",
                    name: "social-btns-container",
                    id: utilService.makeId(10),
                    class: "social-btns-container",
                    info: {
                        dir: "column",
                        cmps: [{
                                id: utilService.makeId(10),
                                type: "web-button",
                                info: {
                                    content: "",
                                    linkTo: "#",
                                    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"

                                },
                                style: {

                                },
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-button",
                                info: {
                                    content: "",
                                    linkTo: "#",
                                    imgUrl: "https://i.pinimg.com/originals/d2/e5/35/d2e5359f8402cb8d3d7b22c463f9013b.png"

                                },
                                style: {

                                },
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-button",
                                info: {
                                    content: "",
                                    linkTo: "#",
                                    imgUrl: "data:image/png;base64,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"

                                },
                                style: {

                                },
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-button",
                                info: {
                                    content: "",
                                    linkTo: "#",
                                    imgUrl: "data:image/png;base64,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"

                                },
                                style: {

                                },
                            }
                        ]
                    },
                    style: {

                    },
                },
            ]

        },
        style: {

        }
    },

    // section: 

    {
        type: 'web-container',
        name: 'section',
        id: 'v-section001',
        previewImg: 'https://i.ibb.co/DG6934j/screencapture-localhost-8080-editor-2020-11-30-20-39-28-1-10.jpg',
        'class': 'section-v',
        info: {
            dir: 'row',
            cmps: [{
                    type: 'web-div',
                    name: 'card-tem-02',
                    'class': 'card-text',
                    id: 'imw0Kp3XiJ',
                    info: {
                        dir: 'row',
                        cmps: [{
                                id: 'GhL0H8PCNl',
                                type: 'web-txt',
                                info: {
                                    content: 'A week full of values.'
                                },
                                style: {
                                    fontFamily: 'champagneLimousines',
                                    fontSize: '2rem',
                                    textShadow: 'unset',
                                    letterSpacing: '0.125rem'
                                },
                                _rootId: '__vue_devtool_undefined__'
                            },
                            {
                                id: '6e61EtLnYn',
                                type: 'web-txt',
                                info: {
                                    content: 'Let’s re-pot Black Friday into VITAweek. From 26 November until 01 December we’re all about sharing, inspiring, learning and connecting. Get access to the full experience with your VITA Account.'
                                },
                                style: {
                                    display: 'inline-block',
                                    fontFamily: 'champagneLimousines',
                                    fontSize: '1.4rem',
                                    textShadow: 'unset',
                                    letterSpacing: '0.1875rem'
                                },
                                _rootId: '__vue_devtool_undefined__'
                            }
                        ]
                    }
                },
                {
                    type: 'web-div',
                    name: 'card-tem-03',
                    'class': 'card-image',
                    id: '1XN4EUNHHW',
                    info: {
                        dir: 'row',
                        cmps: [{
                            id: 'XvuDz4Ve4m',
                            type: 'web-img',
                            info: {
                                src: 'https://res.cloudinary.com/dksmeovlj/image/upload/v1606636853/3911917-pdf_1_gfkso7.png'
                            },
                            style: {
                                borderRadius: '0%'
                            },
                            _rootId: '__vue_devtool_undefined__'
                        }]
                    }
                }
            ]
        },
        style: {
            display: 'flex',
            backgroundColor: '#fff',
            minHeight: '50rem'
        }
    },
    {
        type: 'web-container',
        name: 'section',
        previewImg: 'https://i.ibb.co/gghqLNZ/screencapture-localhost-8080-editor-2020-11-30-20-39-28-1-11.jpg',
        id: 'v-section002',
        'class': 'section-v',
        info: {
            dir: 'row',
            cmps: [{
                    type: 'web-div',
                    name: 'card-tem-02',
                    'class': 'card-text',
                    id: 'iObXzmkmRw',
                    info: {
                        dir: 'row',
                        cmps: [{
                                id: 'uInNnoRrKI',
                                type: 'web-txt',
                                info: {
                                    content: '48H DELIVERY'
                                },
                                style: {
                                    display: 'inline-block',
                                    fontFamily: 'champagneLimousines',
                                    fontSize: '2rem',
                                    textShadow: 'unset',
                                    letterSpacing: '0.00048828125rem'
                                },
                                _rootId: '__vue_devtool_undefined__'
                            },
                            {
                                id: 'wBrcv3NedF',
                                type: 'web-txt',
                                info: {
                                    content: 'All members of the VITA\'s community will have their orders shipped on the day after their order is received, except Saturday and Sunday. If you are based in Italy or Austria these orders should arrive within one working day'
                                },
                                style: {
                                    display: 'inline-block',
                                    fontFamily: 'champagneLimousines',
                                    fontSize: '1.4rem',
                                    textShadow: 'unset',
                                    letterSpacing: '0.0625rem'
                                },
                                _rootId: '__vue_devtool_undefined__'
                            }
                        ]
                    }
                },
                {
                    type: 'web-div',
                    name: 'card-tem-03',
                    'class': 'card-image',
                    id: 'zqKofZZ1oJ',
                    info: {
                        dir: 'row',
                        cmps: [{
                            id: 'dsfb6f39Ds',
                            type: 'web-img',
                            info: {
                                src: 'https://res.cloudinary.com/dksmeovlj/image/upload/v1606637743/ON3VUV1_1_ehpfa3.png'
                            },
                            style: {
                                width: '100%'
                            },
                            _rootId: '__vue_devtool_undefined__'
                        }]
                    }
                }
            ]
        },
        style: {
            display: 'flex',
            backgroundColor: '#fff',
            minHeight: '50rem'
        }
    },
    {
        type: 'web-container',
        name: 'section',
        previewImg: 'https://i.ibb.co/t8vLB2d/screencapture-localhost-8080-editor-2020-11-30-20-39-28-1-12.jpg',
        id: 'v-section003',
        'class': 'section-v01',
        info: {
            dir: 'row',
            cmps: [{
                    type: 'web-div',
                    name: 'card-tem-02',
                    'class': 'card-text',
                    id: 'sXRmExCoUx',
                    info: {
                        dir: 'row',
                        cmps: [{
                            id: 'wWh0RWRfnL',
                            type: 'web-txt',
                            info: {
                                content: 'OUR PARTNERS'
                            },
                            style: {
                                display: 'inline-block',
                                fontFamily: 'champagneLimousines',
                                fontSize: '1.4rem',
                                fontWeight: 'bold',
                                textShadow: 'unset',
                                letterSpacing: '0.0625rem'
                            },
                            _rootId: '__vue_devtool_undefined__'
                        }]
                    }
                },
                {
                    type: 'web-div',
                    name: 'card-tem-03',
                    'class': 'card-image',
                    id: '154bC1Xia9',
                    info: {
                        dir: 'row',
                        cmps: [{
                                id: 'SisdQ5pzE8',
                                type: 'web-img',
                                info: {
                                    src: 'https://res.cloudinary.com/dksmeovlj/image/upload/v1606642458/gutwork-svg_j6sysy.svg'
                                },
                                style: {},
                                _rootId: '__vue_devtool_undefined__'
                            },
                            {
                                id: '2RlHwKrn0Z',
                                type: 'web-img',
                                info: {
                                    src: 'https://res.cloudinary.com/dksmeovlj/image/upload/v1606642449/covenant-svg_rwnlh5.svg'
                                },
                                style: {},
                                _rootId: '__vue_devtool_undefined__'
                            },
                            {
                                id: 'BBQUsImHsL',
                                type: 'web-img',
                                info: {
                                    src: 'https://res.cloudinary.com/dksmeovlj/image/upload/v1606642314/infinite-svg_cmi0to.svg'
                                },
                                style: {},
                                _rootId: '__vue_devtool_undefined__'
                            },
                            {
                                id: 'hHfgUdFH9k',
                                type: 'web-img',
                                info: {
                                    src: 'https://res.cloudinary.com/dksmeovlj/image/upload/v1606642479/grubspot-svg_ckulrr.svg'
                                },
                                style: {},
                                _rootId: '__vue_devtool_undefined__'
                            }
                        ]
                    }
                }
            ]
        },
        style: {
            display: 'flex',
            backgroundColor: '#fff',
            minHeight: '12.5rem'
        }
    },
    {
        type: "web-container",
        name: "section",
        id: "section002",
        previewImg: 'https://res.cloudinary.com/dksmeovlj/image/upload/v1606848437/screencapture-localhost-8080-editor-2020-11-30-20_39_28_1_2_bp6sok.jpg',
        class: "second-section-cdb",
        info: {
            dir: "row",
            cmps: [{
                    type: "web-div",
                    name: "card-tem-03",
                    class: "card-image",
                    id: utilService.makeId(10),
                    info: {
                        dir: "row",
                        cmps: [{
                            id: utilService.makeId(10),
                            type: "web-img",
                            info: {
                                src: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&auto=format&fit=crop&w=1253&q=80"
                            },
                            style: {}
                        }]
                    },
                },
                {
                    type: "web-div",
                    name: "card-tem-02",
                    class: "card-text",
                    id: utilService.makeId(10),
                    info: {
                        dir: "row",
                        cmps: [{
                                id: utilService.makeId(10),
                                type: "web-txt",
                                info: {
                                    content: "CHÂTEAU DU BRUNCH",
                                },
                                style: {
                                    display: "inline-block",
                                    fontSize: "2rem",
                                    color: "#e3baba",
                                    letterSpacing: "0.09rem"
                                },
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-txt",
                                info: {
                                    content: "SINCE 1992",
                                },
                                style: {
                                    display: "inline-block",
                                    fontSize: "1.4rem",
                                    color: "#fff",
                                    letterSpacing: "0.09rem"
                                },
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-txt",
                                info: {
                                    content: "We do not serve dinner. We do not serve lunch. Chateau du brunch is all around the most important meal of the day, at any time of the day. Our offer for you is simple: With us, every day is Sunday. So if you are the kind of person who knows how he wants to live his life to the best: Come free, leave freeier, enjoy life, eat brunch.",
                                },
                                style: {
                                    fontSize: "1.1rem",
                                    color: "#fff",
                                    letterSpacing: "0.02rem",
                                },
                            },
                        ]
                    },
                }
            ]
        },
        style: {
            display: "flex",
            color: "#fff",
            backgroundColor: "#161d2e",
        },
    },
    {
        type: "web-container",
        name: "section",
        id: "section003",
        previewImg: 'https://res.cloudinary.com/dksmeovlj/image/upload/v1606848452/screencapture-localhost-8080-editor-2020-11-30-20_39_28_1_3_vl5b02.jpg',
        class: "third-section-cdb",
        info: {
            dir: "row",
            cmps: [{
                    type: "web-div",
                    name: "card-tem-02",
                    class: "card-text",
                    id: utilService.makeId(10),
                    info: {
                        dir: "row",
                        cmps: [{
                                id: utilService.makeId(10),
                                type: "web-txt",
                                info: {
                                    content: "MAIN CONCEPT",
                                },
                                style: {
                                    display: "inline-block",
                                    fontSize: "2rem",
                                    color: "#fff",
                                },
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-txt",
                                info: {
                                    content: "THIS IS HOW IT GOES",
                                },
                                style: {
                                    fontSize: "1.5rem",
                                    letterSpacing: "0.1875rem",
                                    color: "#e3baba",
                                },
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-txt",
                                info: {
                                    content: "You sit behind the bar, watch us making food porn just for you tummy. your food will be served by our muffin-dressed waitresses, yep, no joke. Cause Château du brunch stands with happiness, And happiness is muffins. and us.",
                                },
                                style: {
                                    fontSize: "1.1rem",
                                    letterSpacing: "0.0625rem",
                                    color: "#fff",
                                },
                            }
                        ]
                    },
                },
                {
                    type: "web-div",
                    name: "card-tem-02",
                    class: "card-image",
                    id: utilService.makeId(10),
                    info: {
                        dir: "row",
                        cmps: [{
                            id: utilService.makeId(10),
                            type: "web-img",
                            info: {
                                src: "https://images.unsplash.com/photo-1516213335993-159eca2981af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
                            },
                            style: {}
                        }]
                    },
                }
            ]
        },
        style: {
            display: "flex",
            color: "#fff",
            backgroundColor: "#161d2e",
        },
    },
    {
        type: "web-container",
        name: "section",
        id: "section004",
        previewImg: 'https://res.cloudinary.com/dksmeovlj/image/upload/v1606848466/screencapture-localhost-8080-editor-2020-11-30-20_39_28_1_4_p6vfvo.jpg',
        class: "fourth-section-cdb",
        info: {
            dir: "row",
            cmps: [{
                    type: "web-div",
                    name: "card-tem-03",
                    class: "card-image",
                    id: utilService.makeId(10),
                    info: {
                        dir: "row",
                        cmps: [{
                            id: utilService.makeId(10),
                            type: "web-img",
                            info: {
                                src: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1287&q=80"
                            },
                            style: {}
                        }]
                    },
                },
                {
                    type: "web-div",
                    name: "card-tem-02",
                    class: "card-text",
                    id: utilService.makeId(10),
                    info: {
                        dir: "row",
                        cmps: [{
                                id: utilService.makeId(10),
                                type: "web-txt",
                                info: {
                                    content: "WE ARE OPEN",
                                },
                                style: {
                                    display: "inline-block",
                                    fontSize: "2rem",
                                    color: "#e3baba",
                                },
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-txt",
                                info: {
                                    content: "always. 24/7",
                                },
                                style: {
                                    display: "inline-block",
                                    fontSize: "1.4rem",
                                    color: "#fff",
                                },
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-txt",
                                info: {
                                    content: "HAHASHMAL 6, TLV",
                                },
                                style: {
                                    fontSize: "1.1rem",
                                    color: "#fff",
                                },
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-txt",
                                info: {
                                    content: "Please, do not forget to rate us on Tripadvisor and our Facebook page. See you soon!",
                                },
                                style: {
                                    fontSize: "1.1rem",
                                    color: "#fff",
                                    letterSpacing: "0.05rem"
                                },
                            },
                        ]
                    },
                }
            ]
        },
        style: {
            display: "flex",
            color: "#fff",
            backgroundColor: "#161d2e",
            letterSpacing: "0.05rem"
        },
    },
    {
        type: "web-container",
        name: "section",
        id: "md-section001",
        previewImg: 'https://i.ibb.co/YkZPv0t/md-section001.jpg',
        class: "section-md",
        info: {
            dir: "row",
            cmps: [{
                    type: "web-div",
                    name: "card-tem-02",
                    class: "card-text-md",
                    id: utilService.makeId(10),
                    info: {
                        dir: "row",
                        cmps: [{
                            id: utilService.makeId(10),
                            type: "web-txt",
                            class: "txt-md",
                            info: {
                                content: "Loved by businesses, and individuals across the globe.",
                            },
                            style: {
                                display: "inline-block",
                                fontSize: "2.3rem",
                                color: "#051441",
                                textAlign: "left",
                                letterSpacing: "0.08rem"
                            },
                        }, ]
                    }
                },
                {
                    type: "web-div",
                    name: "card-tem-03",
                    class: "card-image-md",
                    id: utilService.makeId(10),
                    info: {
                        dir: "row",
                        cmps: [{
                            id: utilService.makeId(10),
                            type: "web-txt",
                            info: {
                                content: "Medellin gave us the best platform to grow and show our creation and skills! thank you guys, you are the best in the field."
                            },
                            style: {
                                fontSize: "1.5rem",
                                textAlign: "center",
                                color: "#fff"
                            }
                        }],
                    },
                    style: {
                        backgroundImage: "url(\"https://res.cloudinary.com/dksmeovlj/image/upload/v1607001661/testimonial_bg_two_bwonsx.png\")",
                    }
                },
            ]
        },
        style: {
            display: "flex",
            backgroundColor: "#fff",
            minHeight: "50rem",
        },
    },
    {
        type: "web-container",
        name: "section",
        id: "sec001-cards trio",
        class: "web-sec-cards-1",
        previewImg: 'https://i.ibb.co/58Sx1JK/sections001-crds-trio.jpg',
        info: {
            dir: "row",
            cmps: [{
                    type: "web-div",
                    name: "card",
                    id: utilService.makeId(10),
                    class: "web-card-1",
                    info: {
                        dir: "column",
                        cmps: [{
                                id: utilService.makeId(10),
                                type: "web-img",
                                info: {
                                    src: "https://images.unsplash.com/photo-1528297506728-9533d2ac3fa4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
                                },
                                style: {
                                    margin: "0 0 1rem 0",
                                },
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-txt",
                                info: {
                                    content: "Relaxing Zen design everywhere"
                                },
                                style: {
                                    fontSize: "1.3125rem",
                                    fontWeight: "bold",
                                },
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-button",
                                info: {
                                    content: "Read More"
                                },
                                style: {

                                    textTransform: "uppercase",
                                    backgroundColor: "#fff",
                                    border: "1px solid gainsboro",
                                    borderRadius: "20px",

                                },
                            }
                        ]
                    },
                    style: {
                        padding: "15px",
                        width: "100%",
                    },

                },
                {
                    type: "web-div",
                    name: "card",
                    id: utilService.makeId(10),
                    class: "web-card-1",
                    info: {
                        dir: "column",
                        cmps: [{
                                id: utilService.makeId(10),
                                type: "web-img",
                                info: {
                                    src: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80"
                                },
                                style: {
                                    margin: "0 0 1rem 0",
                                },
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-txt",
                                info: {
                                    content: "Collaborative work complexes"
                                },
                                style: {
                                    fontSize: "1.3125rem",
                                    fontWeight: "bold",
                                },
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-button",
                                info: {
                                    content: "Read More"
                                },
                                style: {

                                    textTransform: "uppercase",
                                    backgroundColor: "#fff",
                                    border: "1px solid gainsboro",
                                    borderRadius: "20px",

                                },
                            }
                        ]
                    },
                    style: {
                        padding: "15px",

                        width: "100%",

                    },

                },
                {
                    type: "web-div",
                    name: "card",
                    id: utilService.makeId(10),
                    class: "web-card-1",
                    info: {
                        dir: "column",
                        cmps: [{
                                id: utilService.makeId(10),
                                type: "web-img",
                                info: {
                                    src: "https://images.unsplash.com/photo-1427751840561-9852520f8ce8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1355&q=80"
                                },
                                style: {

                                    margin: "0 0 1rem 0",

                                },
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-txt",
                                info: {
                                    content: "Track your progress from anywhere"
                                },
                                style: {
                                    fontSize: "1.3125rem",
                                    fontWeight: "bold",
                                },
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-button",
                                info: {
                                    content: "Read More"
                                },
                                style: {

                                    textTransform: "uppercase",
                                    backgroundColor: "#fff",
                                    border: "1px solid gainsboro",
                                    borderRadius: "20px",

                                },
                            }
                        ]
                    },
                    style: {

                        padding: "15px",
                        width: "100%",

                    },

                }
            ]
        },
        style: {

            padding: "15px",
            width: "100%",

        }
    },

    // map:

    {
        type: "web-container",
        name: "map",
        id: "section007",
        class: "map-v",
        previewImg: 'https://i.ibb.co/brfmZ4C/screencapture-localhost-8080-editor-2020-11-30-20-39-28-1-9.jpg',
        info: {
            dir: "row",
            cmps: [{
                    type: "web-div",
                    name: "card-tem-03",
                    class: "card-image",
                    id: utilService.makeId(10),
                    info: {
                        dir: "row",
                        cmps: [{
                            id: utilService.makeId(10),
                            type: "web-img",
                            info: {
                                src: "https://res.cloudinary.com/dksmeovlj/image/upload/v1606599449/taxi-sign-in_wzahtz.png"
                            },
                            style: {
                                width: "70%"
                            }
                        }]
                    },
                },
                {
                    type: "web-div",
                    name: "card-tem-02",
                    class: "map-text-v",
                    id: utilService.makeId(10),
                    info: {
                        dir: "row",
                        cmps: [{
                                id: utilService.makeId(10),
                                type: "web-txt",
                                info: {
                                    content: "COME MEET US IN PERSON",
                                },
                                style: {
                                    fontFamily: "champagneLimousines",
                                    fontSize: "2rem",
                                    backgroundColor: "#fff",
                                },
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-txt",
                                info: {
                                    content: "(we don't bite)",
                                },
                                style: {
                                    fontFamily: "champagneLimousines",
                                    fontSize: "1rem",
                                    backgroundColor: "#fff",
                                },
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-map",
                                info: {
                                    title: "",
                                    lat: 52.377956,
                                    lng: 4.897070,
                                    zoom: 14,
                                    address: "Amsterdam"
                                },
                                style: {
                                    height: "100%",
                                    display: "block",
                                    margin: "0 auto"
                                },
                                class: 'map-regular-content'
                            }
                        ]
                    },
                    style: {
                        padding: "1rem",
                        backgroundColor: "#fff",
                    },
                }
            ]
        },
        style: {
            display: "flex",
            backgroundColor: "#fff",
        },
    },
    {
        type: "web-container",
        name: "map",
        id: "section009",
        class: "map-v-cupcake",
        previewImg: 'http://res.cloudinary.com/dksmeovlj/image/upload/v1607352387/%D7%A6%D7%99%D7%9C%D7%95%D7%9D_%D7%9E%D7%A1%D7%9A_2020-12-07_%D7%91-15_tpr9pn.jpg',
        info: {
            dir: "row",
            cmps: [{
                    type: "web-div",
                    name: "card-tem-03",
                    class: "card-image",
                    id: utilService.makeId(10),
                    info: {
                        dir: "row",
                        cmps: [{
                            id: utilService.makeId(10),
                            type: "web-img",
                            info: {
                                src: "http://res.cloudinary.com/dksmeovlj/image/upload/v1607331951/2295721_copy_hcikod.png"
                            },
                            style: {
                                width: "60%"
                            }
                        }]
                    },
                },
                {
                    type: "web-div",
                    name: "card-tem-demo",
                    class: "map-text-v cupcake-map",
                    id: utilService.makeId(10),
                    info: {
                        dir: "row",
                        cmps: [{
                                id: utilService.makeId(10),
                                type: "web-txt",
                                info: {
                                    content: "COME MEET US IN PERSON",
                                },
                                style: {
                                    fontFamily: "champagneLimousines",
                                    fontSize: "2rem",
                                    backgroundColor: "rgb(127, 219, 218, 0)",
                                },
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-txt",
                                info: {
                                    content: "(we don't bite)",
                                },
                                style: {
                                    fontFamily: "champagneLimousines",
                                    fontSize: "1rem",
                                    backgroundColor: "rgb(127, 219, 218, 0)",
                                },
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-map",
                                info: {
                                    title: "",
                                    lat: 52.377956,
                                    lng: 4.897070,
                                    zoom: 14,
                                    address: "Amsterdam"
                                },
                                style: {
                                    height: "100%",
                                    margin: "0 auto",
                                    display: "flex",
                                    justifyContent: "center"
                                },
                                class: 'map-v-content'
                            }
                        ]
                    },
                    style: {
                        padding: "1rem",
                        backgroundColor: "#fff",
                    },
                }
            ]
        },
        style: {
            display: "flex",
            backgroundColor: "rgb(127, 219, 218)",
        },
    },
    {
        id: "map001",
        type: "web-container",
        name: "map",
        class: "web-map-1",
        previewImg: 'https://i.ibb.co/PDx5LRw/map002.jpg',
        info: {
            dir: "row",
            cmps: [{
                id: utilService.makeId(10),
                type: "web-map",
                info: {
                    title: "",
                    lat: 40.706005,
                    lng: -74.008827,
                    zoom: 10,
                    address: "Rome"
                },
                style: {
                    height: "100%",
                    display: "block",
                    margin: "0 auto"
                },
                class: 'map-regular-content'
            }]
        },
        style: {
            padding: "15px",

            width: "100%",

        },
    },

    // card: 


    {
        type: 'web-container',
        name: 'card',
        id: 'saas-card-6',
        'class': 'card-6-container',
        previewImg: 'https://i.ibb.co/yQXGnhC/screencapture-localhost-8080-editor-2020-11-30-20-39-28-1-17.jpg',
        info: {
            dir: 'row',
            cmps: [{
                    type: 'web-div',
                    name: 'card',
                    id: '2qEvRUPgcV',
                    'class': 'card-6-div',
                    info: {
                        dir: 'row',
                        cmps: [{
                                id: 'UM68JAueCK',
                                type: 'web-img',
                                info: {
                                    src: 'https://i.ibb.co/tZ2mkpB/smartphone.png'
                                },
                                style: {},
                                _rootId: '__vue_devtool_undefined__'
                            },
                            {
                                id: 'uRrD3JFbyN',
                                type: 'web-txt',
                                'class': 'card-6-title',
                                info: {
                                    content: 'Cross-device'
                                },
                                style: {
                                    textAlign: 'center',
                                    fontSize: '1.4375rem'
                                },
                                _rootId: '__vue_devtool_undefined__'
                            },
                            {
                                id: 'KdRipjWYnh',
                                type: 'web-txt',
                                'class': 'card-6-pa',
                                info: {
                                    content: 'Use the app from your pc, laptop, mobile or your tablet!'
                                },
                                style: {
                                    textAlign: 'center',
                                    color: 'center',
                                    fontSize: '1rem'
                                },
                                _rootId: '__vue_devtool_undefined__'
                            }
                        ]
                    },
                    style: {}
                },
                {
                    type: 'web-container',
                    name: 'card',
                    id: 'saas-card-6',
                    'class': 'card-6-container',
                    info: {
                        dir: 'row',
                        cmps: [{
                                type: 'web-div',
                                name: 'card',
                                id: '2qEvRUPgcV',
                                'class': 'card-6-div',
                                info: {
                                    dir: 'row',
                                    cmps: [{
                                            id: 'UM68JAueCK',
                                            type: 'web-img',
                                            info: {
                                                src: 'https://i.ibb.co/tZ2mkpB/smartphone.png'
                                            },
                                            style: {},
                                            _rootId: '__vue_devtool_undefined__'
                                        },
                                        {
                                            id: 'uRrD3JFbyN',
                                            type: 'web-txt',
                                            'class': 'card-6-title',
                                            info: {
                                                content: 'Cross-device'
                                            },
                                            style: {
                                                textAlign: 'center',
                                                fontSize: '1.4375rem',
                                                textShadow: 'unset'
                                            },
                                            _rootId: '__vue_devtool_undefined__'
                                        },
                                        {
                                            id: 'KdRipjWYnh',
                                            type: 'web-txt',
                                            'class': 'card-6-pa',
                                            info: {
                                                content: 'Use the app from your pc, laptop, mobile or your tablet!'
                                            },
                                            style: {
                                                textAlign: 'center',
                                                color: 'center',
                                                fontSize: '1rem',
                                                textShadow: 'unset'
                                            },
                                            _rootId: '__vue_devtool_undefined__'
                                        }
                                    ]
                                },
                                style: {}
                            },
                            {
                                type: 'web-div',
                                name: 'card',
                                id: 'ZmslKCSU48',
                                'class': 'card-6-div',
                                info: {
                                    dir: 'row',
                                    cmps: [{
                                            id: 'idKfTSn35g',
                                            type: 'web-img',
                                            info: {
                                                src: 'https://i.ibb.co/c6qk84W/battery.png'
                                            },
                                            style: {},
                                            _rootId: '__vue_devtool_undefined__'
                                        },
                                        {
                                            id: 'CPG0VsRiOk',
                                            type: 'web-txt',
                                            'class': 'card-6-title',
                                            info: {
                                                content: 'Battery-lite app'
                                            },
                                            style: {
                                                textAlign: 'center',
                                                fontSize: '1.4375rem',
                                                textShadow: 'unset'
                                            },
                                            _rootId: '__vue_devtool_undefined__'
                                        },
                                        {
                                            id: 'XW3hbHiK7N',
                                            type: 'web-txt',
                                            'class': 'card-6-pa',
                                            info: {
                                                content: 'You\'ll also find a lot of svg illustrations representing various.'
                                            },
                                            style: {
                                                textAlign: 'center',
                                                color: 'center',
                                                fontSize: '1rem',
                                                textShadow: 'unset'
                                            },
                                            _rootId: '__vue_devtool_undefined__'
                                        }
                                    ]
                                },
                                style: {}
                            },
                            {
                                type: 'web-div',
                                name: 'card',
                                id: 'FmwbdMAjvP',
                                'class': 'card-6-div',
                                info: {
                                    dir: 'row',
                                    cmps: [{
                                            id: 'sJ8FeWXTxs',
                                            type: 'web-img',
                                            info: {
                                                src: 'https://i.ibb.co/VQBWbkL/wifi.png'
                                            },
                                            style: {},
                                            _rootId: '__vue_devtool_undefined__'
                                        },
                                        {
                                            id: 'IYyakM9OSx',
                                            type: 'web-txt',
                                            'class': 'card-6-title',
                                            info: {
                                                content: 'Offline-ready'
                                            },
                                            style: {
                                                textAlign: 'center',
                                                fontSize: '1.4375rem',
                                                textShadow: 'unset'
                                            },
                                            _rootId: '__vue_devtool_undefined__'
                                        },
                                        {
                                            id: '8yrUvfUW0Q',
                                            type: 'web-txt',
                                            'class': 'card-6-pa',
                                            info: {
                                                content: 'Low internet connection?, fear not!. We made the app, connectivity fearless.'
                                            },
                                            style: {
                                                textAlign: 'center',
                                                color: 'center',
                                                fontSize: '1rem',
                                                textShadow: 'unset',
                                                letterSpacing: '0rem'
                                            },
                                            _rootId: '__vue_devtool_undefined__'
                                        }
                                    ]
                                },
                                style: {}
                            }
                        ]
                    },
                    style: {
                        paddingRight: '4.1875rem',
                        paddingLeft: '4.1875rem'
                    }
                },
                {
                    type: 'web-div',
                    name: 'card',
                    id: 'FmwbdMAjvP',
                    'class': 'card-6-div',
                    info: {
                        dir: 'row',
                        cmps: [{
                                id: 'sJ8FeWXTxs',
                                type: 'web-img',
                                info: {
                                    src: 'https://i.ibb.co/VQBWbkL/wifi.png'
                                },
                                style: {},
                                _rootId: '__vue_devtool_undefined__'
                            },
                            {
                                id: 'IYyakM9OSx',
                                type: 'web-txt',
                                'class': 'card-6-title',
                                info: {
                                    content: 'Offline-ready'
                                },
                                style: {
                                    textAlign: 'center',
                                    fontSize: '1.4375rem'
                                },
                                _rootId: '__vue_devtool_undefined__'
                            },
                            {
                                id: '8yrUvfUW0Q',
                                type: 'web-txt',
                                'class': 'card-6-pa',
                                info: {
                                    content: 'Low internet connection?, fear not!. We made the app, connectivity fearless.'
                                },
                                style: {
                                    textAlign: 'center',
                                    color: 'center',
                                    fontSize: '1rem'
                                },
                                _rootId: '__vue_devtool_undefined__'
                            }
                        ]
                    },
                    style: {}
                }
            ]
        },
        style: {}
    },
    {
        type: 'web-container',
        name: 'card',
        id: 'saas-card-3',
        'class': 'card-5-container',
        previewImg: 'https://i.ibb.co/Sx7H2kh/screencapture-localhost-8080-editor-2020-11-30-20-39-28-1-16.jpg',
        info: {
            dir: 'row',
            cmps: [{
                    type: 'web-div',
                    name: 'card',
                    id: 'BWNQDaBtVa',
                    'class': 'card-5-div',
                    info: {
                        dir: 'row',
                        cmps: [{
                                id: 'IgKY7GVDQ1',
                                type: 'web-img',
                                info: {
                                    src: 'https://i.ibb.co/vvJRSLQ/littele-cupcake.png'
                                },
                                style: {},
                                _rootId: '__vue_devtool_undefined__'
                            },
                            {
                                id: 'OFiYwvah3F',
                                type: 'web-txt',
                                'class': 'card-5-title',
                                info: {
                                    content: 'Nehoray Ilani, Owner/Chief Pastry Chef'
                                },
                                style: {
                                    textAlign: 'start',
                                    fontSize: '3.625rem'
                                },
                                _rootId: '__vue_devtool_undefined__'
                            },
                            {
                                id: 'fM2gOuVv85',
                                type: 'web-txt',
                                'class': 'card-5-pa',
                                info: {
                                    content: 'Baking is my passion! I have been baking my whole life and I just love it. Decorating and making beautiful treats is so rewarding, and seeing the look on people\'s faces when they taste their treats is the best. Baking, to me, always feels like home. Being in the kitchen making delicious treats for the ones you love and the moments and memories made are for a lifetime.'
                                },
                                style: {
                                    textAlign: 'start',
                                    fontSize: '1.4375rem'
                                },
                                _rootId: '__vue_devtool_undefined__'
                            }
                        ]
                    },
                    style: {}
                },
                {
                    id: 'fsKQR1auMf',
                    type: 'web-img',
                    info: {
                        src: 'https://i.ibb.co/vLYKYjm/20200723-173302-1.jpg'
                    },
                    style: {},
                    _rootId: 'saas-card-3'
                }
            ]
        },
        style: {}
    },
    {
        type: "web-container",
        name: "card",
        id: "card001-column",
        class: "card-1-col",
        previewImg: 'https://i.ibb.co/KW9dpYr/card001-col.jpg',
        info: {
            dir: "column",
            cmps: [{
                type: "web-div",
                name: "card",
                class: "web-card-1-col",
                id: utilService.makeId(10),
                info: {
                    dir: "row",
                    cmps: [{
                            id: utilService.makeId(10),
                            type: "web-img",
                            info: {
                                src: "https://images.unsplash.com/photo-1584670618308-e88b87710b38?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80"
                            },
                            style: {
                                objectFit: "cover",
                            },
                        },
                        {
                            id: utilService.makeId(10),
                            type: "web-txt",
                            info: {
                                content: "Allow yourself to create without worries"
                            },
                            style: {
                                fontSize: "3.125rem",
                            },
                        },
                        {
                            id: utilService.makeId(10),
                            type: "web-txt",
                            info: {
                                content: "The smallest unit that has \"organizational\" meaning in the book is the paragraph."
                            },
                            style: {
                                fontSize: "1rem",
                            },
                        },

                    ]
                },
                style: {
                    padding: "15px",
                    width: "100%",
                    textAlign: "center",

                },

            }]
        },
        style: {
            padding: "15px",
        }
    },
    {
        type: "web-container",
        name: "card",
        id: "card002-row",
        class: "web-card-1-row",
        previewImg: 'https://i.ibb.co/z8j61kB/card002-row.jpg',
        info: {
            dir: "row",
            cmps: [{
                    id: utilService.makeId(10),
                    type: "web-img",
                    info: {
                        src: "https://images.unsplash.com/photo-1524335397764-f98987c51095?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1300&q=80"
                    },
                    style: {},
                },
                {
                    type: "web-div",
                    name: "card",
                    id: utilService.makeId(10),
                    class: "web-card-1-div",
                    info: {
                        dir: "row",
                        cmps: [{
                                id: utilService.makeId(10),
                                type: "web-txt",
                                class: "web-card-1-title",
                                info: {
                                    content: "There is no limit to the imagination"
                                },
                                style: {
                                    fontSize: "3em",
                                    textAlign: "left"
                                },
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-txt",
                                class: "web-card-1-pa",
                                info: {
                                    content: "You can finally customize everything on your website, easily and directly. Elementor is the editor for designers who want to fine-tune every last detail."
                                },
                                style: {
                                    textAlign: "left"

                                },
                            },
                        ]
                    },
                    style: {},

                }
            ]
        },
        style: {}
    },

    // img: 

    {
        type: "web-container",
        name: "image",
        id: "img003-gallery",
        class: "web-img-gallery-3",
        previewImg: 'http://res.cloudinary.com/dksmeovlj/image/upload/v1607362999/Untitled-1_copy_xvh9dh.png',
        info: {
            dir: "row",
            cmps: [{
                    type: "web-div",
                    name: "img-gallery-3-div",
                    class: "img-gallery-3-div",
                    id: utilService.makeId(10),
                    info: {
                        dir: "column",
                        cmps: [{
                                id: utilService.makeId(10),
                                type: "web-img",
                                info: {
                                    src: "https://images.unsplash.com/photo-1603924147107-81e7a2b3051e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1955&q=80"
                                },
                                style: {

                                    width: "100%",
                                }
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-img",
                                info: {
                                    src: "https://images.unsplash.com/photo-1606942790567-5783bab8d944?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                                },
                                style: {

                                    width: "100%",
                                }
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-img",
                                info: {
                                    src: "https://images.unsplash.com/photo-1604676983704-2f2c09b12f93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                                },
                                style: {

                                    width: "100%",
                                },
                            }
                        ]
                    },
                },
                {
                    type: "web-div",
                    name: "img-gallery-3-div",
                    class: "img-gallery-3-div",
                    id: utilService.makeId(10),
                    info: {
                        dir: "column",
                        cmps: [{
                                id: utilService.makeId(10),
                                type: "web-img",
                                info: {
                                    src: "https://images.unsplash.com/photo-1601758176559-76c75ead317a?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                                },
                                style: {

                                    width: "100%",
                                }
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-img",
                                info: {
                                    src: "https://images.unsplash.com/photo-1603558766284-2271e4005ec3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
                                },
                                style: {

                                    width: "100%",
                                }
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-img",
                                info: {
                                    src: "https://images.unsplash.com/photo-1603827598524-03bc7f6d66f5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1290&q=80"
                                },
                                style: {

                                    width: "100%",
                                },
                            }
                        ]
                    },
                },
                {
                    type: "web-div",
                    name: "img-gallery-3-div",
                    class: "img-gallery-3-div",
                    id: utilService.makeId(10),
                    info: {
                        dir: "column",
                        cmps: [{
                                id: utilService.makeId(10),
                                type: "web-img",
                                info: {
                                    src: "https://images.unsplash.com/photo-1606049503117-f219981aafac?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1271&q=80"
                                },
                                style: {

                                    width: "100%",
                                }
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-img",
                                info: {
                                    src: "https://images.unsplash.com/photo-1574708006722-49b864e787b0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80"
                                },
                                style: {

                                    width: "100%",
                                }
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-img",
                                info: {
                                    src: "https://images.unsplash.com/photo-1606942095201-bd139f63b2e3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=646&q=80"
                                },
                                style: {

                                    width: "100%",
                                },
                            }
                        ]
                    },
                },



            ]
        },
        style: {

            padding: "15px",
            width: "100%",

        }
    },
    {
        type: "web-container",
        name: "image",
        id: "img002-gallery",
        class: "web-img-gallery-1",
        previewImg: 'http://res.cloudinary.com/dksmeovlj/image/upload/v1607363044/Untitled-1_copy5_vdjqie.png',
        info: {
            dir: "row",
            cmps: [{
                    id: utilService.makeId(10),
                    type: "web-img",
                    info: {
                        src: "https://images.unsplash.com/photo-1606422135475-eaba95301e6a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    },
                    style: {

                    },
                },
                {
                    id: utilService.makeId(10),
                    type: "web-img",
                    info: {
                        src: "https://images.unsplash.com/photo-1606694582797-0324662ab736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1326&q=80"
                    },
                    style: {

                    },
                }, {
                    id: utilService.makeId(10),
                    type: "web-img",
                    info: {
                        src: "https://images.unsplash.com/photo-1606383042401-a67a07641d50?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1333&q=80"
                    },
                    style: {

                    },
                }
            ]
        },
        style: {
            padding: "15px",
            width: "100%",

        }
    },
    {
        type: "web-container",
        name: "image",
        id: "img001",
        class: "web-img-1",
        previewImg: 'https://i.ibb.co/dtmHF0y/001.jpg',
        info: {
            dir: "column",
            cmps: [{
                id: utilService.makeId(10),
                type: "web-img",
                info: {
                    src: "https://images.unsplash.com/photo-1606201518145-30fa691f4065?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1354&q=80"
                },
                style: {
                    width: "100%",
                },
            }]
        },
        style: {
            width: "100%",
        }
    },
    {
        type: 'web-container',
        name: 'image',
        id: 'saas-img-6',
        'class': 'img-gallery-6-container',
        previewImg: 'https://i.ibb.co/QMB8pvG/screencapture-localhost-8080-editor-2020-11-30-20-39-28-1-18.jpg',
        info: {
            dir: 'row',
            cmps: [{
                type: 'web-div',
                name: 'card',
                id: 'f7cMfHMCjF',
                'class': 'img-gallery-6-div',
                info: {
                    dir: 'row',
                    cmps: [{
                            id: 'vnFCYn4L6x',
                            type: 'web-img',
                            info: {
                                src: 'https://i.ibb.co/hYJWsN0/Music-App-7.jpg'
                            },
                            style: {
                                width: '75%'
                            },
                            _rootId: '__vue_devtool_undefined__'
                        },
                        {
                            id: 'qSqCJ1ZcLl',
                            type: 'web-img',
                            info: {
                                src: 'https://i.ibb.co/VpppD2k/Music-App-6.jpg'
                            },
                            style: {
                                width: '75%'
                            },
                            _rootId: '__vue_devtool_undefined__'
                        },
                        {
                            id: 'Qh9RMt55G5',
                            type: 'web-img',
                            info: {
                                src: 'https://i.ibb.co/WKZWc1p/Music-App-5.jpg'
                            },
                            style: {
                                width: '75%'
                            },
                            _rootId: '__vue_devtool_undefined__'
                        },
                        {
                            id: 'nnXGcGRx2g',
                            type: 'web-img',
                            info: {
                                src: 'https://i.ibb.co/WFjPNMN/Music-App-8.jpg'
                            },
                            style: {
                                width: '75%'
                            },
                            _rootId: '__vue_devtool_undefined__'
                        }
                    ]
                },
                style: {}
            }]
        },
        style: {
            backgroundColor: 'rgba(255, 0, 150, 0.3)'
        }
    },
    {
        type: "web-container",
        name: "image",
        id: "img004-grid gallery",
        class: "web-img-gallery-4",
        previewImg: 'http://res.cloudinary.com/dksmeovlj/image/upload/v1607362943/Untitled-1_copy2_aibizj.png',
        info: {
            dir: "row",
            cmps: [{

                    id: utilService.makeId(10),
                    class: 'grid-gallery-1-img-1',
                    type: "web-img",
                    info: {
                        src: "https://images.unsplash.com/photo-1606077938095-6f0d071b94d5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80"
                    },
                    style: {

                        width: "100%",
                    }
                },
                {

                    id: utilService.makeId(10),
                    class: 'grid-gallery-1-img-2',
                    type: "web-img",
                    info: {
                        src: "https://images.unsplash.com/photo-1580579026987-a06c0f0ea1ea?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=632&q=80"
                    },
                    style: {

                        width: "100%",
                    }
                },
                {

                    id: utilService.makeId(10),
                    class: 'grid-gallery-1-img-3',
                    type: "web-img",
                    info: {
                        src: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                    },
                    style: {

                        width: "100%",
                    }
                },
                {

                    id: utilService.makeId(10),
                    class: 'grid-gallery-1-img-4',
                    type: "web-img",
                    info: {
                        src: "https://images.unsplash.com/photo-1488153074946-0d3b1bcd029c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    },
                    style: {
                        width: "100%",
                    }
                },
                {

                    id: utilService.makeId(10),
                    class: 'grid-gallery-1-img-5',
                    type: "web-img",
                    info: {
                        src: "https://images.unsplash.com/photo-1605141345147-40ca4889e29f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
                    },
                    style: {
                        width: "100%",
                    }
                },
            ]
        }
    },

    // txt: 
    {
        type: "web-container",
        name: "text",
        id: "txt001",
        class: "web-txt-1",
        previewImg: 'https://i.ibb.co/H7v2V2C/txt001.jpg',
        info: {
            dir: "column",
            cmps: [{
                id: utilService.makeId(10),
                type: "web-txt",
                info: {
                    content: "I'm a title, click on me to edit"
                },
                style: {
                    fontFamily: "assistantLight",
                    fontSize: "3.125rem",
                    textAlign: "center",
                    letterSpacing: '0.08rem'
                },
            }]
        },
        style: {
            padding: "15px",
            width: "100%",
        }
    },

    {
        type: "web-container",
        name: "text",
        id: "txt002",
        class: "web-txt-2",
        previewImg: 'https://i.ibb.co/bKj6Lvg/txt002.jpg',
        info: {
            dir: "column",
            cmps: [{
                id: utilService.makeId(10),
                type: "web-txt",
                info: {
                    content: "The smallest unit that has \"organizational\" meaning in the book is the paragraph. The single letter does not survive the translation from language to language, nor does the word. Often, a word in one language will be translated into several words in another language, and vice versa."
                },
                style: {
                    fontSize: "0.875rem",
                    textAlign: "center",
                    margin: "0 auto",
                    letterSpacing: '0.08rem',
                    width: "80ch",
                },
            }]
        },
        style: {
            padding: "15px",
            width: "100%",
        }
    },
    {
        type: "web-container",
        name: "text",
        id: "txt003",
        class: "web-txt-3",
        previewImg: 'https://i.ibb.co/7GcGmdq/txt003.jpg',
        info: {
            dir: "column",
            cmps: [{
                    id: utilService.makeId(10),
                    type: "web-txt",
                    info: {
                        content: "I'm a title, click on me to edit"
                    },
                    style: {
                        fontSize: "1.5625rem",
                        margin: "0 auto",
                        letterSpacing: "0.08rem",
                        width: "fit-content",
                        textAlign: "center",
                    },
                },
                {
                    id: utilService.makeId(10),
                    type: "web-txt",
                    info: {
                        content: "The smallest unit that has \"organizational\" meaning in the book is the paragraph."
                    },
                    style: {
                        fontSize: '0.8rem',
                        letterSpacing: '0.08rem'
                    },
                },

            ]
        },
        style: {
            padding: "15px",
            width: "100%",
        }
    },


    // video:

    {
        type: "web-container",
        name: "video",
        id: "vid001",
        class: "web-video-1",
        previewImg: 'https://i.ibb.co/6JXCsB4/vid001.jpg',
        info: {
            dir: "column",
            cmps: [{
                id: utilService.makeId(10),
                type: "web-video",
                info: {
                    content: "https://www.youtube.com/embed/qKlUpmZwsyw",
                    title: "watch this video!"
                },
                style: {

                }
            }]
        },
        style: {
            padding: "15px",
            width: "100%",
        }
    },
    {
        type: "web-container",
        name: "video",
        id: "vid002",
        class: "web-video-2",
        previewImg: 'https://i.ibb.co/xFGt4dM/vid002.jpg',
        info: {
            dir: "row",
            cmps: [{
                    id: utilService.makeId(10),
                    type: "web-video",
                    info: {
                        content: "https://www.youtube.com/embed/CVa_IZVzUoc",
                        title: "watch this video!"
                    },
                    style: {

                    }
                },

                {
                    type: "web-div",
                    name: "video-002",
                    class: "vid-txt-container",
                    id: utilService.makeId(10),
                    info: {
                        dir: "column",
                        cmps: [{
                                id: utilService.makeId(10),
                                type: "web-txt",

                                info: {
                                    content: "This is a video title"
                                },
                                style: {
                                    fontSize: "3.2rem",
                                    textAlign: "left",
                                },
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-txt",
                                class: "video-2-p",
                                info: {
                                    content: "Video technology was first developed for mechanical television systems, which were quickly replaced by cathode ray tube (CRT) television systems, but several new technologies for video display devices have since been invented. Video was originally exclusively a live technology. Charles Ginsburg led an Ampex research team developing one of the first practical video tape recorder (VTR)"
                                },
                                style: {
                                    fontSize: "1.1em",
                                    textAlign: "left",
                                    width: "70ch",
                                },
                            }
                        ]
                    }
                },
            ]
        },
        style: {
            padding: "15px",
            width: "100%",
        }
    },

    // form : 

    {
        type: "web-container",
        name: "form",
        id: "form002",
        class: "web-form-2",
        previewImg: 'https://i.ibb.co/xDrXj4B/form002.jpg',
        info: {
            dir: "column",
            cmps: [{
                    id: utilService.makeId(10),
                    type: "web-txt",
                    info: {
                        content: "Don't be a stranger"
                    },
                    style: {
                        fontSize: "3.1rem",
                        textAlign: "center",
                        fontFamily: "assistantLight",
                        color: "rgb(150, 150, 150)",
                        lineHeight: "auto",
                        letterSpacing: "0.08rem"
                    },
                },
                {
                    id: utilService.makeId(10),
                    type: "web-form",
                    info: {},
                    style: {

                    },
                },
                {
                    id: utilService.makeId(10),
                    type: "web-button",
                    info: {
                        content: "Submit",
                        linkTo: "#"

                    },
                    style: {
                        color: "rgb(150, 150, 150)",
                        border: "1px solid rgb(150, 150, 150)",
                        borderRadius: "48px",
                        backgroundColor: "#fff",
                        padding: "0.5rem 2rem !important",
                    },
                }
            ]
        },
        style: {
            backgroundImage: "url(\"https://res.cloudinary.com/dksmeovlj/image/upload/v1607000866/testimonial_bg_shap_etvxsx.png\")",
            textAlign: "center",
            padding: "15px",
            width: "100%",
            minHeight: "30rem"

        }
    },
    {
        type: "web-container",
        name: "form",
        id: "form003",
        class: "web-form-2",
        previewImg: 'http://res.cloudinary.com/dksmeovlj/image/upload/v1607286135/%D7%A6%D7%99%D7%9C%D7%95%D7%9D_%D7%9E%D7%A1%D7%9A_2020-12-06_%D7%91-21_x3zftx.png',
        info: {
            dir: "column",
            cmps: [{
                    id: utilService.makeId(10),
                    type: "web-txt",
                    info: {
                        content: "Let's Speak"
                    },
                    style: {
                        fontSize: "3.1rem",
                        textAlign: "center",
                        fontFamily: "assistantLight",
                        color: "#293462",
                        lineHeight: "auto",
                        letterSpacing: "0.08rem"
                    },
                },
                {
                    id: utilService.makeId(10),
                    type: "web-form",
                    info: {},
                    style: {

                    },
                },
                {
                    id: utilService.makeId(10),
                    type: "web-button",
                    info: {
                        content: "Submit",
                        linkTo: "#"

                    },
                    style: {
                        color: "#293462",
                        border: "1px solid #293462",
                        borderRadius: "48px",
                    },
                }
            ]
        },
        style: {
            backgroundImage: "url(\"http://res.cloudinary.com/dksmeovlj/image/upload/v1607285999/pngwing_3_vwhwbo.png\")",
            textAlign: "center",
            padding: "15px",
            width: "100%",
            minHeight: "30rem"

        }
    },
    {
        type: "web-container",
        name: "form",
        id: "form001",
        class: "web-form-1",
        previewImg: 'https://i.ibb.co/X2SYCJY/form001.jpg',
        info: {
            dir: "column",
            cmps: [{
                    id: utilService.makeId(10),
                    type: "web-img",
                    info: {
                        src: "https://lh3.googleusercontent.com/proxy/sxRTNOhVdjk7yx1zdIjS3CEJd1iP50Gu_0L_3rqq7UwstBfgC1oN9Q_naWKGKMycvI7ReGSkjCXOEeS4H5xp4gtGaxvBAIpyPb45EI1PTsSE7jXC0A"
                    },
                    style: {

                    },
                },
                {
                    id: utilService.makeId(10),
                    type: "web-form",
                    info: {
                        content: "This is form title text"
                    },
                    style: {

                    },
                },
                {
                    id: utilService.makeId(10),
                    type: "web-button",
                    info: {
                        content: "Submit",
                        linkTo: "#"

                    },
                    style: {

                        margin: "15px 0 0 0",
                        padding: "3px 8px",
                        color: "gray",
                        border: "1px solid gainsboro",

                    },
                }
            ]
        },
        style: {

            textAlign: "center",
            padding: "15px",
            width: "100%",

        }
    },
]