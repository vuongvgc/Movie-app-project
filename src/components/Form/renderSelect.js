import renderError from "../Form/renderError";

const renderSelectInput = ({ input, label, meta, arrTheaterMovie }) => {
  //   console.log(arrTheaterMovie);
  const className = meta.error && meta.touched ? "text-danger" : "";
  return (
    <div className="form-group">
      <label className={className}>{label}</label>
      <select
        className="form-select"
        {...input}
        defaultValue={arrTheaterMovie[0].maHeThongRap}
      >
        {arrTheaterMovie.map((theater) => {
          return (
            <option value={theater.maHeThongRap}>
              {theater.tenHeThongRap}
            </option>
          );
        })}
      </select>
      {renderError(meta)}
    </div>
  );
};
export default renderSelectInput;
