import AddProductComponent from "./addproductcomponent";

function ProductComponent(props) {

    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.price}</td>
            <td><AddProductComponent name={props.name}/></td>
        </tr>
    )
}

export default ProductComponent;