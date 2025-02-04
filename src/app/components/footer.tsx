// import Link from "next/link";
// import React from "react";
// import { BsFacebook } from "react-icons/bs";
// import { BsYoutube } from "react-icons/bs";
// import { BsInstagram } from "react-icons/bs";
// import { BsLinkedin } from "react-icons/bs";
// import { BsGithub } from "react-icons/bs";

// const Footer = () => {
//   return (
//     <div id="Footer" className="bg-purple-400">
//       <footer className=" body-font bg-fixed ">
//         <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col ">
//           <a className="flex title-font font-medium items-center md:justify-start justify-center">
//             <span className="ml-3 text-xl font-bold  font-style:italic text-purple-800 sm:6xl">
//             Sheza Fatima
//             </span>
//           </a>
//           <p className="text-sm text-gray-700 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
//             © 2024 Sheza Fatima.Created by Sheza Fatima
//           </p>
//           <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
//          <Link 
//          target="_blank"
//          href={"https://www.facebook.com/profile.php?id=61566351903578&mibextid=ZbWKwL"} className="ml-3 text-gray-900 text-xl hover:text-purple-800">
//          <BsFacebook /></Link>
//          <Link
//          target="_blank"
//          href={"https://www.youtube.com/@shizacrafts7250"}
         
//          className="ml-3 text-gray-900 text-xl hover:text-purple-800">
//          <BsYoutube />
//          </Link>
//          <Link 
//           target="_blank"
//          href={"https://www.instagram.com/1824digital_sf?igsh=ZGUzMzM3NWJiOQ=="} className="ml-3 text-gray-900 text-xl  hover:text-purple-800">
//          <BsInstagram />
//          </Link>
//          <Link target="_blank"
//          href={"https://github.com/shezafatima"} className="ml-3 hover:text-purple-800 text-xl text-gray-900">
//           <BsGithub />
//          </Link>
//          <a className="ml-3 text-gray-900 text-xl hover:text-purple-800">
//          <BsLinkedin />
//          </a>
//           </span>
//         </div>
//       </footer>
//     </div>
//   );
// };
// export default Footer;
import Link from "next/link";
import React from "react";
import { BsFacebook, BsYoutube, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import "../../styles/footer.css"; // Adjust the path if necessary

const Footer = () => {
  return (
    <div id="Footer" className="footer-wrapper">
      <footer className="footer">
        <div className="footer-container">
          <a className="footer-brand-container">
            <span className="footer-brand">
              Sheza Fatima
            </span>
          </a>
          <p className="footer-text">
            © 2024 Sheza Fatima. Created by Sheza Fatima
          </p>
          <span className="footer-social">
            <Link 
              target="_blank"
              href="https://www.facebook.com/profile.php?id=61566351903578&mibextid=ZbWKwL" 
              className="footer-social-link"
            >
              <BsFacebook />
            </Link>
            <Link
              target="_blank"
              href="https://www.youtube.com/@shizacrafts7250"
              className="footer-social-link"
            >
              <BsYoutube />
            </Link>
            <Link 
              target="_blank"
              href="https://www.instagram.com/1824digital_sf?igsh=ZGUzMzM3NWJiOQ=="
              className="footer-social-link"
            >
              <BsInstagram />
            </Link>
            <Link 
              target="_blank"
              href="https://github.com/shezafatima"
              className="footer-social-link"
            >
              <BsGithub />
            </Link>
            <a className="footer-social-link">
              <BsLinkedin />
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
