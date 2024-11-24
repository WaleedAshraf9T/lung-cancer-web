import About from "../components/home-two/about";
import Features from "../components/home-two/features";
import Hero from "../components/home-two/hero";

function LandingPage() {
	return (
		<>
			<div className="aximo-all-section bg-light2">
				<Hero />
				<Features />
				<About />
				{/* <Video /> */}
				{/* <CallToAction /> */}
			</div>
		</>
	);
}

export default LandingPage;