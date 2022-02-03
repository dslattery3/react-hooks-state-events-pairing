import React, {useState} from 'react';

function Header({props}) {
    console.log(props)
    return (
    <header>
        <h1>{props.title}</h1>
        <div>{props.views} Views | Uploaded {props.createdAt}</div><br></br>
        <div><button>{props.upvotes}👍</button><button>{props.downvotes}👎</button></div><br></br>
        <button>Comments</button>
    </header>);
    }

export default Header;
