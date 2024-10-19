import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 300px;
    height: 100vh;
`

export const MainBox = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-color: white;

    a {
        text-decoration: none;
    }
`

export const StyledLogo = styled.div`
    display: flex;
    align-items: center;
    width: 260px;
    padding: 24px 20px;
    margin-bottom: 20px;

    .logo {
        font-size: 3rem;
        color: #1D75DD;
        margin-right: 10px;
    }

    span {
        font-size: 1.75rem;
        font-weight: 600;
        color: #555758;
    }
`

export const Itemsbox = styled.ul`
    overflow: hidden;

    li {
        width: 100%;
        height: 48px;
        display: flex;
        align-items: center;
        font-weight: 500;

        cursor: pointer;

        .home, .post, .product, .order, .chat, .dashboard, .direction {
            font-size: 1rem;
            margin-right: 10px;
        }

        a {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            padding-left: 20px;
            text-decoration: none;
        }

        .active-item {
            border-left: #1D75DD solid 6px;
            color: #1D75DD;
            font-weight: bold;
        }

        .inactive-item {
            border: none;
            color: #555758;
        }

        .inactive-item:hover {
            transform: scale(1.1);
            transition: transform 0.3s ease-in-out;
        }
    }
`