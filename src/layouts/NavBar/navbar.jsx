import ImageIcon from "../../assets/ImageIcon";
import "./navbar.scss";
const NavBar = ({ background, setBackground }) => {
  return (
    <div className="navbar">
      <ul className="navbar__menu">
        <li
          className={`navbar__menu_item ${background ? "active" : ""}`}
          onClick={() => setBackground(!background)}
        >
          <ImageIcon />
          <span>Background</span>
        </li>
      </ul>
    </div>
  );
};
export default NavBar;
