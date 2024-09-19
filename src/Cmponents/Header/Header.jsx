import "./Header.css";

export function Header({ bgColor, isLoggedIn, username, onLogin }) {
  let menuItems = ["Home", "About us", "Contact"];

  return (
    <header style={{ backgroundColor: bgColor }}>
      <div>
        <h2>{isLoggedIn ? `` : ``}</h2>
        <img
          src="https://media.istockphoto.com/id/1345681613/vector/creative-people-logo-vector-illustration-design-editable-resizable-eps-10.jpg?s=612x612&w=0&k=20&c=9XUHICA1ljbxBcLw8ERp0kDDxLNQ8Bp2yR4aUSS6SBs="
          alt="logo"
          width="50px"
        />
      </div>
      <div className="menu">
        <div className="menu-bar">
          <ul className="menu-items">
            <li>{menuItems[0]}</li>
            <li>{menuItems[1]}</li>
            <li>{menuItems[2]}</li>
          </ul>
        </div>
      </div>
    </header>
  );
}
