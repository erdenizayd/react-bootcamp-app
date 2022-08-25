import { useContext, useState } from "react"
import ProductContext from "../context/productcontext";

function NewProductComponent() {
    const [value, setValue] = useState('');
    const [price, setPrice] = useState('');
    const {products, setProduct} = useContext(ProductContext);

    function handleClick() {
        if(value !== '' && price !== '' && price !== 0 && !(products.some(e => e.name === value))){
            const tempList = [...products];
            const newProduct = {}
            newProduct.name = value;
            newProduct.price = price;
            newProduct.amount = 0;
            tempList.push(newProduct);
            setProduct(tempList);
            setValue('');
            setPrice('');
        }
    }
    
    return (
        <div className="NewProduct">
            <label className="LabelNew">Ürün adı:</label>
            <input className="pname" type="text" value={value} onChange={(e) => {setValue(e.target.value)}} />
            <label className="LabelNew">Ürün fiyatı:</label>
            <input className="price" type="number" value={price} onChange={(e) => {setPrice(e.target.value)}} />
            <button onClick={handleClick}>Ürün Ekle</button>
        </div>
    )
}

export default NewProductComponent;