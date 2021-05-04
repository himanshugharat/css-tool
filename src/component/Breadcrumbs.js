import React from "react";
import { Link } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
function Breadcrumbs() {
  const breadcrumbs = useBreadcrumbs();
  return (
    <React.Fragment>
      <Link to="/">Back to Home</Link>
    </React.Fragment>
  );
}

export default Breadcrumbs;
