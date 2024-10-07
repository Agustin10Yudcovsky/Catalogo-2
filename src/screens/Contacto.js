import React from 'react';

const Contacto = () => {
    const styles = {
        container: {
            textAlign: 'center',
            padding: '20px',
            backgroundColor: '#f9f9f9',
        },
        form: {
            maxWidth: '400px',
            margin: '0 auto',
            padding: '20px',
            border: '1px solid #ddd',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            backgroundColor: 'white',
            display: 'flex', // Aplicar flexbox
            flexDirection: 'column', // Organizar elementos en columna
            alignItems: 'flex-start', // Alinear elementos al inicio
        },
        label: {
            marginBottom: '8px',
            fontWeight: 'bold',
            textAlign: 'left',
        },
        input: {
            width: '100%',
            padding: '10px',
            marginBottom: '15px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            boxSizing: 'border-box', // Asegurarse de que el padding no sobresalga
        },
        textarea: {
            width: '100%',
            padding: '10px',
            marginBottom: '15px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            minHeight: '100px',
            boxSizing: 'border-box', // Asegurarse de que el padding no sobresalga
        },
        button: {
            padding: '10px 15px',
            border: 'none',
            borderRadius: '4px',
            backgroundColor: 'gray',
            color: 'white',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'background-color 0.2s',
        },
    };

    return (
        <div style={styles.container}>
            <h1>Contacto</h1>
            <form style={styles.form}>
                <label htmlFor="name" style={styles.label}>Nombre:</label>
                <input type="text" id="name" required style={styles.input} />
                <label htmlFor="email" style={styles.label}>Email:</label>
                <input type="email" id="email" required style={styles.input} />
                <label htmlFor="message" style={styles.label}>Mensaje:</label>
                <textarea id="message" required style={styles.textarea}></textarea>
                <button type="submit" style={styles.button}>Enviar</button>
            </form>
        </div>
    );
};

export default Contacto;