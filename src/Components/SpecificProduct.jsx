import { useGetProductByIdQuery } from "../app/service/dummyData";

const SpecificProduct = () => {
 const { data, isError, isLoading } = useGetProductByIdQuery(10);
 if (isError) return <>Error</>;
 if (isLoading) return <>Loading...</>;

 return <h1>{data?.brand}</h1>;
};

export default SpecificProduct;
