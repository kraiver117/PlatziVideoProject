import React from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/Carousel-item';
import '../assets/styles/app.scss';



const app = () => {
    return (
        <div className="App">
            <Header></Header>  
            <SearchBar></SearchBar>
            <Categories>
                <Carousel >
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                </Carousel>
            </Categories>
        </div>
    );
};

export default app;