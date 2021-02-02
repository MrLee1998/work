import React, { Component } from 'react';
import './index.css';
import CommentApp from './commentApp'
class CommentInput extends Component {
    render( ){
        return (
            <div className="input-content">
                要写点什么呢
                <CommentApp />
            </div>
            
        )    
    }
     
}
export default  CommentInput