import Equipment from '../components/Equipment';
import React from "react";
import Trainers from '../components/Trainers';
import Videos from '../components/Videos';
import Intro from './Intro';
import ProductsTopRated from './ProductsTopRated';
import HorizontalScroll from "../components/HorizontalScroll";


export default function Home() {
  return (
    <div>
    {/* Hero Section */}

    <HorizontalScroll/>

        {/* Intro Section */}

    <Intro/>

    {/* Gym Equipment Showcase */}
 
    <Equipment/>

    {/* Gym Trainers */}
    
    <Trainers/>

    {/* Videos Section */}
    <Videos/>
    {/* top rated products */}
    <ProductsTopRated/>

    </div>
  );
}