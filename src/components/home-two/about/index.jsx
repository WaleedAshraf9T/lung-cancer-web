import { motion } from "framer-motion";
import ThumbImg from "../../../assets/images/who.webp";
import AboutCounter from "./AboutCounter";

function About() {
	return (
		<div className="aximo-about-section bg-orange extra-side-margin">
			<div id="aximo-counter"></div>
			<div className="container">
				<div className="row">
					<div className="col-lg-5">
						<motion.div
							initial={{
								opacity: 0,
								rotate: 135,
							}}
							whileInView={{
								opacity: 1,

								rotate: -5,

								transition: {
									duration: 1,
									type: "spring",
									stiffness: 70,
								},
							}}
							className="aximo-thumb"
							id="rotatetwo"
						>
							<img src={ThumbImg} alt="ThumbImg" />
						</motion.div>
					</div>
					<div className="col-lg-7">
						<div className="aximo-default-content clash-grotesk">
							<h2 style={{color: '#bff747'}}>From Wordl Health Organization (WHO) 2022</h2>
							<p>
							The most recent global estimates from the International Agency for Research on Cancer (IARC) indicate that in 2022 almost 2.5 million people were diagnosed with lung cancer and more than 1.8 million people died from the disease.
							</p>
						</div>
						<AboutCounter />
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
