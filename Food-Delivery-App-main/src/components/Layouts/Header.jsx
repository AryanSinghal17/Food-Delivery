import React,{useContext, useState} from "react";
import "../../styles/HeaderStyle.css";
import Logo from "../../assets/logo/logo.png";
import  {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { CartContext } from "../CartContext";

function Header(){
  const[nav,setNav]=useState(false);
  const{cartItems}=useContext(CartContext);
  //scroll navbar
  const changeValueOnScroll=()=>{
    const scrollValue=document.documentElement.scrollTop;
    setNav(scrollValue>100);
  };

  window.addEventListener("scroll",changeValueOnScroll);
    return (
        <header>
        <nav className={`navbar navbar-expand-lg bg-body-tertiary ${nav ? "sticky" : ""}`}
>
  <div className="container-fluid">
    <a className="navbar-brand">
        <Link to="/" className="logo">
        <img src={Logo} alt="Logo" className="img-fluid"></img>
        </Link>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li className="nav-item">
  <Link className="nav-link" aria-current="page" to="/">
    Home
  </Link>
</li>
<li className="nav-item">
  <Link className="nav-link" to="/about">
    About
  </Link>
</li>
<li className="nav-item">
  <Link className="nav-link" to="/menu">
    Our Menu
  </Link>
</li>
<li className="nav-item">
  <Link className="nav-link" to="/blog">
    Blog
  </Link>
</li>
<li className="nav-item">
  <Link className="nav-link" to="/contact">
    Contact
  </Link>
</li>
        <li class="cart nav-item">
            <Link className="nav-link" to="/cart">
    <div className="cart">
      <i className="bi bi-bag fs-5"></i>
      <em className="roundpoint">2</em>
    </div>
  </Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
        
        </header>
    )
}
export default Header;