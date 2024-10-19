import React from 'react';
import { Button, Container } from './ErrorPage.styles';
import img from '../../assets/errorImg.png'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <div className='error__text'>
                <div className='error_title'>Oops....</div>
                <div className='error_subtitle'>Page not Found</div>
                <div className='error_description'>에러가 발생되었습니다.</div>
                <Button onClick={() => navigate('/')}>
                    <FontAwesomeIcon icon={faArrowLeft} className='arrow' />
                    <span>Back to Home</span>
                </Button>
            </div>
            <div className='error__img'>
                <img src={img} alt="pageNotFound" />
            </div>
        </Container>
    );
};

export default ErrorPage;