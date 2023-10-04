import {  FaStar } from 'react-icons/fa';
import { GrUserAdd } from "react-icons/gr";
import { BiGasPump } from "react-icons/bi";
import { GiSteeringWheel } from "react-icons/gi";
import { ImMeter } from "react-icons/im";


export function Products(props) {
    return(
       <div className='background'>
          <div className='productList'>
               <p></p>
               <div key={props.id} className='productCard'>
                <img src={props.image} alt='product-img' className='productImage'></img>

                {/* <FaShoppingCart className={"productCard__cart"} /> */}
                {/* <FaRegBookmark className={"productCard__wishlist"} /> */}
                {/* <FaFireAlt className={"productCard__fastSelling"} /> */}

                   <div className='productCard__content'>
                    <h3 className='productName'>{props.name}</h3>
                       <div className='displayStack__1'>
                        <div className='productPrice'><GrUserAdd/> 4 People{props.price}</div>
                        <div className='productSales'>{props.totalSales}<BiGasPump/> Gasoline</div>
                       </div>
                       <div className='displayStack__2'>
                           <div className='productRating'>
                               <div className='productTime'> <ImMeter/> {props.kilometerperLiter}</div>
                                   {/* <FaStar/> */}
                           </div>
                               {/* <div className='productTime'>{props.timeLeft} days left</div> */}
                           <div className='productSales'>{props.totalSales}<GiSteeringWheel/> Automatic</div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
    )
}