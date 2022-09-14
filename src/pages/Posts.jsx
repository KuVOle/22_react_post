import React, { useEffect, useState } from 'react';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import '../styles/app.css';
import PostFilter from '../components/PostFilter';
import MyModal from '../components/UI/modal/MyModal';
import MyButton from '../components/UI/button/MyButton';
import { usePosts } from '../components/hooks/usePosts';
import PostService from '../components/API/PostService';
import Loader from '../components/UI/Loader/Loader';
import { useFetching } from '../components/hooks/useFetching';
import { getPagesCount } from '../components/UI/utils/pages';
import Pagination from '../components/UI/pagination/Pagination';

function Posts() {

    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({ sort: '', query: '' });
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const sortedAndSearchingPosts = usePosts(posts, filter.sort, filter.query);
    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data);
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPagesCount(totalCount, limit));
    });

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    }
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }
    useEffect(() => {
        fetchPosts();
    }, [page]);
    const changePage = (page) => {
        setPage(page);
        // fetchPosts()
    }


    return (
        <div className="App">
            <MyButton style={{ marginTop: '25px' }} onClick={() => { setModal(true) }}>Создать пост</MyButton>
            <MyModal visible={modal} setVisible={setModal}><PostForm create={createPost} /></MyModal>
            <hr style={{ margin: '15px 0' }} />
            <PostFilter filter={filter} setFilter={setFilter} />
            {postError && <h1>Произошла ошибка ${postError}</h1>}
            {isPostsLoading
                ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}><Loader /></div> :
                <PostList remove={removePost} posts={sortedAndSearchingPosts} titel='Список постов titel 1' />
            }
            <Pagination page={page} changePage={changePage} totalPages={totalPages} />
        </div >
    );
}

export default Posts;
