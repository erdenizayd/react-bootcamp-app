import { useContext } from "react";
import ProductContext from "../context/productcontext";
import AddProductComponent from "./addproductcomponent";
import BasketRowComponent from "./basketrowcomponent";
import ProductComponent from "./productcomponent";

function BasketComponent() {
    const {products} = useContext(ProductContext);
    
    let total = 0;

    function getTotalPrice() {
        products.forEach(e => {
            total += (e.price) * (e.amount)
        });
        return total;
    }

    return (
        <div>
            <table className="Basket">
                <tbody>
                    {products.map((e) => {return (e.amount) ? <BasketRowComponent key={e.name} name={e.name} price={e.price} amount={e.amount}/> : ''})}
                </tbody>
            </table>
            <div className="Total">Sepet Toplamı: {getTotalPrice()}</div>
        </div>
    )

}

export default BasketComponent;