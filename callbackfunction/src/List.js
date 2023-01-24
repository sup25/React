import React, { useState, useEffect } from 'react'


export default function List({ getItems }) {

    const [items, setItems] = useState([]);

    useEffect(() => {

        setItems(getItems(1))
        console.log('Updating Item')
    }, [getItems])

    const ss = {
        fontSize: '28px',
        marginTop: '20px',
        marginLeft: '40px',
        fontWeight: 'bold'

    }
    return items.map(item => <div style={ss} key={item}> {item}</div>)






}


