"use client";
import { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Styles from "./HeaderBar.module.css";
import Logo from "./logo.png";
import Image from "next/image";

function HeaderBar() {
  const [isSticky, setIsSticky] = useState(false);  

  useEffect(() => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    }

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      bg="light"
      expand="lg"
      className={`${Styles.navbar} ${isSticky ? Styles.sticky : ""}`}
    >
      <Container>
        <Navbar.Brand href="../">
          <div className={Styles.logoWrap}>
            <Image src={Logo} className={Styles.logo} width={200} alt="Logo" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ms-auto">
            <Nav.Link href="." className={Styles.navLink}>
              Home
            </Nav.Link>
            <Nav.Link href="../about-us" className={Styles.navLink}>
              About Us
            </Nav.Link>
            <Nav.Link href="../projects" className={Styles.navLink}>
              Projects
            </Nav.Link>
            <Nav.Link href="../gallery" className={Styles.navLink}>
              Gallery
            </Nav.Link>
            <Nav.Link href="../designs" className={Styles.navLink}>
              Designs
            </Nav.Link>
            <Nav.Link href="../blogs" className={Styles.navLink}>
              Blogs
            </Nav.Link>
            <Nav.Link href="../contact-us" className={Styles.navLink}>
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderBar;
