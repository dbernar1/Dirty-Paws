import "./About.css";

import Ann from "./Ann.js";
import Dan from "./Dan.js";
import Dex from "./Dex.js";

export default function About() {
  return (
    <div>
      <section className="home-about">
        <div className="about-wrapper">
          <Ann />
          <Dan />
          <Dex />
        </div>
      </section>
    </div>
  );
}
