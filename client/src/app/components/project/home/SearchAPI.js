import React from 'react';
const SearchAPI = ({text, setText}) => {
  const BarStyling = {width:"20rem",background:"black",color:"#ff7b00", border:"none", padding:"0.5rem"};
  return (
    <input 
     style={BarStyling}
     key=""
     value={text}
     placeholder="Type to search..."
     onChange={(event) => {setText(event.target.value)}}
    />
  );
}
export default SearchAPI