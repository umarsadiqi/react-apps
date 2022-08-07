import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchPosts } from "../actions/index";

export class PostList extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }
    render() {
        console.log(this.props.posts);
        return <div>PostList</div>;
    }
}

const mapStateToProps = (state) => ({
    posts: state.posts,
});

const mapDispatchToProps = { fetchPosts };

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
