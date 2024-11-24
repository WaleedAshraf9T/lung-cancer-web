import CountUp from "react-countup";
function AboutCounter() {
	return (
		<div className="aximo-counter-wrap2">
			<div className="aximo-counter-data2">
				<h2 style={{color: '#bff747'}}>
					<span className="aximo-counter">
						2.5
					</span>
					k
				</h2>
				<p>New Cases Diagnosed</p>
			</div>
			<div className="aximo-counter-data2">
				<h2 style={{color: '#bff747'}}>
					<span className="aximo-counter">
						1.8
					</span>
					M
				</h2>
				<p>Lung Cancer Deaths</p>
			</div>
			<div className="aximo-counter-data2">
				<h2 style={{color: '#bff747'}}> 
					<span className="aximo-counter">
						2
					</span>
					x
				</h2>
				<p>Colorectal Cancer Deaths</p>
			</div>
		</div>
	);
}

export default AboutCounter;
