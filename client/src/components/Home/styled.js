import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  .divNewsletter {
    color: black;
    text-align: center;
    border-radius: 18px;
    border:1px solid black;
    padding: 15px;
    background-color: #FADDD3;
    height: 50px;
    h3 {
      margin: 0;
      object-fit: cover;
    }
    button {
      text-decoration: none;
      border: 2px solid black;
      color: black;
      padding: 2px 4px;
      font-size: 12px;
      font-weight: bold;
      font-family: sans-serif;
      transition: all 0.5s;
      position: relative;
      height: 30px;
      width: 60px;
      background: white;
      border-radius: 10px;
      margin-left: 10px;
      margin-right: 10px;
      top: 1px;
    }
    button.subscribe:hover {
      color: green;
      border: 2px solid green;
    }
    button.unsubscribe:hover {
      color: red;
      border: 2px solid red;
    }
    button:hover {
      transform: scale(1.15) rotatey(360deg);
      transition: all 1000ms;
      left: 0;
      opacity: 1;
    }
  }
  .banner {
    background-color: black;
    .carousel-root {
      border: none;
      img {
        height: 25em;
      }
      .thumbs-wrapper {
        display: none;
      }
    }
  }

  .container-destacados {
    width: 90%;
    margin: auto;
    .title-destacados {
      hr {
        overflow: visible; /* For IE */
        height: 30px;
        border-style: solid;
        border-color: #420d1f;
        border-width: 1px 0 0 0;
        border-radius: 20px;
        :before {
          /* Not really supposed to work, but does */
          display: block;
          content: "";
          height: 30px;
          margin-top: -31px;
          border-style: solid;
          border-color: #420d1f;
          border-width: 0 0 1px 0;
          border-radius: 20px;
        }
      }
    }
    .productos-destacados {
      width: 90%;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(min(100%, 22rem), 1fr));
      overflow: hidden;
      height: 20em;
      margin: 30px;
      .container-card {
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 350px;
        height: 15rem;
        margin: auto;
        border-radius: 8px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 20px -5px,
          rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
        .card-image {
          text-align: center;
          height: 100%;
          display: block;
          overflow: hidden;
          img {
            margin-top: 6px;
            width: 8rem;
            height: 14rem;
            :hover {
              animation: subidon 1.5s;
            }
          }
        }
        .card-sales {
          background-color: #faddd3;
          color: black;
          border-radius: 0px 8px 8px 0px;
          .card-name {
            font-size: 19px;
            text-align: center;
            margin-bottom: 2px;
          }
          .line-div {
            width: 50%;
            padding: 0;
            margin: 0 auto;
          }
          .card-price {
            text-align: center;
          }
          .card-adds {
            font-weight: bold;
            text-align: center;
          }
          .card-buttonsDiv {
            display: flex;
            justify-content: center;
            width: 100%;
            .card-buttons_disabled {
              border: none;
              background-color: gray;
              font-weight: bold;
              border-radius: 3px;
              padding: 4px;
              cursor: not-allowed;
            }
            .card-buttons_build {
              background-color: #420d1f;
              border-radius: 3px;
              padding: 4px;
              color: white;
              border: none;
              font-weight: bold;
              :hover {
                background-color: white;
                color: #420d1f;
                cursor: pointer;
              }

              button {
                text-align: center;
                color: white;
                margin: auto;
                margin-bottom: 2px;
                cursor: pointer;
                :hover {
                  font-weight: bold;
                  color: #420d1f;
                }
              }
            }
          }
        }
      }
    }
  }
  @keyframes subidon {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.5);
      animation-play-state: paused;
    }
  }
`;

export default StyledDiv;
