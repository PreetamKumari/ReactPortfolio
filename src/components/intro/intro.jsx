import "./intro.scss";

export default function Intro() {
  return (
  <div className="intro" id="intro">
    <div className="left">
      <div className="imageContainer">
        {/* <img src={require('../../assets/Profile.jpeg')} alt="no image" /> */}
      </div>
    </div>
    <div className="right">
      <h2>I am</h2>
      <h1>Preetam</h1>
      <p>Hi! I am a software developer and an Academic Volunteer at Make A Difference. This portfolio is a way to display all my technical work. If you'd like to connect with me please use the mail available on the topbar.</p>
      <a href="https://drive.google.com/file/d/1oCuw4fJOzCd_yyFXu0bYsGcxYh27_-lN/view?usp=sharing" target="_blank">
        <h3>My Resume</h3>
      </a>
    </div>
  </div>
  );
}
