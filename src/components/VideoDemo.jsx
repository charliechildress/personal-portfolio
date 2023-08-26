import { motion } from 'framer-motion';

const VideoDemo = ({ source }) => {
	console.log(source);
	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
		>
			<div>
				<div>
					<img src={source} alt="video/gif" />
				</div>
			</div>
		</motion.div>
	);
};

export default VideoDemo;
