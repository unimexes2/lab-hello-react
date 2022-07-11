import React from "react";


import icon from '../images/icon1.png' // relative path to image 
import icon2 from '../images/icon2.png'
import icon3 from '../images/icon3.png'
function Box() {


    return (

        <div className="down-box">
            <div className="box">

            <img   src={icon} />
            <h3> Sed ut perspiciatis unde omnis</h3> <p>iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit</p>
        </div>

        <div className="box">

            <img  src={icon2} />
            <h3> Sed ut perspiciatis unde omnis</h3> <p>iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit</p>
        </div>

        <div className="box">

            <img  src={icon3} />
           <h3> Sed ut perspiciatis unde omnis</h3> <p>iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit</p>
        </div>






        </div>)
}

export default Box

