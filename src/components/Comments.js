import React, { useState } from "react";
import Comment from "./Comment"

function Comments ({ comments }){
    
    const [showingComment, setShowingComment] = useState(true)

    function hideComment(){
        // {showingComment ? <Results/> : null}
        setShowingComment((showingComment) => !showingComment)
    }


    const commentItem = comments.map((comment) => {
    return <Comment key={comment.id} user={comment.user} comment={comment.comment}/>
    });
    console.log(commentItem)


   return(
       <div>
           <button onClick={hideComment} value="search" > { showingComment ? "Hide" : "Show "} Comment </button>
           <h1>{comments.length} Comments</h1>
               {showingComment ? commentItem : null}
       </div>

   )
}

export default Comments;