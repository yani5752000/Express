import React from "react";

class Post extends React.Component {

    render() {
        return (
            <div>
                <p>id: {this.props.post.id} Content: {this.props.post.content}</p>
            </div>
        )
    }
}

export default Post;