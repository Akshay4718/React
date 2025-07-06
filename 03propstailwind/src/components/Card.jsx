import React from 'react'

const Card = ({name="adidas "}) => {//here we are using destructuring to extract the name prop with a default value of "adidas"
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary bg-amber-200 p-2 m-2 rounded-2xl">Buy Now</button>
    </div>
  </div>
</div>
  )
}



// const Card = (props) => {
//   return (
//     <div className="card bg-base-100 w-96 shadow-sm">
//   <figure>
//     <img
//       src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
//       alt="Shoes" />
//   </figure>
//   <div className="card-body">
//     <h2 className="card-title">{props.name}</h2>
//     <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
//     <div className="card-actions justify-end">
//       <button className="btn btn-primary bg-amber-200 p-2 m-2 rounded-2xl">Buy Now</button>
//     </div>
//   </div>
// </div>
//   )
// }

export default Card