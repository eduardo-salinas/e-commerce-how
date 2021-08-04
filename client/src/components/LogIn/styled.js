import styled from 'styled-components';

const StyledDiv = styled.div`
    border:1px solid black;
    width:75%;
    margin:auto;
    background-color:#420D1F;
    text-align:center;
    margin-top:15px;
    border-radius:8px;

    button{
        margin:15px 0px;
        span{
            color:black;
        }
    }

    .form-login{
        display:flex;
        flex-direction:column;
        width:75%;
        margin:auto;
        background-color:white;
        padding:10px;
        border-radius:8px;
        margin-bottom:15px;
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

    p{
        margin:0px;
        margin-bottom:15px;
        font-weight:bold;
    }
`

export default StyledDiv;