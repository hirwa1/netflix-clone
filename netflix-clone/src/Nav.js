import React , {useState , useEffect} from 'react'
import './Nav.css';
function Nav() {
  const [show, handleShow] = useState(false);
    useEffect( () =>{
     window.addEventListener("scroll", () =>{
         if(window.scrollY > 100) {
     handleShow(true);
         } else handleShow(false);
     });

     return () =>{
         window.removeEventListener("scroll");
     }; 
    },[]);
    return (
        <div class={`nav ${show && "nav_black"}`}>
            <img 
             
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
            className="nav_logo"
            alt="Netflix Logo"
            />

<img 
             
        src="
        https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMti6Y58F9U28BKZAOQMWDh9auJ5gfJahe5uKYMjr0kSNaXP4MZYkvDomyRUVKOfiPT5g&usqp=CAU"
            className="nav_avatar"
            alt="Netflix Logo"
            />
        </div>
    )
}

export default Nav

