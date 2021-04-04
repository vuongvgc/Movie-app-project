import renderError from "../Form/renderError";
const renderInput = ({ input, label, meta, isUpdate, placeholder }) => {
  const className = meta.error && meta.touched ? "text-danger" : "";
  return (
    <div className="form-group">
      <label className={className}>{label}</label>
      <input
        className="form-control"
        {...input}
        autoComplete="off"
        disabled={isUpdate}
        placeholder={placeholder}
      />
      {renderError(meta)}
    </div>
  );
};
export default renderInput;
