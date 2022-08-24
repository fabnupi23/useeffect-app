import React, { useState, useEffect, useCallback } from 'react'
import { getUser } from './helpers/getUser';
import { getPosts } from './helpers/getPosts';

/* const initialUser = {
    name: "Fabian",
    email: "fabnupi023@gmail.com"
}

const initialPosts = [
    {id: 1, title: "Post 1"},
    {id: 2, title: "Post 2"},
] */

const FetchCard = () => {
    const [user, setUser] = useState({});
    const [posts, setsPosts] = useState([]);

    const updateUser = () => {
        getUser()
            .then((newUser) => {
                setUser(newUser);
            })
    }

    const updatePost = useCallback (() => {
        getPosts(user.id)
            .then((newPosts) => {
                setsPosts(newPosts);
            })
    }, [user.id]);

    


    useEffect(() => {
        updateUser();
    }, []);

    useEffect(() => {
        if(user?.id){
            updatePost();
        }        
    }, [user, updatePost]);

  return (
    <div>
        <h1>{user.name}</h1>
        <h1>{user.email}</h1>

        <h2>Posts - user: {user.id}</h2>
        <ul>
            {posts.map(post => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
        <br/> 
        <button onClick={updateUser}>
            Cargar Usuario - POST
        </button>         

    </div>
  )
}

export  { FetchCard };