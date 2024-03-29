import React from "react";
import "./Home.css"
import Rightbar from "../../components/Rightbar/Rightbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import TimeLine from "../../components/Timeline/TimeLine";
import Topbar from "../../components/Topbar/Topbar";

export default function Home() {
	return (
		<>
			<Topbar />
			<div className="homeContainer">
				<Sidebar/>
				<TimeLine/>
				<Rightbar/>
			</div>
		</>
	);
}
