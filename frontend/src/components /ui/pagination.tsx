import ReactPaginate from "react-paginate";

// prop type
type IProps = {
  pageCount: number;
  handlePageClick: (event: { selected: number }) => void;
};

export default function Pagination({ handlePageClick, pageCount }: IProps) {
  return (
    <nav>
      <ReactPaginate
        breakLabel="..."
        activeClassName="active"
        nextLabel={<i className="fa-sharp fa-regular fa-arrow-right"></i>}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel={<i className="fa-sharp fa-regular fa-arrow-left"></i>}
        renderOnZeroPageCount={null}
      />
    </nav>
  );
}
