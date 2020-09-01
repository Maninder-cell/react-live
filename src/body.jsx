import React from "react";
import { useParams, useLocation, useHistory,NavLink } from "react-router-dom";

const Sec = ({ match }) => {
  var { name, id } = useParams();
  var x = useLocation();
  var y = useHistory();
  return (
    <>
      <h1>
        This is body man {name} {id} {x.pathname}
      </h1>
      <button onClick={() => y.goBack()}>Back</button>
    </>
  );
};

export default Sec;
