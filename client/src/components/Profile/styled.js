import styled from "styled-components";

const StyledDiv = styled.div`
    width:60%;
    margin:15px auto;
    background-color: #420D1F;
    color:white;
    border-radius:8px;
    padding:10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 10px 10px 0px;
    hr {
        width: 91%;
    }
    h2 {
        margin-left: 40px;
    }
    h3 {
        margin-left: 40px;
        padding-top: 10px;
    }
    .newsletter {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      margin-right: 50px;
      text-align: center;
      align-items: center;
      h3 {
          padding-bottom: 12px;
      }
      .btn-unsubscribe {
        border-radius: 4px;
            height: 40px;
            width: 200px;
            background-color:#555555;
            color:white;
            font-weight: bold;
            border-style: none;
            margin: 10px 10px;
            :hover{
                background-color:white;
                color:black;
                transition: 200ms;
                }
            }
      }
      .container-wishlist{
        display: flex;
        justify-content: space-around;
        .btn{
            border-radius: 4px;
            height: 40px;
            width: 150px;
            background-color:#555555;
            color:white;
            font-weight: bold;
            border-style: none;
            margin: 10px 100px;
            :hover{
                background-color:white;
                color:black;
                transition: 200ms;
                }
            }
    }

    .orders-ul{
        width:90%;
        .orders-links{
            text-decoration:none;
            .orders-li{
                background-color:white;
                color:black;
                list-style-type:none;
                width:100%;
                margin:auto;
                margin-bottom:10px;
                border-radius:7px;
                text-align:center;
                font-weight:bold;
                .orders-users{
                    display:flex;
                    justify-content:space-around;
                }
            }
        }
      }
`;

export default StyledDiv;
