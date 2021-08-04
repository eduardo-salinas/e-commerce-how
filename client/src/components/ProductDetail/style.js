import styled from "styled-components";

const StyledDiv = styled.div`
  width: 85%;
  max-height: 750px;
  margin: 15px auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: 8px;
  font-size:12px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  .detail-img {
    max-height:500px;
    margin: auto;
    img{
      max-height:500px;
    }
  }
  .text-area {
    width: 550px;
    border-radius: 5px;
    margin: 15px 15px;
    border: solid 1.5px;
  }
  .rating {
    font-size: 16px;
    font-weight: bold;
    input {
      border-radius: 4px;
      margin-left: 10px;
      margin-right: 5px;
      height: 20px;
      width: 70px;
    }
    button {
          margin-right: 50px;
          margin-left: 5px;
          outline: none;
          border-radius: 4px;
          border: none;
          background-color: #420d1f;
          font-weight: bold;
          color: white;
          padding: 5px;
          width:90px;
          height: 28px;
        }
  }

  .detail-explain {
    max-height:750px;
    background-color: #faddd3;
    text-align: center;
    border-radius: 0px 8px 8px 0px;
    .detail-render{
      width:90%;
      margin:auto;
      .detail-varietal {
        width: 100%;
        h3 {
          display: inline;
        }
      }
      .detail-btn {
        input {
          margin-right: 10px;
          outline: none;
          border-radius: 4px;
          padding: 4px;
        }
        button {
          margin-right: 5px;
          outline: none;
          border-radius: 5px;
          border: none;
          background-color: #420d1f;
          font-weight: bold;
          color: white;
          padding: 5px;
          height: 28px;
        }
        .btn-wishlist {
          padding-top: 5px;
          background-color: #faddd3;
          width: 25px;
          height: 25px;
          cursor:pointer;
        }
      }
    }
    .container-reviews{
      width:95%;
      max-height:150px;
      overflow: scroll;
      border:1px solid black;
      margin:auto;
      border-radius:8px;
      background-color: #420D1F;
      margin-top:15px;
      margin-bottom:15px;
      h1{
        color:white;
      }
      h4{
        padding:0;
        margin:5px;
        text-align:left;
      }
      h5{
        font-size:0.7rem;
      }
      .reviews-list{
        list-style:none;
        padding:0;
        margin:auto;
        .review{
          background-color:white;
          color:black;
          margin:auto;
          width:80%;
          display:grid;
          grid-template-columns:1fr;
          border:1px solid black;
          border-radius:5px;
          margin-bottom:5px;
          margin-top:5px;
        }
      }
    }
    .container-reviews::-webkit-scrollbar{
      display:none;
    }
  }
`;

export default StyledDiv;
