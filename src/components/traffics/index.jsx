import styles from "./Traffics.module.scss";
import PropTypes from "prop-types";

function Traffics({ filteredTraffics }) {
    return (
        <>
            <div className={styles.categories__wrapper}>
                {filteredTraffics.map((technic, index) => (
                    <div key={index} className={styles.categories}>
                        <div className={styles.categories__text}>
                            <span>{technic.name}</span>
                            <button>Подробнее</button>
                        </div>
                        <img src={technic.img} alt="" />
                    </div>
                ))}
            </div>
        </>
    );
}

Traffics.propTypes = {
    filteredTraffics: PropTypes.string,
};

export default Traffics;
