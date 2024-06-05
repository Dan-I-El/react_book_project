import { FaStar } from "react-icons/fa";


const Star = ({selected = false, onSelect = f => f}) => (

  <FaStar color={selected ? "red" : "grey" } onClick={onSelect}/>

);

const createArray = (length) => [...Array(length)];

function StarRating({ style = {}, totalStars = 5, selectedStars, onRate = f => f}) {

  return (
    <div style = {{padding: "5px", ...style}}>
      {
        createArray(totalStars).map((n, i) => <Star key={i} selected={selectedStars > i} onSelect={() => onRate(i + 1)}/>)
      }
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </div>);
}

export default StarRating;
