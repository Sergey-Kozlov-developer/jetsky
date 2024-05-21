import styles from "./Search.module.scss";
import PropTypes from "prop-types";

function Search({ searchValueTarget }) {
    return (
        <>
            <div className={styles.searh}>
                <span>
                    <input
                        className={styles.basic__slide}
                        id="search"
                        type="text"
                        placeholder="Введите марку"
                        onChange={searchValueTarget}
                    />
                    <label htmlFor="search">Поиск</label>
                </span>
            </div>
        </>
    );
}
Search.propTypes = {
    searchValueTarget: PropTypes.func,
};

export default Search;
