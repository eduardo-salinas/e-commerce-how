import styled from 'styled-components';

const StyledDiv = styled.div`
    width:50%;
    margin:15px auto;
    border: 1px solid black;
    border-radius:7px;
    background-color: #420D1F;
    color: white;
    h1 {
        margin-left: 50px;
    }
    h2 {
        margin-left: 50px;
    }
    .detail {
        li {
            display: grid;
            grid-template-columns: 3fr 1fr 1fr;
            list-style: none;
            font-size: 18px;
            background-color: white;
            color: black;
            font-weight: bold;
            margin: 10px;
            border-radius: 4px;
            width: 90%;
            padding: 10px;
        }
    }
    .form-container{
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding:25px 50px 50px 50px;
        width: 90%;
        .form-control{
            background-color: #F0F0F0;
            padding:10px;
            border-radius:3px;
        }
        button{
            color:white;
            font-weight:bold;
            margin: 0px 20px;
            background-color:#555555;
            color:white;
            :hover{
                background-color:white;
                color:black;
                transition: 200ms;
            }
        }
    }
`

export default StyledDiv;