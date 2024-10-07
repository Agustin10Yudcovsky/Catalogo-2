// Home.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const Home = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/products');
                const allProducts = response.data.products;
                const randomProducts = allProducts.sort(() => 0.5 - Math.random()).slice(0, 6);
                setProductos(randomProducts);
                console.log(randomProducts);
            } catch (error) {
                console.error("Error al obtener productos:", error);
            }
        };

        fetchProductos();
    }, []);

    const styles = {
        container: {
            textAlign: 'center',
            padding: '20px',
            backgroundColor: '#f9f9f9',
        },
        productGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
            gap: '20px',
            marginTop: '20px',
        },
    };

    return (
        <div style={styles.container}>
            <h1>Bienvenido a nuestro Catálogo</h1>
            <div style={styles.productGrid}>
                {productos.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Home;