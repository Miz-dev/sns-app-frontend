import { Timeline } from "@mui/icons-material";
import React from "react";
import Sidebar from "../../components/Topbar/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";

export default function Home() {
	return (
		<>
			<Topbar />
			<Sidebar/>
			<Timeline/>
		</>
	);
}
