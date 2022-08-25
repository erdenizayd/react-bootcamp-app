import { useContext } from "react";
import ProductContext from "../context/productcontext";

function BuyComponent() {

    const {products,setProduct} = useContext(ProductContext);
    const tempList = [];

    function clearBasket(product) {
        product.amount = 0;
        tempList.push(product);
    }

    function handleClick() {
        products.forEach(clearBasket)
        setProduct(tempList);
    }


    return <button className="BuyButton" onClick={handleClick}>Satın Al</button>
}

export default BuyComponent;