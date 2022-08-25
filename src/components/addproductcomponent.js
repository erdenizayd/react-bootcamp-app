import { useContext } from "react";
import ProductContext from "../context/productcontext";

function AddProductComponent(props) {
    const {products,setProduct} = useContext(ProductContext);
    const tempList = [];

    function removeProductFunction(product) {
        if(product.name !== props.name) {
            tempList.push(product);
        }
    
    }

    function addProductFunction(product) {
        if(product.name === props.name) {
            product.amount += 1;
        }
        tempList.push(product);
    }

    function handleRemove() {
        products.forEach(removeProductFunction);
        setProduct(tempList);
    }

    function handleClick() {
        products.forEach(addProductFunction);
        setProduct(tempList);
    }

    return (<div>
                <button className="AddProductButton" onClick={handleClick}>Sepete Ekle</button>
                <button className="RemoveButton" onClick={handleRemove}>x</button>
            </div>
        )
}

export default AddProductComponent;