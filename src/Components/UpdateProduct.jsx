import { useUpdateProductMutation } from "../app/service/dummyData";

const UpdateProduct = ({ productId }) => {
 const [updateProduct, { data, error, isLoading }] = useUpdateProductMutation();

 const handleUpdateProduct = async () => {
  try {
   const updatedProduct = {
    title: "Title updated 😅😅",
   };
   await updateProduct({
    id: productId,
    updatedProduct,
   });
  } catch (error) {
   console.log(error);
  }
 };
 if (error) return <>Errro..</>;
 if (isLoading) return <>IsLoading...</>;
 return (
  <div>
   <h1>{data?.title}</h1>
   <button onClick={handleUpdateProduct}>Update Product</button>
  </div>
 );
};

export default UpdateProduct;
