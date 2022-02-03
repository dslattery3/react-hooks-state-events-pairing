import React, {useState} from 'react';

function Header({props, handleComments, commentsOn, handleUpVotes, handleDownVotes, upVotes, downVotes}) {
    console.log(props)
    
    return (
    <header>
        <h1>{props.title}</h1>
        <div>{props.views} Views | Uploaded {props.createdAt}</div><br></br>
        <div><button onClick={handleUpVotes}>{upVotes}👍</button><button onClick={handleDownVotes}>{downVotes}👎</button></div><br></br>
        <button onClick={handleComments}>{commentsOn ? "Hide" : "Show"} Comments</button>
    </header>);
    }

export default Header;
