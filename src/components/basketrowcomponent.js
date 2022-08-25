import { useContext } from "react";
import ProductContext from "../context/productcontext";

function BasketRowComponent(props) {

    const {products,setProduct} = useContext(ProductContext);

    const tempList = [];

    function removeItem(product) {
        if(product.name === props.name) {
            if(product.amount > 0) product.amount -= 1;
        }
        tempList.push(product);
        
    }
    
    function addItem(product) {
        if(product.name === props.name) {
            product.amount += 1;
        }
        tempList.push(product);
    }

    function handleRemove() {
        products.forEach(removeItem);
        setProduct(tempList);
    }

    function handleAdd() {
        products.forEach(addItem);
        setProduct(tempList);

    }

    return(
        <tr>
            <td>Ürün ismi: {props.name}</td>
            <td>Ürün fiyatı: {props.price}</td>
            <td>Ürün sayısı: <button className="ButtonBasket" onClick={handleRemove}>-</button> {props.amount} <button className="ButtonBasket" onClick={handleAdd}>+</button></td>
            <td>Ürün fiyatı toplamı: {props.amount * props.price}</td>
        </tr>
    )
}

export default BasketRowComponent;