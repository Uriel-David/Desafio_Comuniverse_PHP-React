import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ProductCreate = () => {
    const {register, handleSubmit } = useForm();

    const onSubmit = async data => {
        await axios.post('http://127.0.0.1:8000/api/stock', {
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
                <Form action='/create' onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3" controlId="product_name">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control type="text" name='product_name' {...register('product_name', { required: true })} min={1} placeholder="Name of product" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="product_price">
                        <Form.Label>Price:</Form.Label>
                        <Form.Control type="decimal" name='product_price' {...register('product_price', { required: true, minLength: 0.01 })} placeholder="Price of product" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="product_description">
                        <Form.Label>Description:</Form.Label>
                        <Form.Control type="text" {...register('product_description', { required: true })} min={1} placeholder="Description of product" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="product_stock">
                        <Form.Label>Stock:</Form.Label>
                        <Form.Control type="number" {...register('product_stock', { required: true })} min={0} placeholder="Stock of product" required />
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

export default ProductCreate;