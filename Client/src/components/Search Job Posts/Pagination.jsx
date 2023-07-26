import React from "react";
import { Pagination, PaginationItem } from "@mui/material";
import { Link } from "react-router-dom";

function Paginate() {
  return (
    <Pagination
      count={5}
      page={1}
      variant="outlined"
      color="primary"
      renderItem={(item) => (
        <PaginationItem {...item} component={Link} to={`/jobs?page=${1}`} />
      )}
    />
  );
}

export default Paginate();
