import React from "react";

const ShowtimeForm = () => {
  return (
    <form>
      <div className="form-group">
        <label>Mã Rạp</label>
        <input name="maRap" className="form-control" />
      </div>
      <div>
        <label>Lịch Chiếu</label>
        <input
          className="form-control"
          type="datetime-local"
          name="meeting-time"
          value="2020-04-12T19:30"
          min="2020-01-07T00:00"
          max="2021-12-14T00:00"
        />
      </div>
      <div className="form-group">
        <label>Giá Vé</label>
        <input name="giaVe" className="form-control" />
      </div>
    </form>
  );
};

export default ShowtimeForm;
