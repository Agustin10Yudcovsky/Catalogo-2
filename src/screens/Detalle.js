// Detalle.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Detalle = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        const fetchProducto = async () => {
            try {
                const response = await axios.get(`https://dummyjson.com/products/${id}`);
                setProducto(response.data);
            } catch (error) {
                console.error("Error al obtener el producto:", error);
            }
        };

        fetchProducto();
    }, [id]);

    const styles = {
        container: {
            textAlign: 'center',
            padding: '20px',
            backgroundColor: '#f9f9f9',
        },
        productImage: {
            maxWidth: '20%',
            borderRadius: '8px',
            objectFit: "cover",     
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        },
        productName: {
            fontSize: '24px',
            fontWeight: 'bold',
            marginBottom: '30px',
            textAlign: "left",
        },
        productDescription: {
            fontSize: '16px',
            marginBottom: '20px',
        },
        productDetails: {
            marginLeft: '20px',
            textAlign: 'left',
            display: 'flex',
            flexDirection: "column",
            justifyContent: "space-around"
        },
        reviewsContainer: {
            marginTop: '30px',
            textAlign: 'left',
        },
        review: {
            marginBottom: '10px',
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '10px',
        },
        flexer:{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center"
        }
    };

    if (!producto) return <div>Cargando...</div>;

    return (
        <div style={styles.container}>
            <h1 style={styles.productName}>{producto.title}</h1>
            <div style={styles.flexer}>
                <img src={producto.images[0]} alt={producto.title} style={styles.productImage} />
                <div style={styles.productDetails}>
                    <p><strong>Precio:</strong> ${producto.price}</p>
                    <p><strong>Marca:</strong> {producto.brand}</p>
                    <p><strong>Categoría:</strong> {producto.category}</p>
                    <p><strong>Calificación:</strong> {producto.rating}</p>
                    <p><strong>Estado de disponibilidad:</strong> {producto.availabilityStatus}</p>
                    <p><strong>Política de devolución:</strong> {producto.returnPolicy}</p>
                    <p><strong>Información de envío:</strong> {producto.shippingInformation}</p>
                </div>
            </div>
            <p style={styles.productDescription}>{producto.description}</p>
            <div style={styles.reviewsContainer}>
                <h2>Opiniones</h2>
                {producto.reviews.map((review, index) => (
                    <div key={index} style={styles.review}>
                        <p><strong>{review.reviewerName}</strong> - {review.rating} estrellas</p>
                        <p>{review.comment}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Detalle;