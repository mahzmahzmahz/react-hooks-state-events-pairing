import React, { useState } from "react";



function Video({ video }){

    const [upvotes, setUpvotes] = useState(video.upvotes)
  console.log(upvotes)
    const [downvotes, setDownvotes] = useState(video.downvotes)

    function handleUpvotes(){
        setUpvotes(upvotes + 1)
    }

    function handleDownvotes(){
        setDownvotes(downvotes + 1)
    }

    return (
    <div>
    <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      /> 
      <h1>{video.title}</h1>
      <p>{video.views, video.createdAt}</p>
        <button className="claps" onClick={handleUpvotes}>👏{upvotes}</button>
        <button className="claps" onClick={handleDownvotes}>👏{downvotes}</button>
    </div>
    )}

export default Video;