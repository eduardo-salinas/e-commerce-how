import styled from "styled-components";

const StyledNewsletter = styled.div`
  border: 1.5px solid grey;
  border-radius: 5px;
  background-color: #420D1F;
  color: white;
  margin: 10px;
  display: flex;
  justify-content: space-around;

  div {
    font-size: 16px;
    text-align: left;
    width: 300px;
    height: 30px;
    padding-top: 10px;
    margin-left: 10px;
    font-weight: bold;
  }
`;

export default StyledNewsletter;
