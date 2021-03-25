import logo from "../Assets/Images/Deliveroo-logo.svg";

const Header = () => {
  return (
    <div className="container-header">
      <header>
        <img src={logo} alt="Deliveroo logo" />
      </header>
    </div>
  );
};

export default Header;
