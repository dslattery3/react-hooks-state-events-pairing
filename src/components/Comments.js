import React from 'react';

function Comments({comments, commentsOn, handleComments}) {
    const displayedComments = comments.map((comment) => <div key={comment.id}>
        <h3>{comment.user}</h3>
        <p>{comment.comment}</p>
    </div>)
    const commentCount = comments.length

    return(
        <>
            <h2 id='comment-count'>{commentCount} {commentCount != 1 ? 'Comments' : 'Comment'}</h2>
            <div id='comment-container'>
                {displayedComments}
            </div>
        </>);
}

export default Comments;
