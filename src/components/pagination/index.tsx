import ReactPaginate from "react-paginate";
import React from "react";

type PaginationProps = {
	currentPage: number;
	onChangePage: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
	currentPage,
	onChangePage,
}) => {
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

export default Pagination;
