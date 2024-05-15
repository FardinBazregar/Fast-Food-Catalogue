import { HiShoppingCart } from "react-icons/hi";
import './fastFoodItems.css'
const FastFoodItem = ({name,price,ingredients,imageUrl})=>{
    return (
        <div className="card product-card h-100 border-0 shadow-sm pb-1">
            <span className="badge badge-end badge-shadow bg-success fs-md fw-medium">
                قیمت : {price.toLocaleString()} تومان
            </span>
            <div className="card__placeholder">
            <img src={imageUrl} className="card-img-top" alt="" />

            </div>
            <div className="card-body text-center pt-3 pb-4 d-flex flex-column">
                <h5 className="mb-2">{name}</h5>
                <div className="fs-ms fw-bold text-muted mb-3">
                    {ingredients}
                </div>

                <button className="btn btn-outline-success btn-sm w-100 mt-auto fw-bold">
                   <HiShoppingCart className="fs-5 ms-3"/>
                    افزودن به سبد خرید
                </button>

            </div>






            </div>
    )
}
export default FastFoodItem