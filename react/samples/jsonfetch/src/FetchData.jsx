import React, { useEffect, useState } from 'react'
import JSONToTable from './JsonToTable';

function FetchData({ resource }) {

    const [items, setItems] = useState([]);


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resource}`)
            .then((response) => response.json())
            .then((json) => setItems(json));
    }, [resource]);

    return <JSONToTable items={items} />
}

export default FetchData