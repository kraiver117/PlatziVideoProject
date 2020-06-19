import React from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import '../assets/styles/app.scss';



const app = () => {
    return (
        <div className="App">
            <Header></Header>  
            <SearchBar></SearchBar>
        </div>
    );
};

export default app;