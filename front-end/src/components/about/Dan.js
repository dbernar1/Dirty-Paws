import danPic from "./images/Dan.png";
import TeamMember from "./TeamMember";

export default function Dan() {
  return (
    <TeamMember
      pic={danPic}
      email="drdlindeblom@gmail.com"
      name="Dan Lindeblom"
      role="Fullstack Web Developer"
      bio={
        <>
          Sports fanatic who has a passion for coding. Loves working with data
          and statistics.
          <br />
          Wishes he could design an app that would help the Leafs win the Cup
        </>
      }
      githubUsername="DLindeblom"
      linkedInUrl="https://www.linkedin.com/in/dan-lindeblom-6039a1233/"
      linkedinUsername="dan-lindeblom"
      hoveringProps={{ y: (x) => (x - window.innerWidth / 2) / 20, s: 1.1 }}
    />
  );
}
