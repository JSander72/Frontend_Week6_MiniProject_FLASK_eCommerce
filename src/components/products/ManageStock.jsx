
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManageStock = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/api/products');
                setProducts(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching products:', error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const updateStock = async (productId, newStock) => {
        try {
            await axios.put(`/api/products/${productId}`, { stock: newStock });
            setProducts(products.map(product => 
                product.id === productId ? { ...product, stock: newStock } : product
            ));
        } catch (error) {
            console.error('Error updating stock:', error);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Manage Stock</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name} - Stock: {product.stock}
                        <button onClick={() => updateStock(product.id, product.stock + 1)}>Increase</button>
                        <button onClick={() => updateStock(product.id, product.stock - 1)}>Decrease</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ManageStock;