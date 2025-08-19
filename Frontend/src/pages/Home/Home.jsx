import React, { useState } from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import AppDownload from '../../components/AppDownload/AppDownload';
import AboutBlock from '../../components/AboutBlock/AboutBlock';
import ReserveBlock from '../../components/ReserveBlock/ReserveBlock';

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category}/>
      <ReserveBlock/>
      <AboutBlock/>
      <AppDownload/>
    </div>
  );
}

export default Home;
