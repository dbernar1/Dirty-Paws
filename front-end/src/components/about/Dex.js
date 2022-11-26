import dex from "./images/Dex.png";
import TeamMember from "./TeamMember";

export default function Dex() {
  return (
    <TeamMember
      pic={dex}
      email="dexthefish@gmail.com"
      name="Declan Davis"
      role="Fullstack Web Developer"
      bio={
        <>
          Cat lover and mathemagical wizard. Probably outside playing guitar or
          skateboarding around the city. Capable of building super epic web
          applications in the blink of an eye.
        </>
      }
      githubUsername="DexTheFish"
      linkedInUrl="https://www.linkedin.com/in/therealdeclandavis/"
      linkedinUsername="therealdeclandavis"
      hoveringProps={{ y: (x) => (x - window.innerWidth / 1.2) / 15, s: 1.11 }}
    />
  );
}
