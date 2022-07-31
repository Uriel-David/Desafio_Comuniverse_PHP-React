import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ProductUpdate = () => {
    const {register, handleSubmit } = useForm();
    const [product, setProduct] = useState([]);
    const product_id = parseInt(useParams().product_id);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/stock/${product_id}`)
            .then(response => {
                setProduct(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [product_id]);

    const onSubmit = async data => {
        await axios.put(`http://127.0.0.1:8000/api/stock/${product_id}`, {
            product_name: data.product_name,
            product_price: data.product_price,
            product_description: data.product_description,
            product_stock: data.product_stock
        })
        .then(response => {
            console.log(response);
            window.location.href="/";
        })
        .catch(error => {
            console.log(error);
        });
    }

    return (
        <div>
            <div className='container form-axios'>
                <Form action='/update' onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3" controlId="product_name">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control type="text" name='product_name' {...register('product_name', { required: true })} min={1} defaultValue={product.product_name} placeholder="Name of product" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="product_price">
                        <Form.Label>Price:</Form.Label>
                        <Form.Control type="decimal" name='product_price' {...register('product_price', { required: true, minLength: 0.01 })} defaultValue={product.product_price} placeholder="Price of product" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="product_description">
                        <Form.Label>Description:</Form.Label>
                        <Form.Control type="text" {...register('product_description', { required: true })} min={1} defaultValue={product.product_description} placeholder="Description of product" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="product_stock">
                        <Form.Label>Stock:</Form.Label>
                        <Form.Control type="number" {...register('product_stock', { required: true })} min={0} defaultValue={product.product_stock} placeholder="Stock of product" required />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>

            <Link to={`/`}>
                <button className='btn btn-secondary'>Back</button>
            </Link>
        </div>
    );
}

export default ProductUpdate;