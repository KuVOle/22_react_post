import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../styles/app.css';
import About from '../pages/About';
import Posts from '../pages/Posts';
import Navbar from '../components/UI/Navbar/Navbar';
import Not_found from '../pages/Not_found';
import PostIdPage from "../pages/PostIdPage";

const AppRouter = () => {

    return (<BrowserRouter>
        <Navbar />
        <Routes>

            <Route path="/about" element={<About />} />
            <Route exact path='/posts' element={<Posts />} />
            <Route exact path='/posts/:id' element={<PostIdPage />} />
            <Route path='*' element={<Not_found />} />

        </Routes>
    </BrowserRouter>)
}

export default AppRouter;