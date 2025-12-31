import Header from "../components/Layouts/Header";
import React, { useContext } from "react";
import "../styles/OurMenuStyle.css";
import burger1 from "../assets/menu/burger-11.jpg";
import burger2 from "../assets/menu/burger-12.jpg";
import burger3 from "../assets/menu/burger-13.jpg";
import burger4 from "../assets/menu/burger-14.jpg";
import burger5 from "../assets/menu/burger-15.jpg";
import burger6 from "../assets/menu/burger-16.jpg";
import burger7 from "../assets/menu/burger-17.jpg";
import burger8 from "../assets/menu/burger-18.jpg";
import { CartContext } from "../components/CartContext";
const menuItems = [
  { id: 1,
    name: "Margherita Pizza",
    price: 12,
    description: "Classic cheese and tomato pizza.",
    image:burger1,
},
  { id: 2,
    name: "Veggie Burger",
    price: 10,
    description: "Loaded with fresh vegetables.",
    image:burger2,
},
  { id: 3,
    name: "Pasta Alfredo",
    price: 11,
    description: "Creamy alfredo sauce with fettuccine.",
    image:burger3,
},
  { id: 4,
    name: "Caesar Salad",
    price: 8,
    description: "Crisp romaine with Caesar dressing.",
    image:burger4,
},
  { id: 5,
    name: "Caesar Salad",
    price: 8,
    description: "Crisp romaine with Caesar dressing.",
    image:burger5,
},
  { id: 6,
    name: "Caesar Salad",
    price: 8,
    description: "Crisp romaine with Caesar dressing.",
    image:burger6,
},
  { id: 7,
    name: "Caesar Salad",
    price: 8,
    description: "Crisp romaine with Caesar dressing.",
    image:burger7,
},
  { id: 8,
    name: "Caesar Salad", 
    price: 8,
    description: "Crisp romaine with Caesar dressing.",
    image:burger8,
},
  { id: 9,
    name: "Caesar Salad",
    price: 8,
    description:"Crisp romaine with Caesar dressing.",
    image:burger1,
},
];
function OurMenu(){
    const { addToCart } = useContext(CartContext);
    return(
        <>
        <Header></Header>
        <div className="menu container mt-5 mb-5">
        {/* <h1 className="menu-title text-center mb-4">Our Menu</h1> */}
        <div className="row">
          {menuItems.map((item) => (
            <div key={item.id} className="col-md-6 col-lg-4 mb-4">
              <div className="card menu-card h-100">
                 <img
                  src={item.image}
                  alt={item.name}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.description}</p>
                  <p className="card-price">${item.price}</p>
                  <button
                    className="btn btn-warning w-100"
                    onClick={() => addToCart(item)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
        </>
    )
}
export default OurMenu;