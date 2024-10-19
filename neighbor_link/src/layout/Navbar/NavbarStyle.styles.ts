import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 20px;
  margin-left: 300px;
`

export const ContentWrapper = styled.div`
    width: 1150px;
    display: flex;
    align-items: center;
    .nav_pageTitle {
        width: 200px;
        font-size: 2rem;
        font-weight: bold;
        color: #555758;
    }

    .search_bar {
        display: flex;
        align-items: center;
        span {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 2rem;
            height: 2rem;
            background-color: white;
            font-size: 1rem;
            color: #555758;
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
        }
        input {
            width: 30rem;
            height: 2rem;
            padding: 6px;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
            outline: none;
            font-size: 1rem;
            input::placeholder {
                color: #555758;
            }
        }
    }
`