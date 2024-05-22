import styles from "./Traffics.module.scss";
import PropTypes from "prop-types";

function Traffics({ filteredTraffics }) {
    return (
        <>
            <div className={styles.traffics__wrapper}>
                {filteredTraffics.map((technic) => (
                    <div key={technic.id} className={styles.traffics}>
                        <div className={styles.traffics__text}>
                            <a
                                href={
                                    technic.id == 1
                                        ? "/allterrain"
                                        : "/" && technic.id == 2
                                          ? "/jetskis"
                                          : "/" && technic.id == 3
                                            ? "/boats"
                                            : "/" && technic.id == 4
                                              ? "/snowmobiles"
                                              : "/" && technic.id == 5
                                                ? "/quadbike"
                                                : "/" && technic.id == 6
                                                  ? "/engines"
                                                  : "/"
                                }
                            >
                                {technic.name}
                            </a>
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
    filteredTraffics: PropTypes.array,
};

export default Traffics;
