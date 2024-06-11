import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => (
  <footer className="bg-dark text-white text-center py-3">
    <Container>
      <hr />
      <h3>
        <b>You can find and follow me in the following domains:</b>
      </h3>
      <a href="https://www.github.com" target="_self">
        <img
          src="https://jumpcloud.com/wp-content/uploads/2017/06/github-logo.png"
          alt="GitHub"
          width="60"
          height="60"
          border="2px"
        />
      </a>
      <a href="https://www.facebook.com" target="_self">
        <img
          src="https://www.vivakur.com/wp-content/uploads/2016/10/Facebook_symbol_Word.jpg"
          alt="FaceBook"
          width="60"
          height="60"
          border="2px"
        />
      </a>
      <a href="https://twitter.com/home" target="_self">
        <img
          src="https://th.bing.com/th/id/OIP.ns4-aGFKlZH9KZvJ5BvQAQAAAA?rs=1&pid=ImgDetMain"
          alt="Twitter"
          width="60"
          height="60"
          border="2px solid red"
        />
      </a>
      <br />
      <a href="https://www.instagram.com" target="_self">
        <img
          src="https://s29588.pcdn.co/wp-content/uploads/sites/2/2019/04/Logos_Instagram_01.jpg.optimal.jpg"
          alt="Instagram"
          width="60"
          height="60"
          border="2px"
        />
      </a>
      <a href="https://www.linkedin.com" target="_self">
        <img
          src="https://th.bing.com/th/id/OIP.b5oDvUVU5UVN4cefTJGq3wHaHa?pid=ImgDet&rs=1"
          alt="Linkedin"
          width="60"
          height="60"
          border="2px"
        />
      </a>
      <br />
      <p>&copy; 2024 Nirmal Kumar Das. All rights reserved.</p>
    </Container>
  </footer>
);

export default Footer;
