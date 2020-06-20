/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/Carousel-item';
import Footer from '../components/footer';
import useInitialState from '../hooks/useInitialState';
import '../assets/app.scss';

const API = 'http://localhost:3000/initalState';

const app = () => {
    const initialState = useInitialState(API);

    return initialState.length === 0 ? <h1>Loading...</h1> :(
        <div className="App">
            <Header></Header>  

            <SearchBar></SearchBar>

            {initialState.mylist?.length > 0 && 
                <Categories title="Mi lista">
                    <Carousel >
                        {initialState.mylist?.map(item => 
                            <CarouselItem key={item.id} {...item}/>
                        )}
                    </Carousel>
                </Categories>
            }

            <Categories title="Tendencias">
                <Carousel >
                    {initialState.trends?.map(item =>
                         <CarouselItem key={item.id} {...item}/>
                    )}
                </Carousel>
            </Categories>

            <Categories title="Originales de Platzi video">
                <Carousel >
                {initialState.originals?.map(item => 
                            <CarouselItem key={item.id} {...item}/>
                        )}
                </Carousel>
            </Categories>

            <Footer></Footer>
        </div>
    );
};

export default app;