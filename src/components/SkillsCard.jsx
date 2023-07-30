import { skills } from "../constants";
import { Tilt } from "react-tilt";
import React from "react";

const SkillsCard = () => {
	return (
		<div className="flex flex-row flex-wrap mt-10">
			{skills.map((skill) => {
				return (
					<Tilt
						options={{
							max: 15,
							speed: 20,
							scale: 1.05,
						}}
						className="icon flex flex-col group w-1/6 bg-[#000080] border-2 rounded-lg border-white m-2 h-60 font-semibold text-white"
					>
						<p className="m-4 text-center">{skill.name}</p>
						<i
							className={skill.icon}
							style={{ fontSize: "75px", alignSelf: "center" }}
						/>
						<div className="flex flex-row m-2 pt-10 text-center">
							<div className="invisible group-hover:visible">
								<p>{skill.years}</p>
							</div>

							<div className="bg-white rounded-full h-2 w-2 m-1 group-hover:invisible"></div>
							<div className="bg-white rounded-full h-2 w-2 m-1 group-hover:invisible"></div>
							<div className="bg-white rounded-full h-2 w-2 m-1 group-hover:invisible"></div>
							<div className="bg-white rounded-full h-2 w-2 m-1 group-hover:invisible"></div>
							<div className="border-white border-2 rounded-full h-2 w-2 m-1 group-hover:invisible"></div>
						</div>
					</Tilt>
				);
			})}
		</div>
	);
};

export default SkillsCard;
