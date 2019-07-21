import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const Navigation = ({ page, nextPage, prevPage, query }) => {
  const [isNextPage, setIsNextPage] = useState(true);
  const [isPrevPage, setIsPrevPage] = useState(false);

  useEffect(() => {
    const checkNextPageExist = async () => {
      await axios
        .get(
          `https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?i=${query}&p=${page +
            1}`
        )
        .then(res => {
          if (res.data.results.length > 0) {
            setIsNextPage(true);
          } else {
            setIsNextPage(false);
          }
        })
        .catch(err => {
          console.log(err.message);
        });
    };

    const checkPrevPageExist = async () => {
      if (page <= 1) {
        setIsPrevPage(false);
      } else {
        await axios
          .get(
            `https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?i=${query}&p=${page -
              1}`
          )
          .then(res => {
            if (res.data.results.length > 0) {
              setIsPrevPage(true);
            } else {
              setIsPrevPage(false);
            }
          })
          .catch(err => {
            console.log(err.message);
          });
      }
    };
    checkPrevPageExist();
    checkNextPageExist();
  }, [query, page]);

  const goToNextPage = () => {
    nextPage();
  };

  const goToPrevPage = () => {
    prevPage();
  };

  return (
    <div className='nav-wrapper'>
      <button
        className='btn btn-color btn-nav'
        onClick={goToPrevPage}
        disabled={!isPrevPage}
      >
        <i className='fas fa-arrow-left' /> Prev
      </button>
      <button
        className='btn btn-color btn-nav'
        onClick={goToNextPage}
        disabled={!isNextPage}
      >
        Next
        <i className='fas fa-arrow-right' />
      </button>
    </div>
  );
};

Navigation.propTypes = {
  page: PropTypes.number.isRequired,
  nextPage: PropTypes.func.isRequired,
  prevPage: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired
};

export default Navigation;
