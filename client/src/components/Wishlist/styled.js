import styled from "styled-components";

const StyledDiv = styled.div`
  text-align: center;
  .container-wishlist{
    width:100%;
    margin:auto;
    text-align:center;
    .card-wish{
      width:1200px;
      margin:auto;
      .link {
        text-decoration: none;
        float: left;
        background-color:#420d1f;
        border: 1px solid #420d1f;
        border-radius: 20px;
        width: 100%;
        height: 25%;
        text-align: center;
        margin:15px auto;
        margin-bottom:8px;
      }
      .divlink {
        text-align: center;
        background-color: white;
        color: black;
        list-style-type: none;
        width: 50%;
        margin: auto;
        margin-top:10px;
        margin-bottom: 5px;
        border-radius: 8px;
        font-weight: bold;
        img {
          width: 50px;
        }
      }
    }
    h1 {
      text-align: center;
      font-size: 25px;
      color: #420d1f;
    }
  }
`;

export default StyledDiv;
