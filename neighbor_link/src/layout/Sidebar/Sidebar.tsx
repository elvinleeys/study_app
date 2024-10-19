import React from 'react';
import { Container, Itemsbox, MainBox, StyledLogo } from './SidebarStyle.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxArchive, faChartLine, faHome, faListOl, faMapLocationDot, faOtter } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { faComments, faSquarePlus } from '@fortawesome/free-regular-svg-icons';


const Sidebar = () => {

    const { pathname } = useLocation();

    if (pathname === "/404") {
        return null;
    }

    return (
        <Container>
            <MainBox>
                <Link to={"/"}>
                    <StyledLogo>
                        <FontAwesomeIcon icon = {faOtter} className='logo'/>
                        <span>ShareMarket</span>
                    </StyledLogo>
                </Link>
                <Itemsbox>
                    <li>
                        <NavLink
                            to={"/"}
                            state={`home`}
                            className={({ isActive }) => isActive ? "active-item" : "inactive-item"}
                        >
                            <span>
                                <FontAwesomeIcon icon={faHome} className='home'/>
                            </span>
                            <span>Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={"/post"}
                            state={`home`}
                            className={({ isActive }) => isActive ? "active-item" : "inactive-item"}
                        >
                            <span>
                                <FontAwesomeIcon icon={faSquarePlus} className='post'/>
                            </span>
                            <span>Create Post</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={"/product"}
                            state={`product`}
                            className={({ isActive }) => isActive ? "active-item" : "inactive-item"}
                        >
                            <span>
                                <FontAwesomeIcon icon={faBoxArchive} className='product'/>
                            </span>
                            <span>Product</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={"/order"}
                            state={`order`}
                            className={({ isActive }) => isActive ? "active-item" : "inactive-item"}
                        >
                            <span>
                                <FontAwesomeIcon icon={faListOl} className='order'/>
                            </span>
                            <span>Order</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={"/chat"}
                            state={`chat`}
                            className={({ isActive }) => isActive ? "active-item" : "inactive-item"}
                        >
                            <span>
                                <FontAwesomeIcon icon={faComments} className='chat'/>
                            </span>
                            <span>Chat</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={"/dashboard"}
                            state={`dashboard`}
                            className={({ isActive }) => isActive ? "active-item" : "inactive-item"}
                        >
                            <span>
                                <FontAwesomeIcon icon={faChartLine} className='dashboard'/>
                            </span>
                            <span>Dashboard</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={"/direction"}
                            state={`direction`}
                            className={({ isActive }) => isActive ? "active-item" : "inactive-item"}
                        >
                            <span>
                                <FontAwesomeIcon icon={faMapLocationDot} className='direction'/>
                            </span>
                            <span>Direction</span>
                        </NavLink>
                    </li>
                </Itemsbox>
            </MainBox>
        </Container>
    );
};

export default Sidebar;