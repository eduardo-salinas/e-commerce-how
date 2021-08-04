import styled from 'styled-components';

const StyledDiv = styled.div`
    display:block;
    background-color: #420D1F;
    .footer-container{
        height:16em;
        color:white;
        font-size:12px;
        margin-left: 30px;
        display:grid;
        grid-template-columns: repeat(auto-fill, minmax(min(100%,18rem), 1fr));
        h2{
            margin-top: 20px;
        }

        li{
            line-height:25px;
        }

        .footer-nosotros{
            ul{
                padding:0;
                list-style:none;
                a{
                    text-decoration:none;
                    color:white;
                    font-weight:bold;
                    :hover{
                        color:black;
                    }
                }
            }
        }

        .footer-avisos_seteados{
            ul{
                padding:0;
                list-style:none;
                a{
                    text-decoration:none;
                    color:white;
                    font-weight:bold;
                    :hover{
                        color:black;
                    }
                }
            }
        }
        
        .footer-links_interes{
            ul{
                padding:0;
                list-style:none;
                a{
                    text-decoration:none;
                    color:white;
                    font-weight:bold;
                    :hover{
                        color:black;
                    }
                }
            }
        }

        .footer-followers{
            ul{
                padding:0;
                list-style:none;
                display:grid;
                grid-template-columns: repeat(auto-fill, minmax(min(100%,2rem), 1fr));
                a{
                    img{
                        width:25px;
                    }
                    :hover {
                        -webkit-animation: slide-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
                        animation: slide-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
                    }
                }
            }
        }

        .footer-subscribe{
            ul{
                list-style:none;
                a{
                    text-decoration:none;
                    font-weight:bold;
                    color:white;
                    font-size:20px;
                }
            }
        }
    }


    .footer-derechos{
    margin:auto;
    text-align:center;
    font-weight:bold;
    background-color:black;
    color:white;
    }

`

export default StyledDiv;