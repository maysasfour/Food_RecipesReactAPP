import CardComp from './card';
// import data from './data.json';
import {useEffect,useState } from 'react';
import Form from "react-bootstrap/Form";
import './main.css';
// import './browse.css';

function Browse() {
    
    // let [selectedCategory, setSelectedCategory] = useState('All');

    // function changeCategory(event){
    //     setSelectedCategory(event.target.value);
    // }

    // let filteredRecipes = data;
    // if (selectedCategory !== 'All') {
    //     filteredRecipes = data.filter(function (item) {
    //         return item.category === selectedCategory;
    //     });
    // }
    // async function getMealsData() {
    //     let response = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list");
    //     let data = await response.json();
    //     setMeals(data.meals);
    //     setItems(data.meals);
    //   }
    const [items, setItems] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");  //this the default state or when the page load
  
    async function getData(category) {
      // default state
      const url =
        category === "All"
          ? "https://www.themealdb.com/api/json/v1/1/search.php?f=c"
          : `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
  
      try {
        const response = await fetch(url);
        const result = await response.json();
        setItems(result.meals || []);
      } catch (error) {
        console.error(error);
      }
    }
  
    async function fetchCategories() {
      const categoryUrl =
        "https://www.themealdb.com/api/json/v1/1/list.php?c=list"; //endpoint to get the all category
      try {
        const response = await fetch(categoryUrl);
        const data = await response.json();
        setCategories([...data.meals.map((item) => item.strCategory)]);
      } catch (error) {
        console.error(error);
      }
    }
  
    useEffect(() => {
      fetchCategories();
    }, []);
  
    useEffect(() => {
      getData(selectedCategory);
    }, [selectedCategory]);
  
    const handleChange = (event) => {
      setSelectedCategory(event.target.value);
    };
    return (
        <>
         <Form.Select aria-label="Default select example" onChange={handleChange}   value={selectedCategory}>
         
      
            <option value="All">All</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
         
        
            </Form.Select>
            <div className="container">
    {items.length !== 0 ?items.map(function(item){
            return(
              <>
                        <CardComp image={item.strMealThumb} title={item.strMeal}/>
                        </>
            )
        }):<h3>No results</h3>}
        </div>
        </>
    )
}

 export default Browse;


// import React, { useEffect, useState } from "react";
// import CardComp from "./card";
// import Form from "react-bootstrap/Form";

// function Browse() {
//   const [items, setItems] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("All");  //this the default state or when the page load

//   async function getData(category) {
//     // default state
//     const url =
//       category === "All"
//         ? "https://www.themealdb.com/api/json/v1/1/search.php?f=c"
//         : `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;

//     try {
//       const response = await fetch(url);
//       const result = await response.json();
//       setItems(result.meals || []);
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   async function fetchCategories() {
//     const categoryUrl =
//       "https://www.themealdb.com/api/json/v1/1/list.php?c=list"; //endpoint to get the all category
//     try {
//       const response = await fetch(categoryUrl);
//       const data = await response.json();
//       setCategories([...data.meals.map((item) => item.strCategory)]);
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   useEffect(() => {
//     getData(selectedCategory);
//   }, [selectedCategory]);

//   const handleChange = (event) => {
//     setSelectedCategory(event.target.value);
//   };

//   return (
//     <div>
//       <Form style={{ width: "50%", margin: "2rem 0 1rem 1rem" }}>
//         <Form.Group controlId="categoryFilter">
//           <Form.Label style={{ fontWeight: "bold" }}>
//             Filter by Category:
//           </Form.Label>
//           <Form.Select
//             id="category"
//             value={selectedCategory}
//             onChange={handleChange}
//           >
//             <option value="All">All</option>
//             {categories.map((category, index) => (
//               <option key={index} value={category}>
//                 {category}
//               </option>
//             ))}
//           </Form.Select>
//         </Form.Group>
//       </Form>
//       <div>
//         <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", margin: "0 0 0 1rem" }}>
//           {items.map((item) => (
//             <CardComp
//               image={item.strMealThumb}
//               title={item.strMeal}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Browse;


