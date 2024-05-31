import PropTypes from "prop-types";

function Traffics({ filteredTraffics }) {
	return (
		<>
			<div className="mx-auto grid grid-cols-3 gap-5">
				{filteredTraffics.map((technic) => (
					<div
						key={technic.id}
						className="g-5 flex h-[129px] w-[370px] cursor-pointer items-center border border-solid border-zinc-400"
					>
						<div className="flex flex-col gap-12">
							<a
								className="pl-5 pt-5 text-xl font-bold"
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
