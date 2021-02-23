import React from "react"

function Comment({ user, comment }){
    console.log(user, comment)
    return (
        <div className="userComments">
            <h2>{user}</h2>
            <p>{comment}</p>
            
        </div>
        
    )
}

export default Comment;