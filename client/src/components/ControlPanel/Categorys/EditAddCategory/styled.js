import styled from "styled-components";

const StyledDiv = styled.div`
    max-width:1100px;
    margin:15px auto;
    .container{
        border-radius: 10px;
        box-shadow: 0 0 20px 0 rgba(8, 8, 8, 0.3);
        >* {
            padding: 1em;
        }
        display:grid;
        grid-template-columns: repeat(auto-fill, minmax(min(100%,30rem), 1fr));
        .container-form{
            background: #420D1F;
            color:white;
            font-weight:bold;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
            label{
                display:block;
                input{
                    width: 75%;
                    padding: .7em;
                    border: none;
                    background: white;
                    outline: 0;
                    color: black;
                    border-radius: 4px;
                    font-width:bold;
                    margin-bottom:20px;
                }
                select{
                    border-radius: 4px;
                    width: 75%;
                    padding: .7em;
                    border: none;
                    background: white;
                    outline: 0;
                    color: black;
                }
            }
            .btn-submit{
                background: white;
                margin-top:20px;
                font-weight:bold;
            }
            
        }
        .container-varietals{
            background-color:#272727;
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
            ul{
                list-style:none;
                font-weight:bold;
                margin:auto;
                display:block;
                padding:0;
                li{
                    margin:auto;
                    background-color:white;
                    color:black;
                    margin-bottom:5px;
                    border-radius:8px;
                    width:50%;
                    display:flex;
                    justify-content:space-between;
                    padding:10px;
                    .btn{
                        background-color:red;
                        color:white;
                        font-weight:bold;
                        margin: auto 5px;
                        padding:3px;
                    }
                }
            }
        }
    }
`

export default StyledDiv;