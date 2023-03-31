import React from "react";
import Post from "../Post/Post";
import Share from "../Share/Share";
import "./TimeLine.css";

export default function TimeLine() {
  return (
    <div className="timeline">
      <div className="timelineWrapper">
        <Share />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}
