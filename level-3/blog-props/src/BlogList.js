import React from "react"
import BlogPost from "./BlogPost"
import blogData from "./blogData"

function BlogList() {
    const blogInfo = blogData.map(info => <BlogPost title={info.title}
        subTitle={info.subTitle} author={info.author} date={info.date} />)
    return (
        <div className="blogBody">
            {blogInfo}
            <a className="button">OLDER POSTS →</a>
        </div>
    )
}

export default BlogList