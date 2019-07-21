import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/layout/Header/Header";
import Search from "./components/layout/Search/Search";
import Recipe from "./components/layout/Recipe/Recipe";
import Navigation from "./components/layout/Navigation/Navigation";
import Alert from "./components/layout/Alert/Alert";
import "./App.scss";
import axios from "axios";

const App = () => {
  const deafultOptions = [
    { key: "tomato", text: "tomato", value: "tomato" },
    { key: "garlic", text: "garlic", value: "garlic" },
    { key: "chicken", text: "chicken", value: "chicken" },
    { key: "apple", text: "apple", value: "apple" },
    { key: "cheese", text: "cheese", value: "cheese" },
    { key: "potato", text: "potato", value: "potato" }
  ];

  const [recipes, setRecipes] = useState([]);
  const [currentIngredients, setCurrentIngredients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [options, setoptions] = useState(deafultOptions);
  const [query, setQuery] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await axios
        .get(
          `https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?i=${query}&p=${page}`
        )
        .then(res => {
          setRecipes(res.data.results);
          if (res.data.results.length < 1) {
            setError("Results not found");
          }
          setLoading(false);
        })
        .catch(err => {
          setLoading(false);
          setError("Sorry, something went wrong. Please try again !");
          console.log(err.message);
        });
    };
    if (query !== null) fetchData();
  }, [query, page]);

  const initSearch = () => {
    clearErrors();
    if (currentIngredients.length < 1) {
      setError("Please pick some ingridiens");
      setRecipes([]);
    } else {
      setPage(1);
      setQuery(gueryBuilder());
    }
  };

  const gueryBuilder = () => {
    let query = "";
    for (let i = 0; i < currentIngredients.length; i++) {
      if (i === currentIngredients.length - 1) {
        query += currentIngredients[i];
      } else {
        query += currentIngredients[i] + ",";
      }
    }
    return query;
  };

  const nextPage = () => {
    setPage(prevState => prevState + 1);
  };

  const prevPage = () => {
    setPage(prevState => prevState - 1);
  };

  const handleChange = (e, { value }) => {
    setCurrentIngredients(value);
  };

  const handleAddition = (e, { value }) => {
    setoptions([{ key: value, text: value, value }, ...options]);
  };

  const handleAdditionTag = e => {
    const optionToAdd = e.currentTarget.getAttribute("data-tag");
    if (!currentIngredients.includes(optionToAdd)) {
      setCurrentIngredients([...currentIngredients, optionToAdd]);
      if (!options.some(item => item.value === optionToAdd)) {
        setoptions([
          { key: optionToAdd, value: optionToAdd, text: optionToAdd },
          ...options
        ]);
      }
    }
  };

  const clearErrors = () => {
    setError(null);
  };

  return (
    <Fragment>
      <Header />
      <Search
        currentIngredients={currentIngredients}
        options={options}
        handleAddition={handleAddition}
        handleChange={handleChange}
        initSearch={initSearch}
        loading={loading}
      />
      <div className='container'>{error && <Alert error={error} />}</div>
      {!error && recipes.length > 0 && (
        <div className='container'>
          <Recipe recipes={recipes} handleAdditionTag={handleAdditionTag} />
          <Navigation
            setError={setError}
            currentIngredients={currentIngredients}
            nextPage={nextPage}
            prevPage={prevPage}
            page={page}
            query={query}
          />
        </div>
      )}
    </Fragment>
  );
};

export default App;
