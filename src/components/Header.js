import React, {useState} from 'react';

function Header({props}) {
    console.log(props)
    const [upVotes, setUpVotes] = useState(9210)
    const [downVotes, setdownVotes] = useState(185) 
    const [commentsOn, setCommentsOn] = useState(true)

    function handleUpVotes(){setUpVotes(upVotes+1)}
    function handleDownVotes(){setdownVotes(downVotes+1)}   
    function handleComments(){setCommentsOn(!commentsOn)}

    return (
    <header>
        <h1>{props.title}</h1>
        <div>{props.views} Views | Uploaded {props.createdAt}</div><br></br>
        <div><button onClick={handleUpVotes}>{upVotes}👍</button><button onClick={handleDownVotes}>{downVotes}👎</button></div><br></br>
        <button onClick={handleComments}>{commentsOn ? "Hide" : "Show"} Comments</button>
    </header>);
    }

export default Header;
