import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { ArticleDescription } from '../components/articles/ArticleDescription';
import { ArticlesItems } from '../components/articles/ArticlesItems';
import { CreateArticle } from '../components/articles/CreateArticle';

export function Articles(props) {
    

    return (
        <>
            <Routes>
                <Route path="" element={<ArticlesItems />} />
                <Route path="about" element={<ArticleDescription />} />
                <Route path="create" element={<CreateArticle />} />
            </Routes>
            
        </>
    )
}
