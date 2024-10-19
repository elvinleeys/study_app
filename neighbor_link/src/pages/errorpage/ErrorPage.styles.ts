import styled from "styled-components";

export const Container = styled.div`
  width: 60rem;
  height: 35.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0px 30px;
  background-color: #FAFAFA;
  margin: 8rem 22.5rem;
  border-radius: 25px;
  .error__img {
    img {
      width: 32.8rem;
      height: 32.8rem;
    }
  }
  .error__text {
    .error_title {
        font-size: 2.5rem;
        font-weight: bold;
        margin-bottom: 15px;
    }
    .error_subtitle {
        font-size: 2rem;
        margin-bottom: 15px;
    }
    .error_description {
        font-size: 1rem;
        margin-bottom: 78px;
    }
    button:hover {
        background-color: #A5CEFF;
        color: #1D75DD;
    }
  }
`

export const Button = styled.button `
    width: 200px;
    height: 45px;
    background-color: #2E77E9;
    border-radius: 5px;
    color: white;
    cursor: pointer;

    .arrow {
        margin-right: 5.5px;
        font-size: 1rem;
    }

    span {
        font-size: 1rem;
    }
`