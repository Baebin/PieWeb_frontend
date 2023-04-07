import React, { useState } from 'react';
import '../css/bootstrap.min.css';

import { Nav, Container } from 'react-bootstrap'

import { useDispatch, useSelector } from 'react-redux';
import { actionCreators } from '../redux/modules/post';

import PostCards from './PostCards';

const TesterPost = (props) => {
    const dispatch = useDispatch();

    const posts = useSelector(state => state.post.posts.content);

    const load_posts = () => {
        dispatch(actionCreators.getPostsAPI(1));
        console.log(posts);
    };
    React.useEffect(() => {
        dispatch(actionCreators.getPostsAPI(1));
        console.log(posts);
    }, []);

    return (
        <Container>
            Main
            <br/>
            <PostCards />
        </Container>
    )
};

//{posts.map((p, idx) => {
//    return (
//        <div>
//        </div>
//    );
//})}
export default TesterPost;