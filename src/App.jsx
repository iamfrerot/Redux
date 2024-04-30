import React from "react";
// import Allproducts from "./Components/Allproducts";
import SpecificProduct from "./Components/SpecificProduct";
import AddNewProducts from "./Components/AddNewProducts";
import UpdateProduct from "./Components/UpdateProduct";
const App = () => {
 return (
  <div>
   app
   {/* <Allproducts /> */}
   {/* <SpecificProduct /> */}
   {/* <AddNewProducts /> */}
   <UpdateProduct productId={4} />
  </div>
 );
};

export default App;
