import React from "react";
import {connect} from "react-redux";

import {fetchPosts} from "../actions";

import UserInfo from "./UserInfo";

class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderList() {
        return this.props.posts.map((post) => {
            return (
                <div key={post.id} className="item">
                    <i className="large user middle aligned icon"/>
                    <div className="content">
                        <a className="large header">{post.title}</a>
                        <div className="description">{post.body}</div>
                        <UserInfo userId={post.userId}/>
                    </div>
                </div>
            )
        })
    }

    render() {
        console.log(this.props.posts);
        return (
            <div className="ui segment">
                <h1 className="ui header">Posts</h1>
                <div className="ui relaxed divided list">
                    {this.renderList()}
                </div>
            </div>
        )
    }
}


const mapState2Props = (state) => {
    return {
        posts: state.posts
    }
};

export default connect(mapState2Props, {fetchPosts})(PostList);