import React, { useState, useEffect } from 'react';
import { connect } from "react-redux"
import Gallery from "./components/Gallery/Gallery";
import Pagination from "./components/Pagination/Pagination";

import './App.css';

const App = ({ photosList }) => {
  const [filtered, setFiltered] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [imgPerPage, setImgPerPage] = useState(9);

  useEffect(() => {
    setFiltered(photosList);
  }, [photosList]);

  const handleChange = (e) => {
    let currentList = [];
    let newList = [];

    if (e.target.value !== "") {
      currentList = photosList;
      newList = currentList.filter(item => {
        const lc = item.author.toLowerCase();
        const filter = e.target.value.toLowerCase();
        return lc.includes(filter);
      });
    } else {
      newList = photosList;
    }

    setFiltered(newList);
  };

  console.log('photosList.lenght', photosList.length);


  const indexOfLastImg = currentPage * imgPerPage;
  const indexOfFirstImg = indexOfLastImg - imgPerPage;
  const currentImages = photosList.slice(indexOfFirstImg, indexOfLastImg);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="container-fluid ">
      <input type="text" className="input" onChange={handleChange} placeholder="Search..." />
      <Gallery photosList={currentImages} />
      <Pagination imgPerPage={imgPerPage} totalImgs={filtered.length} paginate={paginate} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    photosList: state.photosList
  };
};

export default connect(
  mapStateToProps,
  null
)(App);
