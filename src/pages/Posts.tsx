import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from 'aws-amplify';
import { getPost, listPosts } from "../graphql/queries";
// import * as queries from './graphql/queries';

import { Post } from "../models/index";
import { useParams } from "react-router";

export const Posts = () => {

    const [posts, setPosts] = useState<Post[]>([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const setPostsAsync = async () => {

            try {
                const postsResponse = await API.graphql(graphqlOperation(listPosts)) as any;
                setPosts(postsResponse.data.listPosts.items);
            } catch (error) {
                debugger;
                console.error(error);
                setError(error);
            }

        }
        setPostsAsync();
        // return () => {
        //     cleanup
        // }
    }, [])
    
    if(error) {
        return <p>Error</p>
    }

    if(posts.length === undefined || posts.length <= 0){
        return <p>Loading...</p>
    }

    return <ul>{posts.map((post) => <li><PostListItem post={post} /></li>)}</ul>
}

interface PostListItemParams {
    post: Post
}
const PostListItem = ({post} : PostListItemParams) => <a href={`/posts/${post.id}`}>{post.title}</a>


export const PostDetail = () => {

    const [post, setPost] = useState<Post | null>(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState<Boolean>(true);
    
    const { postId } = useParams() as any;

    useEffect(() => {
        const setPostsAsync = async () => {

            try {
                const postsResponse = await API.graphql(graphqlOperation(getPost, { id: postId })) as any;
                setLoading(false);
                setPost(postsResponse.data.getPost);
            } catch (error) {
                console.error(error);
                setError(error);
                setLoading(false);
            }

        }
        setPostsAsync();
        // return () => {
        //     cleanup
        // }
    }, [postId])

    if(loading){
        return <p>Loading...</p>
    }

    if(error || !post) {
        return <p>Error</p>
    }

    return <div>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
    </div>
}

