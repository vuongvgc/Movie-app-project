import renderError from "../Form/renderError";
const renderSelectInput = ({ input, label, meta, value }) => {
  const className = meta.error && meta.touched ? "text-danger" : "";
  return (
    <div className="form-group">
      <label className={className}>{label}</label>
      <select class="form-select" {...input}>
        <option selected>Chọn loại người dùng</option>
        <option value="KhachHang">Khách hàng</option>
        <option value="QuanTri">Quản Trị</option>
      </select>
      {renderError(meta)}
    </div>
  );
};
export default renderSelectInput;
