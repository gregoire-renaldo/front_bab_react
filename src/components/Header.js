import "./Header.css";

const Header = () => {
  return (
    <div className="container-header">
      <ul className="menu1">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>

        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
