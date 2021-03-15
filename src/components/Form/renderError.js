const renderError = ({ error, touched }) => {
  if (error && touched) {
    return <div className="alert alert-danger">{error}</div>;
  }
};
export default renderError;
