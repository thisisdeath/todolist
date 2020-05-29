import React, { useState } from 'react';
import ArticlesList from './ArticlesList';
import Form from './Form';
import './App/App.less';

export default function App() {

    const [articles, setArticles] = useState([]);

    function addArticle(newArticle) {
        const newArticles = articles.slice();
        newArticles.push(newArticle);
        setArticles(newArticles);
    }

    return (
        <div className='container'>
            <header className='header'>
                <h1 className='header__heading'>Редактор статей</h1>
                <Form createArticle={addArticle}/>
            </header>
            <main>
                <ArticlesList articles={articles}/>
            </main>
        </div>
    )
}