import styles from "./Categories.module.scss";

function Categories() {
    const categories = [
        "Поиск по номеру",
        "Поиск по марке",
        "Поиск по названию товара",
    ];

    return (
        <div className={styles.categories}>
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
                    placeholder="Введите марку"
                />
                <label htmlFor="search">Поиск</label>
            </span>
        </div>
    );
}

export default Categories;
