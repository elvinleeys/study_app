import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    margin-left: 300px;
    padding: 20px;
    .post_wrapper {
        display: flex;
        flex-direction: column;
        width: 970px;
        min-height: 770px;
        margin-right: 20px;
        border-radius: 10px;
        background-color: white;
        .menuWrapper {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 20px 100px 10px;
            .tabWrapper {
                display: flex;
                align-items: center;
                width: 600px;
                height: 50px;    
                li {
                    width: 100px;
                    margin-right: 20px;
                    font-size: 1.25rem;
                    cursor: pointer;
                }
                .tab {
                    color: #555758;
                }
                .activeTab {
                    color: #1D75DD;
                    font-weight: bold;
                }
            }
    
            button {
                width: 100px;
                height: 32px;
                border: none;
                border-radius: 5px;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: #1D75DD;
                color: white;
                font-size: 1rem;
                cursor: pointer;
            }
            button:hover {
                background-color: #A5CEFF;
                color: #1D75DD;
            }
        }
        .content_list {
            display: flex;
            justify-content: center;
            width: 100%;
            height: 100%;
            border-top: 0.8px solid #DDDDDD;
            overflow: hidden;
        }
    }
    .userFriendOnlineWrapper {
        width: 380px;
        min-height: 770px;
        border-radius: 10px;
        background-color: white;
    }
`
