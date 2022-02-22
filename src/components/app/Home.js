import React from "react";
import Navbar from "./Navbar";
import Posts from "./Posts";
import Stories from "./Stories";
import Suggestions from "./Suggestions";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="right__side">
          <Stories />
          <Posts />
        </div>
        <div className="left__side">
          <Suggestions />
        </div>
      </div>
    </div>
  );
}
