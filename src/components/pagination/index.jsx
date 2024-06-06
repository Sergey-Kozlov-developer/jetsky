import ReactPaginate from "react-paginate";
import PropTypes from "prop-types";

const Pagination = ({ currentPage, onChangePage }) => {
	return (
		<>
			<ReactPaginate
				className="pagination mb-5 mt-5"
				breakLabel="..."
				nextLabel=">"
				previousLabel="<"
				onPageChange={(event) => onChangePage(event.selected + 1)}
				pageRangeDisplayed={3}
				pageCount={4}
				forcePage={currentPage - 1}
				renderOnZeroPageCount={null}
			/>
		</>
	);
};

Pagination.propTypes = {
	currentPage: PropTypes.number,
	onChangePage: PropTypes.func,
};

export default Pagination;
