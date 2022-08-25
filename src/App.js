import logo from './logo.svg';
import './App.css';
import ListComponent from './components/listcomponent';
import { useState } from 'react';
import ProductContext from './context/productcontext';
import FooterComponent from './components/footercomponent';
import NewProductComponent from './components/newproductcomponent';

function App() {

  const [products,setProduct] = useState([{name: "Phone",
                                            price: 100,
                                            amount: 0},
                                          {name: "Car",
                                            price: 900, 
                                            amount: 0},
                                          {name: "Computer", 
                                            price: 300,
                                            amount: 0}]);

  const contextData = {
    products,
    setProduct
  }


  return (
      <ProductContext.Provider value={contextData}>
      <div className="App">
        <ListComponent/>
        <FooterComponent/>
        <NewProductComponent/>
      </div>
    </ProductContext.Provider>
  );
}

export default App;
