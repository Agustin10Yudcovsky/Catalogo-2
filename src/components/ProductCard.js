import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const navigate = useNavigate();
    
    const styles = {
        card: {
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '10px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.2s, box-shadow 0.2s',
            cursor: 'pointer',
        },
        image: {
            maxWidth: '100%',
            borderRadius: '8px',
            objectFit: 'cover', // Esto evitará que la imagen se deforme
        },
        name: {
            margin: '10px 0 0',
            fontSize: '18px',
        },
    };

    const handleClick = () => {
        navigate(`/detalle/${product.id}`);
    };

    return (
        <div style={styles.card} onClick={handleClick}>
            <h3 style={styles.name}>{product.title}</h3>
            {product.images && product.images.length > 0 && (
                <img src={product.images[0]} alt={product.title} style={styles.image} />
            )}
        </div>
    );
};

export default ProductCard;