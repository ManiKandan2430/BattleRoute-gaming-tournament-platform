import FooterLink from "../components/ui/FooterLink";
import { footers } from "../constants/constants";

const Footer = () => {
  return (
    <div className="w-full h-[100px]">
      <FooterLink
        items={footers}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
      />
    </div>
  );
};

export default Footer;
