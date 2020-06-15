import React from "react";
import { connect } from "react-redux";

function picsumData({ data }) {
  return (
    <div>
      <img src={data} alt="test"/>
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
