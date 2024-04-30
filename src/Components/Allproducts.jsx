import {
 useGetAllProductQuery,
 useGetProductByIdMutation,
} from "../app/service/dummyData";
const Allproducts = () => {
 const { data, isError, isLoading } = useGetAllProductQuery();
 if (isError) {
  return <>Ohooo</>;
 }
 if (isLoading) {
  return <>Loadding</>;
 }
 return (
  <div>
   {data?.products.map((p) => (
    <h1 key={p.id}>{p.title}</h1>
   ))}
  </div>
 );
};

export default Allproducts;
