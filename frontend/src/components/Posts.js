import React from "react";
import Post from "./Post";

class Posts extends React.Component {
    render() {
        return (
            <div>
                <ol>
                    {this.props.posts.map((post, i) => {
                        return <li key={i}>
                            <Post key={i} post={post}></Post>
                        </li>
                    })}
                </ol>
            </div>
        )
    }
}

export default Posts;