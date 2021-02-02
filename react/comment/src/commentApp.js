import React, { Component } from 'react';
import './index.css';
import CommentInput from './commentInput'
import CommentList from './commentList'
class CommentApp extends Component {
    render() {
        return (
            <div className="content">
                品论App
                <CommentInput />
                <CommentList />
            </div>
        )
    }
}
export default CommentApp;