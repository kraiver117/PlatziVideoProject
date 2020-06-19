import React from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/Carousel-item';
import Footer from '../components/footer';

import '../assets/styles/app.scss';



const app = () => {
    return (
        <div className="App">
            <Header></Header>  

            <SearchBar></SearchBar>

            <Categories title="Mi lista">
                <Carousel >
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                </Carousel>
            </Categories>
            
            <Categories title="Tendencias">
                <Carousel >
                    <CarouselItem/>
                    <CarouselItem/>
                </Carousel>
            </Categories>

            <Categories title="Originales de Platzi video">
                <Carousel >
                    <CarouselItem/>
                </Carousel>
            </Categories>

            <Footer></Footer>
        </div>
    );
};

export default app;