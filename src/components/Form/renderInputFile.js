import renderError from "../Form/renderError";
const renderInputFile = ({ input, label, meta, type }) => {
  const className = meta.error && meta.touched ? "text-danger" : "";
  return (
    <div className="form-group">
      <label className={className}>{label}</label>
      <input
        type={type}
        className="form-control"
        {...input}
        autoComplete="off"
      />
      {renderError(meta)}
    </div>
  );
};
export default renderInputFile;
// renderFileInput = ({ input, type, meta }) => {
//   const { mimeType } = this.props;
//   return (
//     <div>
//       <input
//         name={input.name}
//         type={type}
//         accept={mimeType}
//         onChange={(event) => this.handleChange(event, input)}
//       />
//       {meta && meta.invalid && meta.error && (
//         <Message negative header="Error:" content={meta.error} />
//       )}
//     </div>
//   );
// };
