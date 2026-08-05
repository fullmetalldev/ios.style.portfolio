import "./IOS26.scss";
import ProfileIMG from "../../assets/hero.jpg";
import EmailIcon from "../../assets/emailIcon";
import PhoneIcon from "../../assets/phoneIcon";
import VerifyMark from "../../assets/verifiedmark";
import VideoIcon from "../../assets/videoIcon";

const IOS26 = ({ background, setBackground }) => {
  const callMe = () => {
    window.location.href = "tel:+15551234567";
  };
  const emailMe = () => {
    window.location.href = "mailto:example@gmail.com";
  };
  const sharePage = () => {
    if (navigator.share) {
      navigator.share({
        title: document.title,
        text: "Check out this page",
        url: window.location.href,
      });
    } else {
      // Fallback for browsers without Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied!");
    }
  };

  return (
    <section className="Contact">
      <div className="container">
        <div className="Contact__image">
          <img src={ProfileIMG} alt="Profile" />
        </div>

        <div className="Contact__profile">
          <div className="Contact__profile_name">
            <h1>Erbol Nurekov</h1>
            <VerifyMark />
          </div>
          <div className="Contact__profile_actions">
            <button onClick={() => callMe()}>
              <PhoneIcon />
            </button>
            <button>
              <VideoIcon />
            </button>
            <button onClick={() => emailMe()}>
              <EmailIcon />
            </button>
          </div>
          <div className="Contact__profile_notes infoBlock">
            <label className="Contact__profile_notes-label">
              <p className="Contact__profile_notes-name">home</p>
              <a
                href="mailto:info@erbol.dev"
                className="Contact__profile_notes-label"
              >
                info@erbol.dev
              </a>
            </label>

            <hr />

            <label className="Contact__profile_notes-label">
              <p className="Contact__profile_notes-name">notes</p>
              <div>
                <p>Software Engineer</p>
                <p>React , Node.js , AI</p>
                <p>4+ years</p>
              </div>
            </label>

            <hr />

            <label className="Contact__profile_notes-label">
              <p className="Contact__profile_notes-name">actions</p>
              <a
                onClick={() => setBackground(!background)}
                className="Contact__profile_notes-label"
              >
                Live Background: {background ? "On" : "Off"}
              </a>
            </label>
          </div>

          <div className="Contact__profile_share infoBlock">
            <a
              onClick={() => emailMe()}
              className="Contact__profile_notes-label"
            >
              Send message
            </a>
            <hr />
            <a
              onClick={() => sharePage()}
              className="Contact__profile_notes-label"
            >
              Share contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IOS26;
