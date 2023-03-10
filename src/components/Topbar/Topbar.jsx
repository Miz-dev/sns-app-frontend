import { Chat, Notifications, Search } from "@mui/icons-material";
import React from "react";
import "./Topbar.css";

export default function Topbar() {
	return (
		<div className="topbarContainer">
			<div className="topbarLeft">
				<span className="logo">SNS App</span>
			</div>
			<div className="topbarCenter">
				<div className="serchbar">
					<Search className="sarchIcon" />
					<input
						type="text"
						className="sarchInput"
						placeholder="探しものはなんですか？"
					/>
				</div>
			</div>
			<div className="topbarRight">
				<div className="topbarIcons">
					<div className="topbarIconItem">
						<Chat />
						<span className="topbarIconBadge">1</span>
					</div>
					<div className="topbarIconItem">
						<Notifications />
						<span className="topbarIconBadge">2</span>
					</div>
					<img src="/assets/person/1.png" alt="" className="topbarImg" />
				</div>
			</div>
		</div>
	);
}
