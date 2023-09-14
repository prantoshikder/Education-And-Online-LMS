import { useMediaQuery } from "usehooks-ts";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import SubHeader from "./SubHeader";
import "./header.scss";

const Header = () => {
  const isMobileView: any | boolean = useMediaQuery("(max-width: 1024px)");

  return (
    <header className="main-header">
      <div className="header">
        <div className="container mx-auto">
          {isMobileView ? <MobileMenu /> : <DesktopMenu />}
        </div>
      </div>

      <SubHeader />
    </header>
  );
};

export default Header;
