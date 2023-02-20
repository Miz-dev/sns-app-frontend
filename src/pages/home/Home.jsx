import { Timeline } from "@mui/icons-material";
import React from "react";
import Rightbar from "../../components/Rightbar/Rightbar";
import Sidebar from "../../components/Topbar/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";

export default function Home() {
	return (
		<>
			<Topbar />
			<Sidebar/>
			<Timeline/>
			<Rightbar/>
		</>
	);
}
