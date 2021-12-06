import React from 'react'
import "../css/Cars.css"
import Card from "../../Components/Card"

const Cars = () => {
    return (
        <div id="cars">
            <div id="cars-text">
                <h3>Check our</h3>
                <h1>CARS</h1>
            </div>
            <div id="cars-container">
            <Card title="Mercedes Benz C Class Coupe"
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non dui maximus, lobortis leo id, imperdiet odio. Sed porta massa non molestie tristique. Fusce vel posuere ligula. Sed at sodales odio. Vivamus dictum dictum erat at efficitur.'
                link="/"
            />
           <Card title="BMW Sedan Series 7"
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non dui maximus, lobortis leo id, imperdiet odio. Sed porta massa non molestie tristique. Fusce vel posuere ligula. Sed at sodales odio. Vivamus dictum dictum erat at efficitur.'
                link="/"
            />
            <Card title="Mercedes Benz A Class"
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non dui maximus, lobortis leo id, imperdiet odio. Sed porta massa non molestie tristique. Fusce vel posuere ligula. Sed at sodales odio. Vivamus dictum dictum erat at efficitur.'
                link="/"
            />
            <Card title="Lamborghini Aventador"
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non dui maximus, lobortis leo id, imperdiet odio. Sed porta massa non molestie tristique. Fusce vel posuere ligula. Sed at sodales odio. Vivamus dictum dictum erat at efficitur.'
                link="/"
            />
            <Card title="Audi RS Q8"
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non dui maximus, lobortis leo id, imperdiet odio. Sed porta massa non molestie tristique. Fusce vel posuere ligula. Sed at sodales odio. Vivamus dictum dictum erat at efficitur.'
                link="/"
            />
            <Card title="Porche 911"
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non dui maximus, lobortis leo id, imperdiet odio. Sed porta massa non molestie tristique. Fusce vel posuere ligula. Sed at sodales odio. Vivamus dictum dictum erat at efficitur.'
                link="/"
            />

            </div>
        </div>
    )
}

export default Cars
