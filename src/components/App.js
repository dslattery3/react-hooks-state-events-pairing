import video from "../data/video.js";
import React, {useState} from "react";
import Header from "./Header.js";
import Comments from "./Comments.js";

function App() {
  const [commentsOn, setCommentsOn] = useState(true)
  const [upVotes, setUpVotes] = useState(video.upvotes)
  const [downVotes, setdownVotes] = useState(video.downvotes)

  function handleUpVotes(){setUpVotes(upVotes+1)}
  function handleDownVotes(){setdownVotes(downVotes+1)}
  function handleComments(){setCommentsOn(!commentsOn)}


  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dpw9EHDh2bM"
        frameBorder="0"
        allowFullScreen
        title="React Today and Tomorrow and 90% Cleaner React With Hooks"
      />

      <Header props={video} handleComments={handleComments} commentsOn={commentsOn} handleUpVotes={handleUpVotes} handleDownVotes={handleDownVotes} upVotes={upVotes} downVotes={downVotes}/>

      <hr></hr>

      {commentsOn ? <Comments comments={video.comments}/> : null}
    </div>
  );
}

export default App;
