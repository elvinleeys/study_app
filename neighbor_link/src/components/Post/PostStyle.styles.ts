import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 600px;
    padding: 20px 0;
    .info_container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
        .post_info {
            width: 200px;
            display: flex;
            align-items: center;
            .user_img {
                font-size: 3rem;
                color: #555758;
                margin-right: 10px;
            }
            .post_user {
                .user_name {
                    font-size: 1rem;
                    font-weight: bold;
                    color: #555758;
                    margin-bottom: 5px;
                }
                .postTime {
                    font-size: 0.7rem;
                    color: #555758;
                }
            }
        }
        .more_menu {
            cursor: pointer;
            font-size: 1rem;
            color: #555758;
        }
    }

    .post_img {
        width: 100%;
        height: 400px;
        margin-bottom: 20px;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 10px;
        }
    }

    .text_wrapper {
        display: flex;
        align-items: center;
        width: 100%;
        margin-bottom: 20px;
        font-size: 1rem;
        color: #555758;
        .user_name {
            font-weight: bold;
            margin-right: 10px;
        }
    }
`