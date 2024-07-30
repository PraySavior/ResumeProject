import { useEffect } from "react";

const Portfolio = () => {
    useEffect(() => {
        function handleClick(event) {
          let buttonLine = event.target.innerHTML.trim().toUpperCase();
          let boxes = document.querySelectorAll('.boxes')
          boxes.forEach(boxs=>{
            let catElement = boxs.querySelector('.cat')
            let cat = catElement.innerHTML.trim().toLocaleUpperCase()
            if (buttonLine === 'ALL') {
                boxs.style.display = 'block'
            }else if(cat !== buttonLine){
                boxs.style.display = 'none'
            }else if(cat === buttonLine){
                boxs.style.display = 'block'
            }
          })
        //   console.log(buttonLine);
        }
      
        let boxFilter = document.querySelectorAll('.box-filter');
        boxFilter.forEach(button => {
          button.addEventListener('click', handleClick);
        });
      
        return () => {
          boxFilter.forEach(button => {
            button.removeEventListener('click', handleClick);
          });
        };
      }, []);
      

  return ( 
    <div className="section">
      <div className="box-1">
        <h2 className="headers">Featured <strong>Portfolio</strong></h2>
        <div className="categories-all">
          <ul className="categories">
            <button className="box-filter">All</button>
            <button className="box-filter">Packaging</button>
            <button className="box-filter">Mockup</button>
            <button className="box-filter">Typography</button>
            <button className="box-filter">Photography</button>
          </ul>
        </div>
        <div className="boxes-all">
          <div className="boxes">
            <div className="boxes-img">
              <img src="https://preview.colorlib.com/theme/rezume/images/p1.jpg.webp" alt="" />
            </div>
            <h4 className="h4-headers">Square Box Mockup</h4>
            <div className="cat">MOCKUP</div>
          </div>
          <div className="boxes">
            <div className="boxes-img">
              <img src="https://preview.colorlib.com/theme/rezume/images/p2.jpg.webp" alt="" />
            </div>
            <h4 className="h4-headers">Product Box Package Mockup</h4>
            <div className="cat">MOCKUP</div>
          </div>
          <div className="boxes">
            <div className="boxes-img">
              <img src="https://preview.colorlib.com/theme/rezume/images/p3.jpg.webp" alt="" />
            </div>
            <h4 className="h4-headers">Creative Package Design</h4>
            <div className="cat">PACKAGING</div>
          </div>
          <div className="boxes">
            <div className="boxes-img">
              <img src="https://preview.colorlib.com/theme/rezume/images/p4.jpg.webp" alt="" />
            </div>
            <h4 className="h4-headers">Packaging Brand</h4>
            <div className="cat">PACKAGING</div>
          </div>
          <div className="boxes">
            <div className="boxes-img">
              <img src="https://preview.colorlib.com/theme/rezume/images/p5.jpg.webp" alt="" />
            </div>
            <h4 className="h4-headers">White Space Photography</h4>
            <div className="cat">PHOTOGRAPHY</div>
          </div>
          <div className="boxes">
            <div className="boxes-img">
              <img src="https://preview.colorlib.com/theme/rezume/images/p6.jpg.webp" alt="" />
            </div>
            <h4 className="h4-headers">Isometric 3D Extrusion</h4>
            <div className="cat">TYPOGRAPHY</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
