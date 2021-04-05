import React from "react";

const RenderChangePage = (props) => {
  if (props.adminUser.loading) {
    return <div>Loading</div>;
  }
  let { userList } = props.adminUser;
  return (
    <div>
      <nav aria-label="Page navigation">
        <ul className="pagination col-3  mx-auto">
          <li className="page-item">
            <button
              className="page-link"
              onClick={() => props.handlePage(userList.currentPage - 2)}
              disabled={userList.currentPage < 3 ? true : false}
            >
              <span aria-hidden="true">&laquo;</span>
            </button>
          </li>
          {userList.currentPage > 1 ? (
            <li className="page-item">
              <button
                className="page-link"
                onClick={() => props.handlePage(userList.currentPage - 1)}
              >
                {userList.currentPage - 1}
              </button>
            </li>
          ) : (
            ""
          )}
          <li className="page-item">
            <button
              className="page-link text-danger"
              onClick={() => props.handlePage(userList.currentPage)}
            >
              <b>{userList.currentPage}</b>
            </button>
          </li>
          <li className="page-item">
            <button
              className="page-link"
              onClick={() => props.handlePage(userList.currentPage + 1)}
            >
              {userList.currentPage + 1}
            </button>
          </li>
          <li className="page-item">
            <button
              className="page-link"
              onClick={() => props.handlePage(userList.currentPage + 2)}
            >
              <span aria-hidden="true">&raquo;</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default RenderChangePage;
