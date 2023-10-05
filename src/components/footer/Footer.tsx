import { AiFillFacebook, AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="grid3">
        <div className="address flex">
          <p className="title">MONOGRAM</p>
          <p>305 King St. W.</p>
          <p>Suite 502</p>
          <p>Kitchener, ON</p>
          <p>Canada</p>
        </div>
        <div className="help flex">
          <p className="title">HELP</p>
          <p>FAQs</p>
          <p>Support Center</p>
          <p>Shipping and Sales</p>
        </div>
        <div className="quick-links flex">
          <p className="title">QUICK LINKS</p>
          <p>Home</p>
          <p>How it Works</p>
          <p>Shop</p>
          <p>Download</p>
        </div>
        <div className="subscribe flex">
          <p className="title">SUBSCRIBE TO MONOGRAM</p>
          <p>
            Master productivity with Creative Console and get all the latest
            Monogram news.
          </p>
          <div>
            <input type="email" placeholder="Email Address" />
            <button>SUBMIT</button>
          </div>
          <div className="socials-wrapper">
            <a href="">
              <AiFillInstagram size={25} />
            </a>
            <a href="">
              <BsTwitter size={25} />
            </a>
            <a href="">
              <AiFillFacebook size={25} />
            </a>
            <a href="">
              <AiFillYoutube size={25} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
