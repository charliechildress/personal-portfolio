import { motion } from 'framer-motion';

import TitleLine from '../components/TitleLine';
import { textVariant, slideInLeft } from "../animations";
import { SectionWrapper } from "../wrapper";

import ProjectCards from "../components/ProjectCards";

const Projects = () => {
	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
		>
			<section className="flex flex-col relative min-h-screen">
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={textVariant}
					className="flex-none w-full"
				>
					<motion.div
						variants={textVariant}
						className="pt-[180px] font-neon text-neon-red text-shadow-neon hover:animate-flicker xs:text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-9xl tracking-tight"
					>
						<h1>Projects</h1>
						<TitleLine />
					</motion.div>
				</motion.div>
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={slideInLeft}
					className="flex-0 w-1/2 sm:w-full xs:w-full"
				>
					<h2 className="flex-0 mt-[-55px] 2xl:mt-[-80px] xl:mt-[-70px] md:mt-[-70px] sm:mt-[-80px] xs:mt-[-80px]  3xl:min-h-[60px] 2xl:min-h-[60px] xl:min-h-[60px] lg:min-h-[40px] md:min-h-[40px] sm:min-h-[36px] xs:min-h-[28px] italic font-semibold text-dark-text text-2xl 3xl:text-6xl 2xl:text-6xl xl:text-6xl lg:text-4xl md:text-4xl sm:text-3xl xs:text-lg">
						Explore my projects!
					</h2>
				</motion.div>
				<div className="pr-40 sm:pr-10 mt-12 lg:mt-5 md:mt-5 sm:mt-5 xs:mt-5">
					<ProjectCards />
				</div>
			</section>
		</motion.div>
	);
};

export default SectionWrapper(Projects, 'projects');
