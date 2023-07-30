import { motion } from 'framer-motion';

import TitleLine from '../components/TitleLine';
import { textVariant, slideInLeft, slideInRight } from "../animations";
import { SectionWrapper } from "../wrapper";

const Contact = () => {
	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
		>
			<section className="flex sm:flex-col relative  min-h-screen h-full">
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
						<h1>Contact</h1>
						<TitleLine />
					</motion.div>
					<div className="flex-0 flex sm:flex-col xs:flex-col relative w-full xl:pt-5 2xl:pt-5 sm:pr-10">
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							variants={slideInLeft}
							className="flex-0 w-1/2 sm:w-full xs:w-full"
						>
							<div className="flex-row">
								<h2 className="flex-0 mt-[-55px] 2xl:mt-[-80px] xl:mt-[-70px] md:mt-[-70px] sm:mt-[-80px] xs:mt-[-80px]  3xl:min-h-[60px] 2xl:min-h-[60px] xl:min-h-[60px] lg:min-h-[40px] md:min-h-[40px] sm:min-h-[36px] xs:min-h-[28px] italic font-semibold text-dark-text text-2xl 3xl:text-6xl 2xl:text-6xl xl:text-6xl lg:text-4xl md:text-4xl sm:text-3xl xs:text-lg">
									Contact Me
								</h2>
								<p className="flex-1 mt-12 lg:mt-5 md:mt-5 sm:mt-5 xs:mt-5 font-medium text-dark-text text-sm 3xl:text-3xl 2xl:text-2xl xl:text-2xl lg:text-lg md:text-lg sm:text-sm xs:text-xs">
									If you have any questions, comments, criticisms, concerns,
									please contact me in any of the mediums below!
								</p>
							</div>
						</motion.div>
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							variants={slideInRight}
							className="flex-2 flex justify-center items-center w-1/2 -mt-4 pr-40 sm:pr-10 m-10 sm:w-full xs:w-full pt-10 sm:pt-20 xs:pt-[90px]"
						>
							<div className="flex flex-col w-full h-full pt-6 pb-10 px-8 bg-neon-red text-white shadow-[0px_0px_100px_rgba(255,49,49,0.7)]">
								<form>
									<h1 className="font-bold pb-3 text-dark-text text-sm 3xl:text-2xl 2xl:text-xl xl:text-xl lg:text-md md:text-md sm:text-sm xs:text-xs">
										Send Me A Message!
									</h1>
									<div className="flex flex-row font-semibold text-lg pb-2">
										<h2 className="w-1/2">Name</h2>
									</div>
									<div className="flex flex-row  text-black">
										<input className="w-1/2 p-2" placeholder={"First"}></input>
										<input
											className="ml-3 w-1/2 p-2 "
											placeholder={"Last"}
										></input>
									</div>
									<div className="flex flex-row font-semibold text-lg pt-5 pb-2">
										<h2 className="w-1/2">Email</h2>
										<h2 className="w-1/2 ml-3">Phone Number</h2>
									</div>
									<div className="flex flex-row text-black">
										<input className="w-1/2 p-2" placeholder={"Email"}></input>
										<input
											className="ml-3 w-1/2 p-2"
											placeholder={"Number"}
										></input>
									</div>
									<h2 className="w-1/2 font-semibold text-lg pt-5 pb-2">
										Message
									</h2>
									<input
										className="w-full pb-40 p-2 text-black"
										placeholder={"Message"}
									></input>
									<div className="pt-4"></div>
									<button className="w-full border-2 p-2 px-4 border-white hover:bg-header-select hover:border-header-select">
										<p>Submit</p>
									</button>
								</form>
							</div>
						</motion.div>
					</div>
				</motion.div>
			</section>
		</motion.div>
	);
};

export default SectionWrapper(Contact, 'contact');
