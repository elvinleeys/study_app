import React from 'react';
import { Container, ContentWrapper } from './NavbarStyle.styles';
import getStandardName from '../../store/util/getStandardName';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const { pathname, state } = useLocation()

    if (pathname === "/404") {
        return null;
    }

    return (
        <Container>
            <ContentWrapper>
                <div className='nav_pageTitle'>{getStandardName(state)}</div>
                <div className='search_bar'>
                    <span><FontAwesomeIcon icon={faMagnifyingGlass} className='search'/></span>
                    <input type="text" placeholder='Enter keyword to find a post' />
                </div>
            </ContentWrapper>
        </Container>
    );
};

export default Navbar;