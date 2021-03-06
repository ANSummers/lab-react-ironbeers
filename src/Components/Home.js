import React from 'react'
import CardHome from './CardHome'
import beers from "../Components/images/beers.jpg"
import newBeer from "../Components/images/newBeer.jpg"
import random from "../Components/images/RandomBeer.jpg"


function Home() {
    return (
        <div className="home">
        <CardHome image={beers} title="All Beers" to="/beers"/>
        <CardHome image={random} title="Random Beer" to="/random-beer"/>
        <CardHome image={newBeer} title="New Beer" to="/new-beer"/>
        </div>
    )
}

export default Home 