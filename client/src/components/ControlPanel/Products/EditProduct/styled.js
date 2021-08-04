import styled from "styled-components";

const StyledDiv = styled.div`
  max-width: 1170px;
  margin: 15px auto;
  .container-grap {
    border-radius: 10px;
    box-shadow: 0 0 20px 0 rgba(8, 8, 8, 0.3);
    > * {
      padding: 1em;
    }
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 30rem), 1fr));
        .edit-product{
            background: #420D1F;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
            color:white;
            font-weight:bold;
            .btn-newsletter{
              display:grid;
              grid-template-columns:1fr 1fr;
              .btn-manu{
                margin:auto;
                width: 90%;
                border: none;
                background-color: #555555;
                outline: 0;
                color: white;
                border-radius: 4px;
                border: 0;
                text-transform: uppercase;
                padding: 1em;
                font-weight: bold;
                &:hover {
                    background: white;
                    color: black;
                    transition: background-color 1s ease-out;
                    outline: 0;
                }
                &:focus {
                    background: #e93a3a;
                    color: #fff;
                    transition: background-color 1s ease-out;
                    outline: 0;
                }
              }
            }
            .id-hidden{
                visibility:hidden;
            }
            .edit-product_container{
                display: grid;
                grid-template-columns: 1fr 1fr;
                .block {
                    grid-column: 1/3;
                }
                p{
                    margin:0;
                    padding:1em;
                }
                button {
                    width: 100%;
                    border: none;
                    background-color: #555555;
                    outline: 0;
                    color: white;
                    border-radius: 4px;
                    border: 0;
                    text-transform: uppercase;
                    padding: 1em;
                    font-weight: bold;
                    &:hover {
                        background: white;
                        color: black;
                        transition: background-color 1s ease-out;
                        outline: 0;
                    }
                    &:focus {
                        background: #e93a3a;
                        color: #fff;
                        transition: background-color 1s ease-out;
                        outline: 0;
                    }
                }
                input {
                    width: 100%;
                    padding: .7em;
                    border: none;
                    background: white;
                    outline: 0;
                    color: black;
                    border-radius: 4px;
                    font-weight:bold;
                }
                textarea {
                    width: 100%;
                    padding: .7em;
                    border: none;
                    background: white;
                    outline: 0;
                    color: black;
                    font-weight:bold;
                    border-radius: 4px;
                }
            }
        }
        input {
          width: 100%;
          padding: 0.7em;
          border: none;
          background: white;
          outline: 0;
          color: black;
          border-radius: 4px;
          font-width: bold;
        }
        textarea {
          width: 100%;
          padding: 0.7em;
          border: none;
          background: white;
          outline: 0;
          color: black;
          font-weight: bold;
          border-radius: 4px;
        }
      }
    }
    .product-image {
      margin: auto;
      background: white;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      img{
        width:350px;
        max-height: 525px;
      }
    }
  }
`;

export default StyledDiv;
