import styled from 'styled-components';

const StyledDiv = styled.div`
  max-width:1170px;
  margin:auto;
  .container-form{
    width:75%;
    margin:auto;
    margin-top:15px;
    border-radius:8px;
    text-align:center;
    padding-bottom:15px;
    box-shadow: 0px 5px 10px 5px rgba(0,0,0,0.32);

    .last-tap{
      width:75%;
      border:1px solid black;
      margin: 15px auto;
      border-radius:8px;
      text-align:center;
      padding-bottom:15px;
      background-color:#420D1F;
      color:white;
      .ref-link{
          text-decoration:none;
          button{
              font-weight:bold;
              background-color: #f50057;
              color:white;
              box-shadow: 0px 2px 2px rgba(255,255,255,0.5);
              :hover{
                box-shadow: 0px 0px 0px 0px rgba(255,255,255,0.24);
            }
          }
      }
      .mercadoPago{
          font-weight:bold;
          background-color:#0A0080;
          color:white;
          box-shadow: 0px 2px 2px rgba(255,255,255,0.5);
          :hover{
            box-shadow: 0px 0px 0px 0px rgba(255,255,255,0.24);
          }
      }
    }
  }
`

export default StyledDiv;