import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchPosts } from "../actions/index";

export class PostList extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }
    render() {
        return <div>PostList</div>;
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { fetchPosts };

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
