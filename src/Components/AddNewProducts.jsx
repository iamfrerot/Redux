import { asyncThunkCreator } from "@reduxjs/toolkit";
import { useAddNewProductMutation } from "../app/service/dummyData";

const AddNewProducts = () => {
 const [addNewProduct, { data, error, isLoading }] = useAddNewProductMutation();
 if (error) return <h1>Error</h1>;
 if (isLoading) return <h1>Loading...</h1>;

 const handleAddProduct = async () => {
  try {
   const newProductData = {
    id: 1,
    title: "Amizing",
    description: "This is one",
   };
   await addNewProduct(newProductData);
  } catch (error) {
   console.log(error);
  }
 };
 return (
  <div>
   <h1>{data?.id}</h1>
   <h1>{data?.title}</h1>
   <button onClick={handleAddProduct} disabled={isLoading}>
    Add New Product
   </button>
  </div>
 );
};

export default AddNewProducts;
