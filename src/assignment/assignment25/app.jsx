import React, { useState, useEffect } from "react";

export default function app() {

    const itemList = [
        "Apple",
        "Orange",
        "Banana",
        "Cherry",
        "Milk",
        "Peanuts",
        "Butter",
        "Tomato"
      ];

      const url = 'https://api.unsplash.com/photos/?client_id=cDWDr2wVdsZ0cAhlLUWV3-M5LHE8G30I-iCr_8PREY4'

    const [img, setImg] = useState([])
    const [value,setValue] = useState('')
    const [filteredList, setFilteredList] = new useState(url);

    const fetchData = async () => {
        const data = await fetch('https://api.unsplash.com/photos/?client_id=cDWDr2wVdsZ0cAhlLUWV3-M5LHE8G30I-iCr_8PREY4')
            const response = await data.json();
            const final = response
            console.log(final);
            setImg(final)
    }
    useEffect(() => {
        fetchData()
    },[])

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const filterBySearch = (event) => {
        // Access input value
        const query = event.target.value;
        // Create copy of item list
        var updatedList = [...itemList];
        // Include all elements which includes the search query
        updatedList = updatedList.filter((item) => {
          return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        });
        // Trigger render with updated values
        setFilteredList(updatedList);
      };
  return (
    <div>
        <input type="text"  onChange={filterBySearch}/>
        <div className="col-12 d-flex justify-content-evenly flex-wrap">
        adsad
        </div>;
    </div>
  )
}
