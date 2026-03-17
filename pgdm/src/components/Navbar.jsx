import React from "react";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { useEnquireModal } from "../contexts/EnquireModalContext";
import Logo from "../assets/black_Logo.svg";
import "./Navbar.css"
export const SiteNavbar = () => {
  const { openModal } = useEnquireModal();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <Navbar
      fluid
      rounded
      className="navbarContainer bg-white shadow-md sticky top-0 z-50 backdrop-blur-md !lg:px-8"
    >
      {/* Logo */}
      <NavbarBrand href="/">
        <img
          src={Logo}
          className="navbarlogo mr-3 transition-transform duration-300 hover:scale-110"
          alt="Logo"
        />
      
      </NavbarBrand>

      {/* Right Side Button (mobile) */}
      <div className="md-btn-space flex items-center gap-3 flex-nowrap ml-auto md:hidden">

        <button
          type="button" 
          onClick={openModal}
          className="enquire-btn shrink-0 whitespace-nowrap !bg-[#003b64] !text-white px-5 py-2 rounded-lg shadow-md hover:!bg-[#002b4a] transition-all duration-300 hover:scale-105 cursor-pointer"
          style={{ backgroundColor: "#F6B700", color: "#ffffff" }}
        >
          Enquire Now
        </button>

        <NavbarToggle className="navbar-toggle shrink-0" />

      </div>

      {/* Navigation */}
      <NavbarCollapse className="text-gray-700 font-medium">
        
        <NavbarLink
          onClick={() => scrollToSection("placements")}
          className="navbar-text relative inline-block cursor-pointer group"
        >
          Placements
          <span className="custom-animation"></span>
        </NavbarLink>

        <NavbarLink
          onClick={() => scrollToSection("about")}
          className="navbar-text cursor-pointer relative group"
        >
          About Us
          <span className="custom-animation"></span>
        </NavbarLink>


        <NavbarLink
          onClick={() => scrollToSection("program")}
          className="navbar-text cursor-pointer relative group"
        >
          Program Offered
          <span className="custom-animation"></span>
        </NavbarLink>

        <NavbarLink
          onClick={() => scrollToSection("recruiters")}
          className="navbar-text cursor-pointer relative group"
        >
          Our Recruiters
          <span className="custom-animation"></span>
        </NavbarLink>

        <NavbarLink
          onClick={() => scrollToSection("testimonials")}
          className="navbar-text cursor-pointer relative group"
        >
          Testimonials
          <span className="custom-animation"></span>
        </NavbarLink>
      </NavbarCollapse>

      {/* Right Side Button (desktop) */}
      <div className="md-btn-space hidden md:flex md:order-2 items-center gap-3 flex-nowrap">

        <button
          type="button"
          onClick={openModal}
          className="enquire-btn shrink-0 whitespace-nowrap !bg-[#003b64] !text-white px-5 py-2 rounded-lg shadow-md hover:!bg-[#002b4a] transition-all duration-300 hover:scale-105"
          style={{ backgroundColor: "#F6B700", color: "#ffffff" }}
        >
          Enquire Now
        </button>

      </div>

</Navbar>
  );
};
