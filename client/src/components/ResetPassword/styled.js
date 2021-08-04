import styled from "styled-components";

const StyledDiv = styled.div`
  width:60%;
  margin:auto;
  margin-top:20px;
  border-radius:18px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  .form-login{
    display:flex;
    flex-direction:column;
    label{
      display:flex;
      flex-direction:column;
      width:50%;
      margin:auto;
      margin-bottom:20px;
      h3{
        margin:0;
        margin-bottom:15px;
        margin-top:15px;
      }
      input{
        width:100%;
        margin:auto;
        outline:none;
        border-radius:8px;
        padding:5px;
      }
    }
    .btn-submit{
      width:50%;
      margin:auto;
      margin-bottom:15px;
      background-color: #420D1F;
      color:white;
      font-weight:bold;
      border-radius:10px;
    }
  }
`

export default StyledDiv;