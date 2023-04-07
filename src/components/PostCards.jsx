import React, { useState } from 'react';
import '../css/bootstrap.min.css';

import { useDispatch, useSelector } from 'react-redux';

import PBSpinner from '../elements/PBSpinner';
import { Card } from 'react-bootstrap';

const PostCards = (props) => {
    const posts = useSelector(state => state.post.posts.content);

    if (!posts) {
        return (
            <PBSpinner />
        );
    } else {
        return (
            <div className='PostCards'>
                {posts.map((post, idx) => {
                    return (
                        <Card
                            style={{
                                width: '120px',
                                border: 'none',
                                margin: '80px 0px 0px 0px',
                                cursor: 'pointer',
                            }}
                            key={post.idx}>
                            {post.account.id} : [ {post.title} ] - {post.description}
                        </Card>
                    )
                })}
            </div>
        );
    }
};

export default PostCards;