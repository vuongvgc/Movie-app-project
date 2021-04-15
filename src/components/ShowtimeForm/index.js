import React, { useEffect, useState } from "react";
import { Field, reduxForm } from "redux-form";
import renderInput from "../Form/renderInput";
import Validate from "./Validate";
import renderSelect from "../Form/renderSelect";
import axios from "axios";
import { connect } from "react-redux";
import {
  getMovieTheaterSystemList,
  getMovieTheaterZoneList,
} from "../../actions/AdminShowtime";

const RenderMaRap = (props) => {
  useEffect(() => {
    this.props.getMovieTheaterZoneList(props.maHeThongRap);
  }, [props.maHeThongRap]);
  // console.log(this.props.movieTheaterZone);
  return <div></div>;
};
class ShowtimeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theaterMovieList: null,
      theaterZone: null,
    };
  }

  onSubmit = (formValue) => {
    this.props.onSubmit(formValue);
  };
  componentDidMount() {
    this.props.getMovieTheaterSystemList();
  }
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field
          name="maPhim"
          component={renderInput}
          label="Mã Phim"
          isUpdate={{ disabled: true }}
        />
        {!this.props.movieTheaterSystem.loading ? (
          <Field
            name="maHeThongRap"
            component={renderSelect}
            label="Hệ Thống Rạp"
            arrTheaterMovie={this.props.movieTheaterSystem.theaterSystemList}
          />
        ) : (
          ""
        )}
        {!this.props.movieTheaterSystem.loading ? (
          <RenderMaRap
            maHeThongRap={this.props.ShowtimeForm.values.maHeThongRap}
          />
        ) : (
          ""
        )}
      </form>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ShowtimeForm: state.form.ShowtimeForm,
    movieTheaterSystem: state.adminShowtime.movieTheaterSystem,
    movieTheaterZone: state.adminShowtime.movieTheaterZone,
  };
};
export default reduxForm({
  form: "ShowtimeForm",
  validate: Validate,
  enableReinitialize: true,
})(
  connect(mapStateToProps, {
    getMovieTheaterZoneList,
    getMovieTheaterSystemList,
  })(ShowtimeForm)
);
