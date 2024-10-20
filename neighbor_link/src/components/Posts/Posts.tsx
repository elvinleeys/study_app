import React from 'react';
import { Container } from './PostsStyle.styles';
import Post from '../Post/Post';

const Posts = () => {
    return (
        <Container>
            <ul>
                <li>
                    <Post />
                </li>
            </ul>
        </Container>
    );
};

export default Posts;