import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/app.scss';
const API = 'http://localhost:3000/initialState';
const App = () => {
  const initialState = useInitialState(API);
  return (
    <div className='App'>
      <Header />
      <Search />
      {initialState.mylist.length > 0 && (
        <Categories titulo='Mi Lista'>
          <Carousel>
            {
              initialState.mylist.map(item => 
                <CarouselItem key={item.id} {...item} />)
            }
          </Carousel>
        </Categories>
      )}
      <Categories titulo='Tendencias'>
        <Carousel>
          {initialState.trends.map(item => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
      <Categories titulo='Orginales de Platzi video'>
        <Carousel>
          {initialState.originals.map(item => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
      <Footer />
    </div>
  );
};
export default App;
