import * as React from "react";

import { motion } from "framer-motion";
import { slideInLeft } from "../animations";

import { projects } from "../constants";
import VideoDemo from "./VideoDemo";

import GitHubIcon from "@mui/icons-material/GitHub";
import PersonalVideoIcon from "@mui/icons-material/PersonalVideo";

const ProjectCards = () => {
	return (
		<>
			{projects.map((project) => {
				return (
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={slideInLeft}
						className="flex pb-20"
					>
						<div className="flex flex-row relative pl-10  bg-card-bg w-full min-h-[250px] shadow-[20px_0px_100px_rgba(49,49,255,0.7)] border-4 rounded-lg border-card-border">
							<div className="flex-0 w-1/2 pt-7">
								<p className="text-4xl font-bold text-card-text">
									{project.projectName}
								</p>
								<p className="pt-5 text-xl font-bold text-card-text">
									{project.organization}
								</p>
								<p className="pt-4 text-md font-semibold text-card-text">
									{project.information}
								</p>
								<p className="flex flex-row flex-auto pt-8 text-card-text">
									{project.languages.map((language) => (
										<p
											className="text-card-text bg-red-500 rounded-md px-1 mr-2"
											key={language}
										>
											{language}{" "}
										</p>
									))}{" "}
									{project.code}
								</p>
								<div className="flex flex-row">
									<a
										href="https://github.com"
										target="_blank"
										rel="noopener noreferrer"
										aria-label="icon"
										className="mt-8 p-2 flex flex-row w-1/4 bg-red-500 rounded-md"
									>
										<GitHubIcon />
										<p className="text-card-text pl-2">Look at code</p>
									</a>
									<a
										href="https://google.com"
										target="_blank"
										rel="noopener noreferrer"
										aria-label="icon"
										className="mt-8 p-2 ml-8 flex flex-row w-1/4 bg-red-500 rounded-md"
									>
										<PersonalVideoIcon />
										<p className="text-card-text pl-2">Visit site</p>
									</a>
								</div>
							</div>
							<div className="flex-1 scale-[0.80]">
								<VideoDemo />
							</div>
						</div>
					</motion.div>
				);
			})}
		</>
	);
};

export default ProjectCards;
