import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`/api/products/${id}`);
                setProduct(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            {product ? (
                <div>
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                    <img src={product.imageUrl} alt={product.name} />
                </div>
            ) : (
                <div>Product not found</div>
            )}
        </div>
    );
};

export default ProductDetails;