import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import "../components/styles/footer.css";

import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="container-left">
        <div className="container-social">
          <div className="social-icon" color="3B5999">
            <a className="social-icon-link" href="https://www.facebook.com/BlossomFlowerShops/">
              <Facebook />
            </a>
          </div>
          <div className="social-icon" color="E4405F">
            <a className="social-icon-link" href="https://www.instagram.com/accounts/login/?next=/hattieflower/">
              <Instagram />
            </a>
          </div>
          <div className="social-icon" color="55ACEE">
            <a className="social-icon-link" href="https://twitter.com/blossomflwrshop">
              <Twitter />
            </a>
          </div>
          <div className="social-icon" color="E60023">
            <a className="social-icon-link" href="https://www.pinterest.com/FlowersGardenn/_created/">
              <Pinterest />
            </a>
          </div>
        </div>
      </div>
      <div className="container-center">
        <h3 className="container-title">Useful Links</h3>
        <ul className="links-list">
          <Link to="/" className="list-item">Home</Link>
          <Link to="/flowers" className="list-item">Shop</Link>
          <Link to="/find_flower" className="list-item">Find a flower by photo</Link>
        </ul>
      </div>
      <div className="container-right">
        <h3 className="container-title">Contact us</h3>
        <div className="container-contact">
          <Room style={{marginRight:"10px", color:"#e1506b"}}/> 622 Dixie Path , South Tobinchester 98336
        </div>
        <div className="container-contact">
          <Phone style={{marginRight:"10px", color:"#e1506b"}}/> +1 234 56 78
        </div>
        <div className="container-contact">
          <MailOutline style={{marginRight:"10px", color:"#e1506b"}} /> contact@flowershop.dev
        </div>
      </div>
    </div>
  );
};

export default Footer;
