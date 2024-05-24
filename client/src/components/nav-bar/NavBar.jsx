import NavButton from "../nav-button/NavButton";

const NavBar = () => {
  const navButtons = [
    { link: "/home", buttonName: "Home" },
    { link: "/drivers", buttonName: "Drivers" },
    { link: "/about-us", buttonName: "About us" },
  ];

  return (
    <nav>
      <h1><span>D</span>rivers</h1>
      <div>
        {navButtons.map((navButton, index) => (
          <NavButton
            key={index}
            link={navButton.link}
            buttonName={navButton.buttonName}
          />
        ))}
      </div>
    </nav>
  );
};
export default NavBar;
