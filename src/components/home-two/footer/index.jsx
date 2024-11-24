import FooterBottom from "./FooterBottom";
import FooterBg from "../../../assets/images/v2/footer-bg.png";
import LogoDarkImg from "../../../assets/images/logo/logo-dark.svg";
import { Link } from "react-router-dom";
function Footer() {
	return (
		<footer className="aximo-footer-section2" style={{ backgroundImage: `url(${FooterBg})` }}>
			<div className="container">
				<div className="aximo-footer-bottom two">
					<div className="row">
						<FooterBottom />
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
