import styled from 'styled-components';

const StyledDiv = styled.div`
    display:grid;
    grid-template-areas: 'filter product product product'
                        'filter product product product'
                        'filter product product product'
                        'filter paginate paginate paginate';
    margin-top: 20px;
    .paginate{
        grid-area: paginate;
        margin:auto;
        .paginationBtn{
            list-style:none;
            display:flex;
            li{
                cursor:pointer;
                padding: 6px;
                background-color:#420D1F;
                color:white;
                font-weight:bold;
                border-radius:5px;
                margin: auto 4px;
                outline:none;
            }
            .paginationDisable{
                background-color:gray;
                visibility:hidden;
            }
        }
    }

    .filter{
        grid-area: filter;
        width:100%;
        user-select:none;
        .filter-container{
            background-color: #420D1F;
            margin:20px 20px;
            padding:25px;
            border-radius:6px;
            position:fixed;
            color:white;
            font-weight:bold;
            .filter-category_label{
                display:flex;
                flex-direction:column;
            }
        }
    }

    .cards-container{
        grid-area: product;
        width:95%;
        margin:auto;
        display:grid;
        gap: 1rem;
        grid-template-columns: repeat(auto-fill, minmax(min(100%,30rem), 1fr));
        
        .container-card{
            display:grid;
            grid-template-columns: 1fr 1fr;
            width:450px;
            height:15rem;
            margin:auto;
            border-radius: 8px;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 20px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
            .card-image{
                text-align:center;
                height:100%;
                display:block;
                overflow: hidden;
                img{
                    margin-top:6px;
                    width:8rem;
                    height:14rem;
                    :hover{
                        animation: subidon 1.5s;
                    }
                }
            }
            .card-sales{
                background-color:#FADDD3;
                color:black;
                border-radius: 0px 8px 8px 0px;
                .card-name{
                    font-size: 19px;
                    text-align:center;
                    margin-bottom:2px;
                }
                .line-div{
                    width:50%;
                    padding:0;
                    margin:0 auto;
                }
                .card-price{
                    text-align:center;
                }
                .card-adds{
                    font-weight:bold;
                    text-align:center;
                }
                .card-buttonsDiv{
                    display:flex;
                    justify-content:center;
                    width:100%;
                    .card-buttons_disabled{
                            border:none;
                            background-color:gray;
                            font-weight:bold;
                            border-radius:3px;
                            padding:4px;
                            cursor: not-allowed;
                    }
                    .card-buttons_build{
                        background-color: #420D1F;
                        border-radius:3px;
                        padding:4px;
                        color:white;
                        border:none;
                        font-weight:bold;
                        :hover{
                            background-color:white;
                            color:#420D1F;
                            cursor:pointer;
                        }
                    
                        button{
                            text-align:center;
                            color:white;
                            margin:auto;
                            margin-bottom:2px;
                            cursor:pointer;
                            :hover{
                                font-weight:bold;
                                color:#420D1F;
                            }
                        }
                    }
                }
            }
        }
    }
    @keyframes subidon {
    0%   {transform: scale(1);}
    100% {transform: scale(1.5);
    animation-play-state: paused}
}
`

export default StyledDiv;