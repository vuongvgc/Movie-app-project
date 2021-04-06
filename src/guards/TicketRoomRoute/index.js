import React from "react";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";

function TicketRoomRoute(props) {
  const { component: Component, currentUser, ...routerProps } = props;

  return (
    <Route
      {...routerProps}
      render={(props) => {
     
        if (currentUser) {
     
          return <Component {...props} />;
        }
  
        return <Redirect to="/login" />;
      }}
    />
  );
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.authReducers.currentUser,
  };
};

export default connect(mapStateToProps)(TicketRoomRoute);
