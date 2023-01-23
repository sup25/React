
import { useContext, useEffect } from 'react'
import MainContext from '../context/main/MainContext'
const Home = () => {
    //we create a function to acess MainContext
    const x = useContext(MainContext)

    useEffect(() => {
        x.update();
    }, [x])

    return (
        //here we pass the object property that we made in MainState
        <div><h1>Home of {x.first.name} lives in {x.first.place}</h1></div>
    )
}

export default Home