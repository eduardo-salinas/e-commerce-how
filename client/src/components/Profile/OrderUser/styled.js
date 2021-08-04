import styled from 'styled-components';

const StyledDiv = styled.div`
    margin:15px auto;
    width: 50%;
    border-radius:8px;
    background-color: #420D1F;
    color:white;
    padding:10px;
    .intro-orders{
        display:flex;
        justify-content:space-around;
        img{
            width: 200px;
        }
    }
    .details-orders{
        list-style:none;
        line-height:25px;
        font-weight:bold;
        background-color: white;
        color:black;
        border-radius:8px;
        padding: 30px 0px;
        margin-bottom: 30px;
        .date-amount {
            display: flex;
            justify-content: space-around;
            font-size: 23px;
            
        }
        .item {
            display: flex;
            justify-content: space-around;
            flex-direction: row;
            background-color: #420D1F;
            color: white;
            margin: 5px 30px;
            border-radius: 4px;
            .name {
                width: 400px;
                margin-left: 30px;
            }
            .detail {
                width: 100px;
                text-align: left;
            }

        }

    }
`

export default StyledDiv;