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

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="container-left">
        <div className="container-social">
          <div className="social-icon" color="3B5999">
            <Facebook />
          </div>
          <div className="social-icon" color="E4405F">
            <Instagram />
          </div>
          <div className="social-icon" color="55ACEE">
            <Twitter />
          </div>
          <div className="social-icon" color="E60023">
            <Pinterest />
          </div>
        </div>
      </div>
      <div className="container-center">
        <h3 className="container-title">Useful Links</h3>
        <ul className="links-list">
          <li className="list-item">Home</li>
          <li className="list-item">My Account</li>
          <li className="list-item">Wishlist</li>
          <li className="list-item">Find a flower by photo</li>
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
