import CardComp from './card';
import './main.css';
import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Main() {
  let [items, setItems] = useState([]);
  let [meals, setMeals] = useState([]);

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   let searchedValue = event.target.search.value;
  //   let filteredItems = meals.filter(function (item) {
  //     return item.strMeal.toLowerCase().includes(searchedValue.toLowerCase());
  //   });
  //   setItems(filteredItems);
  // }

  async function getMealsData() {
    let response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=m");
    let data = await response.json();
    setMeals(data.meals);
    setItems(data.meals);
  }

  useEffect(function () {
    getMealsData();
  }, []);
  
  async function handleSubmit(event) {
    event.preventDefault();
    let searchedValue = event.target.search.value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchedValue}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

       if (data.meals) {
         let filteredValue = data.meals.filter(function (item) {
           return item.strMeal
             .toLowerCase()
             .includes(searchedValue.toLowerCase());
         });

         setItems(filteredValue);
       } else {
        setItems([]);
       }

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Form className="d-flex" onSubmit={handleSubmit} id="myform">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          name="search"
        />
        <Button variant="outline-success" type="submit">Search</Button>
      </Form>

      <div className="container">
        {items.length !== 0 ? items.map(function (item) {
          return (
            <CardComp
              image={item.strMealThumb}
              title={item.strMeal}
              description={item.strInstructions}
              category={item.strCategory}
            />
          );
        }) : <h3>No Search Results</h3>}
      </div>
    </>
  );
}

export default Main;


