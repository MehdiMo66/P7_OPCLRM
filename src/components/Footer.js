import Logos from "../assets/images/LOGOS.svg";
import "../assets/styles/footer.scss";

function Footer() {
  return (
    <footer>
      <img src={Logos} alt="logo"></img>
      <div>
        <span>c</span>
        <p>2020 Kasa , All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
