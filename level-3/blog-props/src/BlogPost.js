import React from "react"

function BlogPost(props) {
    return (
        <div>
            <h1 className="blogTitle">{props.title}</h1>
            <h2 className="blogSubtitle">{props.subTitle}</h2>
            <span className="postedBy">posted by</span>
            <span className="blogAuthor"> {props.author} </span>
            <span className="blogDate">on {props.date}</span>
            <hr className="blogDividers"></hr>
        </div>
    )
}

export default BlogPost