import React, {useState} from 'react';

function Comments({comments}) {

  
    const displayedComments = comments.map((comment) =>  {const [upVotes, setUpVotes] = useState(comment.upvotes)
    const [downVotes, setdownVotes] = useState(comment.downvotes)
    return (
    <div key={comment.id}>
        <h3>{comment.user}</h3>
        <p>{comment.comment}</p>
        <button onClick={handleUpVotes}>{upVotes} 👍</button>
    </div>)}

    const commentCount = comments.length
    
    
    function handleUpVotes(){setUpVotes(upVotes+1)}
    // function handleDownVotes(){setdownVotes(downVotes+1)}



    return(
        <>
            <h2 id='comment-count'>{commentCount} {commentCount != 1 ? 'Comments' : 'Comment'}</h2>
            <div id='comment-container'>
                {displayedComments}
            </div>
            
        </>);
}

export default Comments;
