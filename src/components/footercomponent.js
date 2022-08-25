import { useContext } from "react";
import AddProductComponent from "./addproductcomponent";
import BasketComponent from "./basketcomponent";
import BuyComponent from "./buycomponent";

function FooterComponent() {

    return (
        <div>
            <div className="BasketTitle">Sepetiniz</div>
            <BasketComponent/>
            <BuyComponent/>
        </div>
    )

}

export default FooterComponent;