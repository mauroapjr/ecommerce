import React from 'react';
import '../Footer.css';


export default function Footer() {
  return (
    <footer className="section footer-classic context-dark bg-image" style={{background: '#2d3246'}}>
      <div className="container">
        <div className="row row-30">
          
          <div className="col-md-4 col-xl-5">
            <div className="pr-xl-4">
              
              <p>This website is used for managing, selling, buying products</p>
              <p className="rights">
                <span>© 2023 </span>
                <span>Created by Mauro, Samreen, Zhaopeng(Steve). </span>
                <span> All Rights Reserved</span>
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <h5>Contacts</h5>
            <dl className="contact-list">
              <dt>Address:</dt>
              <dd>CN Tower</dd>
            </dl>
            <dl className="contact-list">
              <dt>email:</dt>
              <dd><a href="mailto:#">Toronto@gmail.com</a></dd>
            </dl>
            <dl className="contact-list">
              <dt>phones:123456789</dt>
              <dd>
                <a href="tel:#"></a>
              </dd>
            </dl>
          </div>
          <div className="col-md-4 col-xl-3">
            <h5>Links</h5>
            <ul className="nav-list">
              <li><a href="#">Home</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contacts</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row no-gutters social-container">
        <div className="col"><a className="social-inner" href="#"><span className="icon mdi mdi-facebook"></span><span>Facebook</span></a></div>
        <div className="col"><a className="social-inner" href="#"><span className="icon mdi mdi-instagram"></span><span>instagram</span></a></div>
        <div className="col"><a className="social-inner" href="#"><span className="icon mdi mdi-twitter"></span><span>twitter</span></a></div>
        <div className="col"><a className="social-inner" href="#"><span className="icon mdi mdi-youtube-play"></span><span>google</span></a></div>
      </div>
    </footer>
  );
}