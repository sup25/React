//useState initialization

//when you initialize your state, what you are writing in useState
//is very important

import { useState } from "react";

function App() {
  // this is to suppose you are getting your data like this
  // user:{
  //   name:"john",
  //   email:"john@gmail.com",
  //   images:["pfp.png", "cover.png"]
  // }
  //for example let us create user state
  //if it is an array write an empty array, if string just write empty string
  //in our case it is an object.
  //But sometime writing this only doesnot prevent from showing blank screen
  //so pass the prop you exactly need

  const [input, setInput] = useState("")
  const [user, setUser] = useState(
    {
      name: "cena",
      email: "cena@gmail.com",
      image: ['profile.png', 'cover.png']
    }
  )


  const changeUser = () => {
    setUser(prev => ({ ...prev, name: input }))
  }

  return (
    <div>
      <h2>user</h2>
      {/*
      if you write this you will get white screen, check clg for error message 
      <span> username is :{user.name} </span> */}

      <input onChange={e => setInput(e.target.value)} placeholder="enter a new name" />
      <button onClick={changeUser}>Change username</button>
      {/* solution */}
      {user && <span> username is :{user.name} </span>}
      {/* or put ? after user (user?.name). It is shortcut to 
      verify an object or array*/}
    </div>
  );
}

export default App;
