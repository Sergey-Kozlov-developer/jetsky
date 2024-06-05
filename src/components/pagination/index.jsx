import ReactPaginate from "react-paginate";

const Pagination = ({ onChangePage }) => {
	return (
		<>
			{/* <Items currentItems={currentItems} /> */}
			<ReactPaginate
				className="pagination mb-5 mt-5"
				breakLabel="..."
				nextLabel=">"
				previousLabel="<"
				onPageChange={(event) => onChangePage(event.selected + 1)}
				pageRangeDisplayed={6}
				pageCount={3}
				renderOnZeroPageCount={null}
			/>
		</>
	);
};

export default Pagination;
