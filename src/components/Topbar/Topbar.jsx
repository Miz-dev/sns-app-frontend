import React from "react";

export default function Topbar() {
	return (
		<div className="topbarContainer">
			<div className="topbarLeft">
				<span className="logo">SNS App</span>
			</div>
			<div className="topbarCenter">
				<div className="serchbar">
					<input
						type="text"
						className="sarchInput"
						placeholder="探しものはなんですか？"
					/>
				</div>
			</div>
			<div className="topbarRight">
				<div className="topbarIconItem">1</div>
				<div className="topbarIconItem">2</div>
			</div>
			<img src="/assets/person/1.jpg" alt="" className="topbarImg" />
		</div>
	);
}
