import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/stock')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const deleteProduct = () => {
        console.log("product deleted!");
    };

    return (
        <div>
            <Table striped bordered hover responsive>
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
                                    <button className='btn btn-danger text-white' onClick={() => deleteProduct()}>Delete Product</button>
                                </td>
                            </tr>
                        );
                    }) }
                </tbody>
            </Table>

            <Link to={`/create`}>
                <button className='btn btn-primary' >Create New Product</button>
            </Link>
        </div>
    );
}

export default ProductList;