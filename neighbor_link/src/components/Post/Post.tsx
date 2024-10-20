import React from 'react';
import { Container } from './PostStyle.styles';
import img from '../../assets/예시 사진.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faEllipsis } from '@fortawesome/free-solid-svg-icons';

const Post = () => {
    return (
        <Container>
            <div className="info_container">
                <div className="post_info">
                    <div className="user_img">
                        <FontAwesomeIcon icon={faCircleUser} className='userImg'/>
                    </div>
                    <div className="post_user">
                        <div className='user_name'>
                            Leslie Alexander
                        </div>
                        <div className="postTime">
                            00:00
                        </div>
                    </div>
                </div>
                <div className="more_menu">
                    <FontAwesomeIcon icon={faEllipsis} className='more' />
                </div>
            </div>
            <div className="post_img">
                <img src={img} alt="예시 사진" />
            </div>
            <div className="text_wrapper">
                <div className="user_name">
                    Leslie Alexander
                </div>
                <div className="post_text">
                    New Blazer out here... $500!!!!!!
                </div>
            </div>
        </Container>
    );
};

export default Post;