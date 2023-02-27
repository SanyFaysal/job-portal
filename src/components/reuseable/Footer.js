import React from 'react';

const Footer = () => {
  return (
    <footer className="footer p-10 bg-blue-50 text-blue-500">
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover" href="/">
          Branding
        </a>
        <a className="link link-hover" href="/">
          Design
        </a>
        <a className="link link-hover" href="/">
          Marketing
        </a>
        <a className="link link-hover" href="/">
          Advertisement
        </a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover" href="/">
          About us
        </a>
        <a className="link link-hover" href="/">
          Contact
        </a>
        <a className="link link-hover" href="/">
          Jobs
        </a>
        <a className="link link-hover" href="/">
          Press kit
        </a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover" href="/">
          Terms of use
        </a>
        <a className="link link-hover" href="/">
          Privacy policy
        </a>
        <a className="link link-hover" href="/">
          Cookie policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
