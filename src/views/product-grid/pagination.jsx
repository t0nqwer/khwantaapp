import React, { useEffect } from "react";
import { Pagination } from "flowbite-react";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../actions/product";

const pagination = ({ page }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (page) dispatch(getProduct(page));
  }, [page]);
  console.log(page);
  return (
    <div>
      <Pagination currentPage={1} totalPages={100} />
    </div>
  );
};

export default pagination;
