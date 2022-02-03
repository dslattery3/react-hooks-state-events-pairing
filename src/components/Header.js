import React, {useState} from 'react';

function Header({props, handleComments, commentsOn}) {
    console.log(props)
    
    const [upVotes, setUpVotes] = useState(props.upvotes)
    const [downVotes, setdownVotes] = useState(props.downvotes)

    function handleUpVotes(){setUpVotes(upVotes+1)}
    function handleDownVotes(){setdownVotes(downVotes+1)}

    return (
    <header>
        <h1>{props.title}</h1>
        <div>{props.views} Views | Uploaded {props.createdAt}</div><br></br>
        <div><button onClick={handleUpVotes}>{upVotes}👍</button><button onClick={handleDownVotes}>{downVotes}👎</button></div><br></br>
        <button onClick={handleComments}>{commentsOn ? "Hide" : "Show"} Comments</button>
    </header>);
    }

export default Header;
