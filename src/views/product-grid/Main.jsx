import {
  Lucide,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownContent,
  DropdownItem,
  Modal,
  ModalBody,
} from "@/base-components";
import { Link, useNavigate, useLocation } from "react-router-dom";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Product from "./Product";
import Paginate from "./pagination";
import { getProductBysearch } from "../../actions/product";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Main({ setCurrentId }) {
  const product = useSelector((state) => state.product);
  const [deleteConfirmationModal, setDeleteConfirmationModal] = useState(false);
  const qurey = useQuery();
  const navigate = useNavigate();
  const page = qurey.get("page") || 1;
  const searchQuery = qurey.get("searchQuery");
  const dispatch = useDispatch();

  console.log(page);
  const [searchBar, setSearchBar] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const searchfunc = (e) => {
    console.log(searchBar);
    setSearchTerm(searchBar);
    dispatch(getProductBysearch({ searchBar }));
    navigate(`/product/search?searchQuery=${searchBar || "none"}`);
  };
  const searchKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchfunc();
    }
  };
  // useEffect(() => {
  //   if (searchTerm !== "") {
  //     dispatch(getProductBysearch({ searchTerm }));

  //   }
  // }, [searchTerm]);

  return (
    <>
      <h2 className="intro-y text-lg font-medium mt-10">Product Grid</h2>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2">
          <Link to="/add-product">
            <button className="btn btn-primary shadow-md mr-2">เพิ่มสินค้า</button>
          </Link>
          <Dropdown>
            <DropdownToggle className="btn px-2 box">
              <span className="w-5 h-5 flex items-center justify-center">
                <Lucide icon="Plus" className="w-4 h-4" />
              </span>
            </DropdownToggle>
            <DropdownMenu className="w-40">
              <DropdownContent>
                <DropdownItem>
                  <Lucide icon="Printer" className="w-4 h-4 mr-2" /> Print
                </DropdownItem>
                <DropdownItem>
                  <Lucide icon="FileText" className="w-4 h-4 mr-2" /> Export to Excel
                </DropdownItem>
                <DropdownItem>
                  <Lucide icon="FileText" className="w-4 h-4 mr-2" /> Export to PDF
                </DropdownItem>
              </DropdownContent>
            </DropdownMenu>
          </Dropdown>
          <div className="hidden md:block mx-auto text-slate-500">Showing 1 to 10 of 150 entries</div>
          <div className="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0">
            <div className="w-56 relative text-slate-500">
              <input
                type="text"
                id="searchbar"
                className="form-control w-56 box pr-10"
                placeholder="Search..."
                onKeyDown={searchKeyPress}
                value={searchBar}
                onChange={(e) => setSearchBar(e.target.value)}
              />
              <Lucide icon="Search" className="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0" />
            </div>
          </div>
        </div>
        {searchTerm === "" ? (
          ""
        ) : (
          <div className="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2">ผลการค้นหา "{searchTerm}"</div>
        )}

        {product.map((product) => (
          <div key={product.id} className="intro-y col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
            <Product product={product} setCurrentId={setCurrentId} />
          </div>
        ))}

        {/* END: Users Layout */}
        {/* BEGIN: Pagination */}
        <div className="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-nowrap items-center">
          <Paginate page={page} />
          <nav className="w-full sm:w-auto sm:mr-auto">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#">
                  <Lucide icon="ChevronsLeft" className="w-4 h-4" />
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  <Lucide icon="ChevronLeft" className="w-4 h-4" />
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  ...
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  ...
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  <Lucide icon="ChevronRight" className="w-4 h-4" />
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  <Lucide icon="ChevronsRight" className="w-4 h-4" />
                </a>
              </li>
            </ul>
          </nav>
          <select className="w-20 form-select box mt-3 sm:mt-0">
            <option>10</option>
            <option>25</option>
            <option>35</option>
            <option>50</option>
          </select>
        </div>
        {/* END: Pagination */}
      </div>
      {/* BEGIN: Delete Confirmation Modal */}
      <Modal
        show={deleteConfirmationModal}
        onHidden={() => {
          setDeleteConfirmationModal(false);
        }}
      >
        <ModalBody className="p-0">
          <div className="p-5 text-center">
            <Lucide icon="XCircle" className="w-16 h-16 text-danger mx-auto mt-3" />
            <div className="text-3xl mt-5">Are you sure?</div>
            <div className="text-slate-500 mt-2">
              Do you really want to delete these records? <br />
              This process cannot be undone.
            </div>
          </div>
          <div className="px-5 pb-8 text-center">
            <button
              type="button"
              onClick={() => {
                setDeleteConfirmationModal(false);
              }}
              className="btn btn-outline-secondary w-24 mr-1"
            >
              Cancel
            </button>
            <button type="button" className="btn btn-danger w-24">
              Delete
            </button>
          </div>
        </ModalBody>
      </Modal>
      {/* END: Delete Confirmation Modal */}
    </>
  );
}

export default Main;
