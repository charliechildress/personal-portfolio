import { skills } from "../constants";
import { Tilt } from "react-tilt";
import React from "react";

const SkillsCard = () => {
	const getCircle = (skill) => {
		let alt = 5 - skill.rating;
		return (
			<span className="flex">
				{[...Array(skill.rating)].map(
					(num, i) =>
						i <= skill.rating && (
							<div className="bg-white rounded-full h-2 w-2 m-1"></div>
						)
				)}
				{[...Array(alt)].map(
					(num, i) =>
						i <= alt && (
							<div className="border-white border-2 rounded-full h-2 w-2 m-1"></div>
						)
				)}
			</span>
		);
	};
	return (
		<div className="flex flex-row flex-wrap mt-10">
			{skills.map((tool) => {
				return (
					<Tilt
						options={{
							max: 15,
							speed: 20,
							scale: 1.05,
						}}
						className="icon flex flex-col group w-1/6 bg-[#000080] border-2 rounded-lg border-white m-2 h-60 font-semibold text-white"
					>
						<p className="m-4 text-center">{tool.name}</p>
						{typeof tool.icon === "string" && (
							<i
								className={tool.icon}
								style={{ fontSize: "75px", alignSelf: "center" }}
							/>
						)}
						{typeof tool.icon !== "string" && (
							<div className="self-center pb-3">
								<div className="icon-container fill-white group-hover:fill-neon-text">
									{tool.icon}
								</div>
							</div>
						)}
						<div className="pt-10 text-center">
							<div className="flex justify-center">
								<div className="invisible group-hover:visible">
									<p>{tool.years}</p>
								</div>
							</div>
							<div className="flex flex-row -mt-5 justify-center group-hover:hidden">
								{getCircle(tool)}
							</div>
						</div>
					</Tilt>
				);
			})}
		</div>
	);
};

export default SkillsCard;
