import React, {useState} from 'react';

function Comments({comments}) {
    
    const commentCount = comments.length
    const displayedComments = comments.map((comment) =>  {
        return (
        <div key={comment.id}>
            <h3>{comment.user}</h3>
            <p>{comment.comment}</p>
        </div>)})

    return(
        <>
            <h2 id='comment-count'>{commentCount} {commentCount != 1 ? 'Comments' : 'Comment'}</h2>
            <div id='comment-container'>
                {displayedComments}
            </div>
            
        </>);
}

export default Comments;
