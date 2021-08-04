import styled from 'styled-components';

const StyledDiv = styled.div`
    border:1px solid black;
    width: 75%;
    margin:15px auto;
    background-color: #420D1F;
    border-radius:8px;
    h1{
        color:white;
        text-align:center;
    }
    .create-google{
        margin:auto;
        text-align:center;
        margin:15px 0;
        span{
            color:black;
        }
    }
    .form-create{
        display:flex;
        flex-direction:column;
        width:75%;
        margin:auto;
        background-color:white;
        padding:10px;
        border-radius:8px;
        margin-bottom:15px;
        .create-login_name{
            display:flex;
            flex-direction:column;
            font-weight:bold;
        }
        .create-login_lastName{
            display:flex;
            flex-direction:column;
            font-weight:bold;
        }
        .create-login_email{
            display:flex;
            flex-direction:column;
            font-weight:bold;
        }
        .create-login_password{
            display:flex;
            flex-direction:column;
            font-weight:bold;
        }
        label{
            margin-bottom:10px;
        }
        input{
                border-radius:6px;
                outline:none;
                font-size:16px;
                margin-bottom:15px;
                padding:10px;
                border:1px solid black;
        }
        button{
                border-radius:6px;
                border:none;
                outline:none;
                font-size:16px;
                margin-bottom:15px;
                padding:5px;
                background-color: #420D1F;
                font-weight:bold;
                span{
                    color:white;
                    :hover{
                        color:black;
                    }
                }
            }
        }
`

export default StyledDiv;