import styled from 'styled-components';

const StyledPanel = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    .panel{
        display:flex;
        justify-content: space-between;
        background-color: #EDEDED;
        margin: 5px;
        padding:5px 15px 5px 15px;
        border-radius: 5px;
        border:solid rgba(0, 0, 0, 0.1);
        box-shadow: 0px 14px 15px rgba(0, 0, 0, 0.1);
        z-index: 999;
    }
    .content{
        width:90%;
        margin: 20px auto;
        background-color:gray;
        padding: 20px 0px;
        border-radius:8px;
        box-shadow: 0 0 5px 0 ;
        background: inherit;
        backdrop-filter: blur(10px);
    }
`
const StyledMenu = styled.div`
    font-weight: bold;
    text-shadow: 0 8px 10px #231e23, 1px -2px 1px #231e23;
    color: #f6e5e9;
`

const StyledProduct = styled.div`
    display:flex;
    text-align: left;
    align-items: center;
    justify-content:space-between;
    margin: 0px 20px 5px 20px;
    padding: 5px;
    background-color: #420D1F;
    list-style: none;
    border-radius: 8px;
    color:white;
    border:solid rgba(0, 0, 0, 0.1);
    font-weight:bold;
    input {
        width:100px;
        height: 30px;
        border-radius: 5px;
        margin-left: 10px;
        text-align: center;
        font-weight: bold;
        outline:none;
    }
    .name {
        width: 300px;
        text-align: left;
    }
    .price {
        width:80px;
    }
    .vineyard{
        width:150px;
    }
    .stock {
        text-align: left;
        width: 100px;
    }
    a{
        text-decoration:none;
        color:white;
        font-weight:bold;
        :hover{
            transition:200ms;
            color: #555555;
        }
        button{
            background-color:#555555;
            color:white;
            :hover{
                background-color:white;
                color:black;
                transition: 200ms;
            }
        }
    }
    .btn-bodega{
        background-color:#555555;
        color:white;
        font-weight:bold;
        :hover{
            background-color:white;
            color:black;
            transition: 200ms;
        }
    }
`

const StyledUsers = styled.div`
    display:flex;
    text-align: left;
    align-items: center;
    justify-content:space-between;
    margin: 0px 20px 0px 20px;
    background-color: #420D1F;
    list-style: none;
    border-radius: 2px;
    margin:auto;
    margin-bottom:15px;
    color:white;
    width:85%;
    padding:10px;
    border-radius:8px;
    .link-name{
        font-weight:bold;
        color:white;
        /* text-underline:1px; */
        text-decoration: none;
        :hover{
            transition:200ms;
            color: #555555;
        }
        .name {
            width: 250px;
        }
    }
    .email {
        width:400px;
    }
    .status{
        width:78px;
    }
    .btn{
        visibility:hidden;
    }
    .active{
        font-weight:bold;
        background-color:#555555;
        color: white;
        :hover{
            background-color:white;
            transition: 200ms;
            color: black;
        }
    }
    
`
const StyledSearch = styled.div`
    background: white;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    z-index: 999;
    input {
        text-align: center;
        font-size: 20px;
        float: left;
        background: #fff;
        height: 30px;
        border-radius: 4px;
        margin-right: 10px;
        margin-bottom: 10px;
    }
    .barcode {
        -webkit-appearance: none;
        margin: 0;
    }
    .btn {
        height: 31px;
        background: #EDEDED;
        color: #214252;

    }
`
const StyledOrders = styled.div`
    display:flex;
    justify-content:space-between;
    text-align: left;
    align-items: center;
    margin: 0px 20px 10px 20px;
    padding: 5px;
    background-color: #420D1F;
    list-style: none;
    border-radius: 8px;
    color:white;
    font-weight:bold;
    height:40px;
    .link-user{
        text-decoration: none;
        color:white;
        font-weight:bold;
        .name {
            width: 400px;
        }
    }
    .email {
        width:150px;
    }
    .cant {
        display:flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        width:350px;
        p{
            padding:0;
            margin:0;
        }
    }
    .complete{
        width:150px;
        border-radius:4px;
        padding:5px;
        background-color: #70AF85;
        color:black;
        text-align: center;
    }
    .process{
        width:150px;
        border-radius:4px;
        padding:5px;
        background-color: #98D6EA;
        color:black;
        text-align: center;
    }
    .sent{
        width:150px;
        border-radius:4px;
        padding:5px;
        background-color: #FAFCC2;
        color:black;
        text-align: center;
    }
    .cancel{
        width:150px;
        border-radius:4px;
        padding:5px;
        background-color: #F29191;
        color:black;
        text-align: center;
    }
    .date{
        margin-right:1rem;
    }


`
const StyledUserDetail = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    height: 40%;
    width: 50%;
    position: absolute; 
    margin: 60px 25% 0px 25%;
    text-align:center;
    list-style:none;
    background-color: #420D1F;
    border-radius: 8px;
    color:white;
    box-shadow: 0px 14px 15px rgba(0, 0, 0, 0.1);
    .btn-admin{
        margin: 50px 10px 0px 10px;
        background-color:white;
        font-weight:bold;
        :hover{
            background-color: #DDDDDD;
        }
    }
    .btn-block{
        margin: 50px 10px 0px 10px;
        background-color:red;
        font-weight:bold;
    }
    .btn-link{
        text-decoration: none;
        .btn-back{
            margin: 50px 10px 0px 10px;
            background-color:#E9EEF9;
            color:black;
            font-weight:bold;
        }
    }
    .btn-recoverypsw{
        margin: 50px 10px 0px 10px;
        background-color:#E9EEF9;
        color:black;
        font-weight:bold;
    }
    .name{
        font-size: 30px;
        font-weight:bold;
        margin:  10px;
    }
    .user-email {
        font-size: 25px;
    }
    .btn-back {
        text-decoration: none;
    }
`
const StyledOrderDetail = styled.div`
    display:flex;
    text-align: left;
    align-items: center;
    justify-content:space-evenly;
    margin: 50px 50px 50px 50px;
    padding: 5px;
    background-color: #420D1F;
    list-style: none;
    border-radius: 8px;
    color:white;
    border:solid rgba(0, 0, 0, 0.1);
    font-weight:bold;

    .client{
        font-size: 20px;
        font-weight:bold;
        margin: 30px 10px 10px 10px;
        li {
            margin: 30px;
        }
    }
    .product{
        text-align: right;
        font-size: 20px;
        font-weight:bold;
        margin: 10px 30px 10px 0px;
        .items {
            margin: 10px 00px 10px 10px;
            background-color: white;
            color:#420D1F;
            display:flex;
            border-radius: 4px;
            justify-content: space-around;

            li{
                width: 300px;
                height: 50px;
                list-style:none;
                margin-top: 15px;
                margin-right: 15px;
                text-align: center;
                
            }
        }
        button {
            font-weight:bold;
            background-color:#555555;
            color: white;
            height: 40px;
            width: 150px;
            border-radius: 4px;
            :hover{
                background-color:white;
                transition: 200ms;
                color: black;
            }

        }
    }
    
    .btn-prep{
        color:black;
        font-weight:bold;
        background-color:#98D6EA;
        border:none;
    }

    .btn-sent{
        color:black;
        font-weight:bold;
        background-color:#FAFCC2;
        border:none;
    }

    .btn-done{
        color:black;
        font-weight:bold;
        background-color:#70AF85;
        border:none;
    }

    .btn-cancel{
        color:black;
        font-weight:bold;
        background-color:#F29191;
        border:none;
    }
    .back {
    height: 31px;
    background-color: red;
    color: #214252;
    padding: 30px
    }
`

const StyledAddProduct = styled.div`
    width: 75%;
    margin:auto;
    background: #420D1F;
    border-radius:8px;
    color:white;
    font-weight:bold;
    .add-product{
        display: grid;
        grid-template-columns: 1fr 1fr;
        label{
            margin-top:10px;
            display:flex;
            align-items:center;
            flex-direction:column;
            h4{
                padding:0;
                margin-right:5px;
                font-size:18px;
            }
            input{
                width: 55%;
                padding: .7em;
                border: none;
                background: white;
                outline: none;
                color: black;
                border-radius: 4px;
                font-weight:bold;
                height:10px;
            }
            select{
                width: 55%;
                padding: .7em;
                border: none;
                background: white;
                outline: none;
                color: black;
                border-radius: 4px;
                font-weight:bold;
            }
            textarea{
                width: 55%;
                padding: .7em;
                border: none;
                background: white;
                outline: none;
                color: black;
                border-radius: 4px;
                font-weight:bold;
                height:10px;
            }
        }
        .block{
            height:50px;
            font-weight:bold;
            width:58%;
            margin:auto;
            margin-top:20px;
            margin-bottom: 10px;
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
const StyledSells = styled.div `

    width: 60%;
    margin: auto;
    font-weight:bold;
    text-align: center;

    h2 {
        align-self: flex-end;
    }
    .items-sold {
        display:flex;
        justify-content:space-between;
        background-color: #420D1F;
        color: white;
        border-radius: 4px;
        padding: 20px 40px;
        
    }
    .btn-back {
        margin-left: 78%;
        height: 50px;
        width: 150px;
        color: white;
        background-color: #555555;
        border-radius: 4px;
        font-weight: bold;
        :hover{
                background-color:#EDEDED;
                color:black;
                transition: 200ms;
            }
    }
`


export {
    StyledPanel,
    StyledMenu,
    StyledProduct,
    StyledSearch,
    StyledUsers,
    StyledUserDetail,
    StyledOrders,
    StyledOrderDetail,
    StyledAddProduct,
    StyledSells
};
