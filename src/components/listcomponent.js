import { useContext } from "react";
import ProductContext from "../context/productcontext";
import ProductComponent from "./productcomponent";

function ListComponent() {

    const {products} = useContext(ProductContext);

    return (
        <div >
            <table className="Table">
                <thead>
                    <tr>
                        <th>Ürün</th>
                        <th>Fiyat</th>
                        <th>İşlemler</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((e) => {return <ProductComponent key={e.name} name={e.name} price={e.price}/>})
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListComponent;