import { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductCreate = () => {
    useEffect(() => {
        /* axios.get('http://127.0.0.1:8000/api/stock')
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            }); */
    }, []);

    return (
        <>Product Create</>
    );
}

export default ProductCreate;