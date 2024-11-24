import Illustrator1Img from "../../../assets/images/discount.png";
import Illustrator2Img from "../../../assets/images/rush.png";
import Illustrator3Img from "../../../assets/images/lungs.png";
import Shape2Img from "../../../assets/images/v2/shape2.png";
import FadeInStagger from "../../animation/FadeInStagger";
import FeatureCard from "./FeatureCard";
const featuresData = [
	{
		id: crypto.randomUUID(),
		title: "99.55% Accuracy",
		description:
			"Our Deep Learning model Achieved 99.50% accuracy on Validation Dataset that makes it one of it kind.",
		img: Illustrator1Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Early Detection",
		description:
		"Our hybrid model is cappable of detecting and classifying early stafes lung cancer as well.",
		img: Illustrator3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Faster Response",
		description:
			"Our feature selection and classification process is well optimized so, serves results faster.",
		img: Illustrator2Img,
	},
];
function Features() {
	return (
		<div className="section bg-light2 aximo-section-padding3 position-relative">
			<div className="container">
				<div className="row">
					<div className="col-lg-8">
						<div className="aximo-section-title clash-grotesk">
							<h2>Features that set us apart from others</h2>
						</div>
					</div>
				</div>
				<div className="row">
					{featuresData.map((feature, index) => (
						<FadeInStagger key={feature.id} index={index} className="col-xl-4 col-md-6">
							<FeatureCard feature={feature} />
						</FadeInStagger>
					))}
				</div>
			</div>
			<div className="aximo-shape">
				<img src={Shape2Img} alt="Shape2Img" />
			</div>
		</div>
	);
}

export default Features;
