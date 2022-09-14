import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../components/API/PostService";
import { useFetching } from "../components/hooks/useFetching";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching(
        async () => {
            const response = await PostService.getById(params.id);
            setPost(response.data);
        });

    const [fetchComments, isCommentsLoading, commentsError] = useFetching(
        async () => {
            const response = await PostService.getComments(params.id);
            setComments(response.data);
        });



    useEffect(() => {
        fetchPostById(params.id);
        fetchComments(params.id);

    }, []);

    console.log(params)
    return (<div>
        <h1>Пост с id = {params.id}</h1>
        {isLoading ? <Loader /> : <div>{post.id}. {post.title} {post.body}</div>}
        <h2>Комментарии</h2>
        {isCommentsLoading ? <Loader /> :
            <div>
                {comments.map(comm => {
                    <div style={{ marginTop: '15px' }}>
                        <h5>{comm.email}</h5>
                        <div>{comm.body}</div>
                    </div>
                })}
            </div>}
    </div>);
}

export default PostIdPage;

