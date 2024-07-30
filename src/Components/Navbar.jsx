import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  useEffect(() => {
    let navbar = document.querySelector('.navbar')
    let home = document.querySelector('#home')
    let port = document.querySelector('#port')
    let resume = document.querySelector('#res')
    let about = document.querySelector('#about')
    let contact = document.querySelector('#cont')

    

    if (scroll >= 50) {
      navbar.classList.add('colourIt')
    } else {
      navbar.classList.remove('colourIt')
    }
    if (scroll < 800 && scroll >= 50) {
      home.classList.add('paint')
      // console.log(scroll)
    } else {
      home.classList.remove('paint')
    }
    if (scroll >= 800 && scroll < 2000) {
      port.classList.add('paint')
    } else {
      port.classList.remove('paint')
    }
    if (scroll >= 2000 && scroll < 3700) {
      resume.classList.add('paint')
    } else {
      resume.classList.remove('paint')
    }
    if (scroll >= 3700 && scroll < 6000) {
      about.classList.add('paint')
    } else {
      about.classList.remove('paint')
    }
    if (scroll >= 6000) {
      contact.classList.add('paint')
    }
    else {
      contact.classList.remove('paint')
    }

  }, [scroll]);

  const handleClick = (e) =>{
      let listId = e.target.id
      let targetElement;
      if(listId === 'home'){
        targetElement = document.querySelector('.topper')
        targetElement.scrollIntoView({behavior : 'smooth'})
      }else if(listId === 'port'){
        targetElement = document.querySelector('.section')
        targetElement.scrollIntoView({behavior : 'smooth'})
      }else if(listId === 'res'){
        targetElement = document.querySelector('.resumeAll')
        targetElement.scrollIntoView({behavior : 'smooth'})
      }else if(listId === 'about'){
        targetElement = document.querySelector('.testimonialDivAll')
        targetElement.scrollIntoView({behavior : 'smooth'})
      }else if(listId === 'cont'){
        targetElement = document.querySelector('.touchAll')
        targetElement.scrollIntoView({behavior : 'smooth'})
      }
  }

  return (
    <div className="navbar">
      <div className="navbar-middle">
        <ul className="nav-list">
          <li><a href="#home" id="home" onClick={handleClick}>HOME</a></li>
          <li><a href="#port" id="port" onClick={handleClick}>PORTFOLIO</a></li>
          <li><a href="#res" id="res" onClick={handleClick}>RESUME</a></li>
          <li><a href="#about" id="about" onClick={handleClick}>ABOUT</a></li>
          <li><a href="#cont" id="cont" onClick={handleClick}>CONTACT</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
