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
            width: "90%",
            maxWidth: '1200px', // Limita el ancho máximo del contenedor principal
        },
        productImage: {
            width: '100%', // Haz que la imagen ocupe el 100% del contenedor de la imagen
            maxWidth: '300px', // Limita el tamaño máximo de la imagen
            height: 'auto', // Mantiene las proporciones de la imagen
            borderRadius: '8px',
            objectFit: 'cover',
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
            flexDirection: 'column',
            flex: 1, // El contenedor de detalles del producto ocupa el mismo espacio que la imagen
        },
        flexer: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-start', // Alinea la imagen y los detalles en la parte superior
            gap: '20px', // Espacio entre la imagen y los detalles
        },
        middler: {
            width: '100%',
            justifyContent: 'center',
            display: 'flex',
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
    };
    

    if (!producto) return <div>Cargando...</div>;

    return (
        <div style={styles.middler}>
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
        </div>
    );
};

export default Detalle;