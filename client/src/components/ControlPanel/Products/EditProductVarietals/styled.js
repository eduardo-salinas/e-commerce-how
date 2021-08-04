import styled from 'styled-components';


const StyledDiv = styled.div`
    border: 1px solid black;
    width:75%;
    margin:auto;
    margin-top:20px;
    border-radius: 10px;
    box-shadow: 0 0 20px 0 rgba(8, 8, 8, 0.3);
    >* {
        padding: 1em;
    }
    display:grid;
    grid-template-columns: repeat(auto-fill, minmax(min(100%,30rem), 1fr));
    color:white;
    font-weight:bold;
    .product-image{
        text-align: center;
        img{
            max-height:450px;
        }
    }
    .container-varietals{
        background-color:#420D1F;
        ul{
            list-style-type: none;
            li{
                text-decoration: underline;
                text-underline-position: under;
                text-decoration-thickness: 2px;
            }
            h3{
                text-decoration: underline;
                text-underline-position: under;
                text-decoration-thickness: 2px;
            }
        }
        .list-varietals{
            li{
                text-decoration:none;
                background-color:white;
                color:black;
                width:75%;
                display:flex;
                justify-content:space-between;
                border-radius:8px;
                p{
                    padding:0;
                    margin-left:10px;
                }
                .btn-delete{
                    background-color:red;
                    font-weight:bold;
                    color:white;
                    font-size:22px;
                    max-height:35px;
                    margin:auto 15px;
                    padding:0;
                }
            }
        }
        form{
            padding-left:40px;
            height:75px;
            label{
                select{
                    width: 70%;
                    height:50%;
                    outline:none;
                    font-weight:bold;
                    border-radius:8px;
                }
            }
            button{
                background-color:white;
                margin-left:10px;
                height:50%;
                font-weight:bold;
            }
        }
    }
`

export default StyledDiv;