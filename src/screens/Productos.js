// Productos.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const Productos = () => {
    const [productos, setProductos] = useState([]);
    const [search, setSearch] = useState('');
    const [categorias, setCategorias] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        // Obtener productos de la API
        const fetchProductos = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/products');
                setProductos(response.data.products);
            } catch (error) {
                console.error("Error al obtener productos:", error);
            }
        };

        // Obtener categorías de la API
        const fetchCategorias = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/products/categories');
                setCategorias(response.data);
            } catch (error) {
                console.error("Error al obtener categorías:", error);
            }
        };

        fetchProductos();
        fetchCategorias();
    }, []);

    // Filtrar productos por búsqueda y categoría
    const filteredProducts = productos.filter(product => 
        product && product.title &&
        product.title.toLowerCase().includes(search.toLowerCase()) &&
        (selectedCategory ? product.category === selectedCategory : true)
    );    

    const styles = {
        container: {
            textAlign: 'center',
            padding: '20px',
            backgroundColor: '#f9f9f9',
        },
        searchInput: {
            margin: '20px 0',
            padding: '10px',
            fontSize: '16px',
            borderRadius: '20px',
            border: '1px solid #ccc',
        },
        categorySelect: {
            margin: '20px 0',
            padding: '10px',
            fontSize: '16px',
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
            <h1>Productos</h1>
            <input
                type="text"
                placeholder="Buscar productos..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={styles.searchInput}
            />
            <select
                style={styles.categorySelect}
                onChange={e => setSelectedCategory(e.target.value)}
                value={selectedCategory}
            >
                <option value="">Todas las categorías</option>
                {categorias.map(category => (
                    <option key={category.slug} value={category.slug}>{category.name}</option>
                ))}
            </select>
            <div style={styles.productGrid}>
                {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Productos;