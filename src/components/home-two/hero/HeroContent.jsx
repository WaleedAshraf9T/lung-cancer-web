import { Link } from "react-router-dom";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../../animation/FadeInStaggerTwo";
function HeroContent() {
	return (
		<div className="aximo-hero-content2">
			<h1>Lung Cancer Detection<br></br>and Classification</h1>
			<p>
			Using Deep Learning Hybrid CNN architecture. We made a highly effective and accurate framework for lung cancer detection and classification using hybrid CNN models, Optimal feature selcors and the Best classifier. <b>Test by clicking on the button below.</b>
			</p>
			<FadeInStaggerTwo className="aximo-hero-btn-wrap center">
				<FadeInStaggerTwoChildren>
					<Link className="aximo-default-btn" to="/detect">
						<span className="aximo-label-up">Upload CT-Scan</span>
						<span className="aximo-label-up">Upload CT-Scan</span>
					</Link>
				</FadeInStaggerTwoChildren>
			</FadeInStaggerTwo>
		</div>
	);
}

export default HeroContent;
