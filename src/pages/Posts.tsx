import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from 'aws-amplify';
import { listPosts } from "../graphql/queries";
// import * as queries from './graphql/queries';

import { Post } from "../models/index";

export const Posts = () => {

    const [posts, setPosts] = useState<Post[]>([]);
    const [error, setError] = useState({error: null});

    useEffect(() => {
        const setPostsAsync = async () => {

            try {
                const posts = await API.graphql(graphqlOperation(listPosts)) as Post[];
                setPosts(posts);
            } catch (error) {
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
        return <p>{error.toString()}</p>
    }

    if(posts.length <= 0){
        return <p>Loading...</p>
    }
    

return <div>{posts.map((post) => <p>{post.title}</p>)}</div>
}