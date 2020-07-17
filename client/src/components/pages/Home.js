import React, { useContext,useEffect } from 'react'
import AuthContext from '../../context/auth/authContext'
import Card from '../layout/Card/Card'
// import CardItem from '../layout/Card/CardItem'

const Home = () => {
    const authContext = useContext(AuthContext);

    useEffect(()=> {
        authContext.loadUser();
        // eslint-disable-next-line
    },[])
    return (
        <div className="grid-2">
            <Card />
     
        </div>
    )
}

export default Home;