import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';
const App = () => {
  const [title, setTitle] = useState([]);
  // const [image, setImage] = useState();
  // const [description, setDescription] = useState();

  useEffect(() => {
    storeData();
  }, []);


  const storeData = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setTitle(response.data);
      // setImage(response.data)
      // setDescription(response.data)

    } catch (err) {
      console.log(err)
    }

  }
  return (
    <div className="container">
      {
        title.map(name => (
          <div key={name.id}>
            <h2>{name.title}</h2>
            <p className='cat'><b>Category:</b> {name.category}</p>
            <p className="price"><b>Price:</b> ${name.price}</p>
            <img className="image" src={name.image} alt='' />

            <p className="description"><b>Description:</b> {name.description}</p>

          </div>
        ))
      }

      {/* <h2>{image}</h2>
      <h2>{description}</h2> */}
    </div>
  )

}

export default App



