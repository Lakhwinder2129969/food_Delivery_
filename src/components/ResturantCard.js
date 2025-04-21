import { CDN_URL } from "../utils/constants";



// const ResturantCard = ({
//   cloudinaryImageId,
//   name,
//   cuisines,
//   avgRatingString,
//   sla
// }) => {
//   return (
//     <div className="res-card" style={{ background: "#f0f0f0" }}>
//       <img
//         className="res-logo"
//         alt="res-logo"
//         src={CDN_URL + cloudinaryImageId}
//       />
//       <h3>{name}</h3>
//       <h4>{cuisines?.join(", ")}</h4>
//       <h4>{avgRatingString}</h4>
//       <h4>{sla?.slaString}</h4>
//     </div>
//   );
// };
// console.log("Rendering card for:", name);
// export default ResturantCard;


const ResturantCard = ({ resData }) => {
  const { name, cuisines, avgRating, cloudinaryImageId } = resData.info;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt={name}
      />
      <h3>{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <p>{avgRating} stars</p>
    </div>
  );
};

export default ResturantCard;
