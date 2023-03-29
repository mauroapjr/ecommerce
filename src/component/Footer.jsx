import React from 'react';
import '../Footer.css';


export default function Footer() {
  return (
    
    <footer className="section footer-classic context-dark bg-image py-5 shadow p-3 mb-5 bg-body rounded" width="100%" style={{background: '#FDF2E9 '}}>
      <div className="container">
        <div className="row row-30">
          
          <div className="col-md-4 col-xl-5">
            <div className="pr-xl-4">
              
              <p style={{fontSize: '0.8rem'}}>This website is used for managing, selling, buying products</p>
              <p className="rights">
                <span style={{fontSize: '0.8rem'}}>© 2023 </span>
                <span style={{fontSize: '0.8rem'}}>Created by Mauro, Samreen, Zhaopeng(Steve). </span>
                <span style={{fontSize: '0.8rem'}}> All Rights Reserved</span>
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <h5>Contacts</h5>
            <dl className="contact-list">
              <dd>Address:</dd>
              <dd><span style={{fontSize: '0.8rem'}}>CN Tower</span></dd>
            </dl>
            <dl className="contact-list">
              <dd>Email:</dd>
              <dd><a style={{fontSize: '0.8rem'}} href="mailto:#">toronto@gmail.com </a></dd>
            </dl>
            <dl className="contact-list">
              <dd><span style={{fontSize: '.9rem'}}>Phone:(123) 456-7789</span></dd>
              <dd>
                <a href="tel:#"></a>
              </dd>
            </dl>
          </div>
          <div className="col-md-4 col-xl-3">
            <h5>Links</h5>
            <ul className="nav-list">
              <li><a style={{fontSize: '0.8rem'}} href="#">Home</a></li>
              <li><a style={{fontSize: '0.8rem'}} href="#">Products</a></li>
              <li><a style={{fontSize: '0.8rem'}} href="#">About</a></li>
              <li><a style={{fontSize: '0.8rem'}} href="http://storage.googleapis.com/store_-_locator/index.html">Contacts</a></li>
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