import { useSearch } from "../../store/useBack";
// import styles from "./Search.module.scss";
import PropTypes from "prop-types";

function Search() {
	const searchValueTarget = useSearch((state) => state.searchValueTarget);

	return (
		<>
			<div>
				{/* <span>
                    <input
                        className={styles.basic__slide}
                        id="search"
                        type="text"
                        placeholder="Введите марку"
                        onChange={searchValueTarget}
                    />
                    <label htmlFor="search">Поиск</label>
                </span> */}
				<form className="mb-7 mt-7 flex w-full items-center">
					<label htmlFor="simple-search" className="sr-only">
						Search
					</label>
					<div className="relative w-full">
						<div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
							<svg
								className="h-4 w-4 text-gray-500 dark:text-gray-400"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 18 20"
							>
								<path
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
								/>
							</svg>
						</div>
						<input
							onChange={searchValueTarget}
							type="text"
							id="simple-search"
							className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
							placeholder="Search branch name..."
							required
						/>
					</div>
					<button
						type="submit"
						className="ms-2 rounded-lg border border-blue-700 bg-blue-700 p-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						<svg
							className="h-4 w-4"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 20 20"
						>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
							/>
						</svg>
						<span className="sr-only">Search</span>
					</button>
				</form>
			</div>
		</>
	);
}
Search.propTypes = {
	searchValueTarget: PropTypes.func,
};

export default Search;
