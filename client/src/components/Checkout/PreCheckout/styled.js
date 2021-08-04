import styled from 'styled-components';

const StyledDiv = styled.div`
  width:70%;
  margin:auto;
  margin-top:15px;
  border-radius:8px;
  box-shadow: 0px 5px 10px 5px rgba(0,0,0,0.45);
  padding-bottom:15px;
  .title{
    text-align:center;
  }
  .form-container{
    color:white;
    background-color: #420D1F;
    border-radius:8px;
    width:75%;
    margin:auto;
    margin-bottom:15px;
    h1{
      margin-left:5px;
    }
    .container-inputs{
      display:flex;
      flex-direction:column;
      width:90%;
      margin:auto;
      label{
        width:100%;
        h4{
          margin-bottom:10px;
          margin-top:0;
        }
        .inputs{
          text-align: center;
          input{
            width:90%;
            padding:10px;
            border-radius:8px;
            margin-bottom:10px;
            border:none;
            outline:none;
          }
        }
      }
    }
    .container-btn{
      width:100%;
      text-align: center;
      .btn-submit{
        width:50%;
        padding:10px;
        font-weight:bold;
        border-radius:8px;
        border:none;
        margin: 15px auto;
        cursor:pointer;
        box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.6);
        :hover{
          box-shadow: 0 0 10px 0 rgba(155, 155, 155, 0.6);
        }
      }
    }
  }
`

export default StyledDiv;