import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        await axios.get(`${process.env.REACT_APP_HOST_URL_API}/stock`)
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const deleteProduct = async id => {
        await axios.delete(`${process.env.REACT_APP_HOST_URL_API}/stock/${id}`)
        .then(response => {
            console.log(response);
            getProducts();
        })
        .catch(error => {
            console.log(error);
        });
    };

    const downloadListProducts = async () => {
        await axios.get(`${process.env.REACT_APP_HOST_URL_API}/csv`)
        .then(response => {
            const blob = new Blob([response.data], {
                type: 'text/csv;charset=utf-8;'
            });
            const url = window.URL.createObjectURL(blob);
            window.open(url);
        })
        .catch(error => {
            console.log(error);
        });
    };

    return (
        <div className='container'>
            { products.length > 0 ?
                <button id='download-csv' className='btn btn-light mb-4' onClick={() => downloadListProducts()}>Download List (Format CSV)</button>
            : ''}

            <Table className='text-center' striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Product ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Stock</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { products.map(product => {
                        return (
                            <tr key={product.product_id}>
                                <td>{product.product_id}</td>
                                <td>{product.product_name}</td>
                                <td>{product.product_price}</td>
                                <td>{product.product_description}</td>
                                <td>{product.product_stock}</td>
                                <td>
                                    <Link to={`/update/${product.product_id}`}>
                                        <button className='btn btn-info text-white'>Update Product</button>
                                    </Link>
                                    &nbsp;
                                    <button id='btn-delete-product' className='btn btn-danger text-white' onClick={() => deleteProduct(product.product_id)}>Delete Product</button>
                                </td>
                            </tr>
                        );
                    }) }
                </tbody>
            </Table>

            <Link to={`/create`}>
                <button id='create-new-product' className='btn btn-success mb-3'>Create New Product</button>
            </Link>
        </div>
    );
}

export default ProductList;