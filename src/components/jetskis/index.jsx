import styles from "./Jetskis.module.scss";

const JetskisCategories = () => {
    const categories = ["Полноприводные", "от 5000", "BRP", "еще"];

    return (
        <>
            <div>
                <h1>Гидроциклы</h1>
                <div className={styles.jetskis}>
                    <div>
                        <ul>
                            {categories.map((categoryName, index) => (
                                <li key={index}>{categoryName}</li>
                            ))}
                        </ul>
                    </div>
                    <select name="" id="">
                        <option value="all">Все</option>
                        <option value="motor">Двигатель</option>
                        <option value="price">Цена</option>
                    </select>
                </div>
            </div>
        </>
    );
};

export default JetskisCategories;
