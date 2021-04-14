import React, { useEffect, useState } from "react";
import { Field, reduxForm } from "redux-form";
import renderInput from "../Form/renderInput";
import Validate from "./Validate";
import renderSelect from "../Form/renderSelect";
import axios from "axios";
import { connect } from "react-redux";

const RenderMaRap = (props) => {
  console.log(props.maHeThongRap);
  const [heThongRap, setHeThongRap] = useState([]);
  const [danhSachRap, setDanhSachRap] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${props.maHeThongRap}`,
    })
      .then((result) => {
        console.log(result.data);
        setHeThongRap(result.data);
        setDanhSachRap([]);
        let newArr = danhSachRap.slice();
        result.data.map((item) => {
          newArr.push({ maCumRap: item.maCumRap, tenCumRap: item.tenCumRap });
        });
        setDanhSachRap(newArr);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, [props.maHeThongRap]);
  console.log(danhSachRap);
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
    axios({
      method: "get",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap`,
    })
      .then((result) => {
        // console.log(result.data);
        this.setState({
          theaterMovieList: result.data,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
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
        {this.state.theaterMovieList ? (
          <Field
            name="maHeThongRap"
            component={renderSelect}
            label="Hệ Thống Rạp"
            arrTheaterMovie={this.state.theaterMovieList}
          />
        ) : (
          ""
        )}
        {this.props.ShowtimeForm.values ? (
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
  };
};
export default reduxForm({
  form: "ShowtimeForm",
  validate: Validate,
  enableReinitialize: true,
})(connect(mapStateToProps)(ShowtimeForm));
