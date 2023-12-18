export default function ProductId({ params }) {
  return (
    <div>ProductId : {params.productId} </div>
  )
}

export const generateMetadata = ({ params }) => {
  return {
    title: `Product ${params.productId}`,
  }
}