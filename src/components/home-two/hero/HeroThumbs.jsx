import Thumb1Img from "../../../assets/images/ct1.jpg";
import Thumb2Img from "../../../assets/images/ct2.jpg";
import Thumb3Img from "../../../assets/images/ct3.jpg";
import Thumb4Img from "../../../assets/images/ct4.jpg";
import Thumb5Img from "../../../assets/images/ct5.jpg";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../../animation/FadeInStaggerTwo";

function HeroThumbs() {
	return (
		<FadeInStaggerTwo className="aximo-hero-thumb-wrap">
			<FadeInStaggerTwoChildren className="aximo-hero-thumb-item">
				<img src={Thumb1Img} alt="Thumb images" />
			</FadeInStaggerTwoChildren>
			<FadeInStaggerTwoChildren className="aximo-hero-thumb-item">
				<img src={Thumb2Img} alt="Thumb images" />
			</FadeInStaggerTwoChildren>
			<FadeInStaggerTwoChildren className="aximo-hero-thumb-item">
				<img src={Thumb3Img} alt="Thumb images" />
			</FadeInStaggerTwoChildren>
			<FadeInStaggerTwoChildren className="aximo-hero-thumb-item">
				<img src={Thumb4Img} alt="Thumb images" />
			</FadeInStaggerTwoChildren>
			<FadeInStaggerTwoChildren className="aximo-hero-thumb-item">
				<img src={Thumb5Img} alt="Thumb images" />
			</FadeInStaggerTwoChildren>
		</FadeInStaggerTwo>
	);
}

export default HeroThumbs;
