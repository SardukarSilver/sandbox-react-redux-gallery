import React from "react";
import { connect } from "react-redux"
import GalleryComponent from "./components/GalleryComponent/GalleryComponent";

import './App.css';

const picsumData = ({ photosList }) => {
  console.log(photosList)

  return (
    <div className="container-fluid ">
      <GalleryComponent photosList={photosList} />
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
)(picsumData);
