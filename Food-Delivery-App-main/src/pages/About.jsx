import Header from "../components/Layouts/Header";
import "../styles/AboutStyle.css";
function About(){
    return(
        <>
            <Header></Header>
        <div className="about container mt-5 mb-5">
        <h1 className="about-title">About Us</h1> 
        <p className="about-text">
          Welcome to our Food Ordering Web App! 🍴  
          We aim to make ordering food simple, fast, and enjoyable. 
          Our platform is designed to provide a seamless browsing 
          and shopping experience, whether you’re exploring menus, 
          checking out new dishes, or adding items to your cart.
        </p>

        <h3 className="about-subtitle mt-4">Our Mission</h3>
        <p className="about-text">
          To bring convenience and taste together by offering an easy-to-use 
          online ordering system that works perfectly on mobile, tablet, and desktop. 
          We focus on delivering a user-friendly interface and smooth navigation.
        </p>

        <h3 className="about-subtitle mt-4">Why Choose Us?</h3>
        <ul className="about-list">
          <li>✔️ Simple and responsive design with mobile-first approach</li>
          <li>✔️ Easy navigation through sticky header and dynamic routes</li>
          <li>✔️ Quick access to menus, shopping cart, and latest offers</li>
        </ul>
      </div>
      
        </>
    )
}
export default About;