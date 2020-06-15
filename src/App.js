import React from "react";
import { connect } from "react-redux";

function picsumData({ photosList }) {
  console.log(photosList[0])
  let img = photosList.length > 0 ? photosList[0].download_url : null;
  
  return (
    <div>
      <img src={img} alt="test" />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    photosList: state.photosList
  };
};

export default connect(
  mapStateToProps,
  null
)(picsumData);
