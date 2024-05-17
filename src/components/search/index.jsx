import styles from "./Search.module.scss";

function Search() {
    const categories = [
        "Поиск по номеру",
        "Поиск по марке",
        "Поиск по названию товара",
    ];

    return (
        <div className={styles.searh}>
            <ul>
                {categories.map((categoryName, index) => (
                    <li key={index}>{categoryName}</li>
                ))}
            </ul>
            <span>
                <input
                    className={styles.basic__slide}
                    id="search"
                    type="text"
                    // onChange={(event) => console.log(event.target.value)}
                    placeholder="Введите марку"
                />
                <label htmlFor="search">Поиск</label>
            </span>
        </div>
    );
}

export default Search;
