import renderError from "../Form/renderError";

const renderSelectInput = ({
  input,
  label,
  meta,
  arrTheaterMovie,
  defaultValue,
}) => {
  //   console.log(arrTheaterMovie);
  const className = meta.error && meta.touched ? "text-danger" : "";
  return (
    <div className="form-group">
      <label className={className}>{label}</label>
      <select className="form-select" {...input} defaultValue={defaultValue}>
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
