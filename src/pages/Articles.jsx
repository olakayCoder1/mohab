import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { ArticleDescription } from '../components/articles/ArticleDescription';
// import { ArticlesList } from '../components/articles/ArticlesList';


export function Articles(props) {
    

    return (
        <>
            <Routes>
                {/* <Route path="" element={<ArticlesList />} /> */}
                <Route path="" element={<ArticleDescription />} />
            </Routes>
            
        </>
    )
}
