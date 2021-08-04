import styled from "styled-components";

const StyledDiv = styled.div`
  display: inline-block;
  #react-autowhatever-1 {
    background: white;
    color: black;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    z-index: 999;
    width:350px;
    border-radius:8px;
    a{
      text-decoration:none;
      color:black;
      font-weight:bold;
      :hover{
        color:red;
      }
    }
    li{
      list-style:none;
    }
  }
  input {
    text-align: center;
    font-size: 20px;
    float: left;
    background: #fff;
    height: 30px;
      list-style:none;
    
  }
  .btn {
    margin-left: -32px;
    height: 22px;
    border-left: none;
    background: #bebdbd;
    color: #214252;
  }
`;

export default StyledDiv;
