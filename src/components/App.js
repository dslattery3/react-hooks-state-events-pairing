import video from "../data/video.js";
import React, {useState} from "react";
import Header from "./Header.js";
import Comments from "./Comments.js";

function App() {
  const [commentsOn, setCommentsOn] = useState(true)
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

      <Header props={video} handleComments={handleComments} commentsOn={commentsOn}/>

      {commentsOn ? <Comments comments={video.comments} handleComments={handleComments} commentsOn={commentsOn}/> : null}
    </div>
  );
}

export default App;
