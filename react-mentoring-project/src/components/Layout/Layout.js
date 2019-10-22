import React, { Fragment } from "react";

const Layout = props => {
  return (
    <Fragment>
      <div>Layout</div>

      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
