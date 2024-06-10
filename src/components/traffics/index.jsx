import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Traffics({ filteredTraffics }) {
	return (
		<>
			<div className="mx-auto grid gap-5 sm:grid-cols-1 sm:pl-5 md:grid-cols-3 md:pl-0">
				{filteredTraffics.map((technic) => (
					<div
						key={technic.id}
						className="g-5 flex h-[129px] cursor-pointer items-center border border-solid border-zinc-400 sm:w-[320px] md:w-[370px]"
					>
						<div className="flex flex-col gap-12">
							<Link
								className={
									technic.name === "Гидроциклы"
										? "pl-5 pt-5 text-xl font-bold text-red-400"
										: "pl-5 pt-5 text-xl font-bold"
								}
								to={technic.id == 2 ? "/jetskis" : "/"}
							>
								{technic.name}
							</Link>
							<button className="pl-5 text-start text-slate-300">
								Подробнее
							</button>
						</div>
						<img src={technic.img} className="pr-9 pt-5" alt="" />
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
