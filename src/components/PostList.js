import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchPostsAndUsers } from "../actions";

import UserHeader from "./UserHeader";

class PostList extends Component {
    componentDidMount() {
        this.props.fetchPostsAndUsers();
    }

    renderedPosts() {
        return this.props.posts.map((post) => {
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <UserHeader userId={post.userId} />
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="ui relaxed divided list">
                {this.renderedPosts()}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    posts: state.posts,
});

const mapDispatchToProps = { fetchPostsAndUsers };

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
