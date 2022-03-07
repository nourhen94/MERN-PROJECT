import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";
import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer">
      {/* <h4>Contact</h4> */}

      <div className="SocialIcon">
        <a href="https://www.facebook.com/nourhen.jallouli.7"  rel="noreferrer" target="_blank" >

        <Facebook className="icon" />
        </a>

        <Instagram className="icon" />
        <Twitter className="icon"/>
        <Pinterest className="icon" />
      </div>

      <div className="contact">
        <p>
          <Room style={{ marginRight: "5px" }} /> Route de Tunis km 8.5
        </p>
        <p>
          <Phone style={{ marginRight: "5px" }} /> +216 52 837 982
        </p>
        <p>
          <MailOutline style={{ marginRight: "5px" }} /> Matchyshop@gmail.com
        </p>
      </div>

      <div>
        <p className="copyright">Copyright @2022 - Designed by Nourhen Jallouli</p>
      </div>
    </div>
  );
};

export default Footer;
