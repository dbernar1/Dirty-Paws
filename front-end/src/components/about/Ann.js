import annBui from "./images/annBui.png";
import TeamMember from "./TeamMember";

export default function Ann() {
  return (
    <TeamMember
      pic={annBui}
      email="hello.annbui@gmail.com"
      name="Ann Bui"
      role="Fullstack Web Developer"
      bio={
        <>
          A front-end lover
          <br />
          Amateur UX/UI designer.
          <br />I am passionate about
          <br />
          designing and creating products
          <br />
          that are user-friendly
          <br />
          and visually appealing.
        </>
      }
      githubUsername="thaian161"
      linkedInUrl="https://www.linkedin.com/in/thaian161/"
      linkedinUsername="thaian161"
      hoveringProps={{ y: (x) => (x - window.innerWidth / 1 / 4) / 20, s: 1.1 }}
    />
  );
}
