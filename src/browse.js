import CardComp from './card';
import data from './data.json';
import { useState } from 'react';
import './main.css';
import './browse.css';
function Browse() {
    
    let [selectedCategory, setSelectedCategory] = useState('All');

    function changeCategory(event){
        setSelectedCategory(event.target.value);
    }

    let filteredRecipes = data;
    if (selectedCategory !== 'All') {
        filteredRecipes = data.filter(function (item) {
            return item.category === selectedCategory;
        });
    }
    
    return (
        <>
         
         <select id="select-category" onChange={changeCategory} value={selectedCategory}>
                <option value="All">All</option>
                <option value="Main Course">Main Course</option>
                <option value="Desserts">Dessert</option>
                <option value="Salads">Salads</option>
                <option value="Appetizers">Appetizers</option>
            </select>
        
        
            <div id="container">
                {filteredRecipes.map(function (item) {
                    return (
                        <CardComp image={item.image_url} title={item.title} description={item.description} />
                    )
                }) 
                }
            </div>

        </>
    );
}

export default Browse;
