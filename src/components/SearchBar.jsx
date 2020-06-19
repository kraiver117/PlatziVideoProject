import React from 'react';
import '../assets/styles/searchBar.scss'

const SearchBar = () => {
    return (
        <div>
            <section className="main">
                <h2 className="main__title">¿Qué quieres ver hoy?</h2>
                <input type="text" className="input" placeholder="Buscar..."/>
            </section>
        </div>
    );
};

export default SearchBar;