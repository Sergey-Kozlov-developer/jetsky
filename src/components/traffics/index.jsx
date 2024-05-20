// import styles from "./Traffics.module.scss";
// import { useState } from "react";
// import quadbike from "../../assets/img/categories/quadbike.png";
// import allterrain from "../../assets/img/categories/allterrain.png";
// import boat from "../../assets/img/categories/boat.png";
// import jetski from "../../assets/img/categories/jetski.png";
// import moto from "../../assets/img/categories/moto.png";
// import snowmobiles from "../../assets/img/categories/snowmobiles.png";

// function Traffics() {
//     // console.log(value);
//     // const [trafficsSearch, setTrafficsSearch] = useState("");
//     // const [selectedTechnic, setSelectedTechnic] = useState("");

//     const technics = [
//         { name: "Квадроциклы", img: quadbike },
//         { name: "Гидроциклы", img: jetski },
//         { name: "Катера", img: boat },
//         { name: "Снегоходы", img: snowmobiles },
//         { name: "Двигатели", img: moto },
//         { name: "Вездеходы", img: allterrain },
//     ];

//     return (
//         <>
//             <div className={styles.categories__wrapper}>
//                 {technics.map((technic, index) => (
//                     <div key={index} className={styles.categories}>
//                         <div className={styles.categories__text}>
//                             <span>{technic.name}</span>
//                             <button>Подробнее</button>
//                         </div>
//                         <img src={technic.img} alt="" />
//                     </div>
//                 ))}
//             </div>
//         </>
//     );
// }

// export default Traffics;
