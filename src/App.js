import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './screens/Home';
import Productos from './screens/Productos';
import Detalle from './screens/Detalle';
import Contacto from './screens/Contacto';

function App() {
    const [hoveredItem, setHoveredItem] = useState(null); // Estado para el item hovered
    const [menuOpen, setMenuOpen] = useState(false); // Estado para el menú hamburguesa

    const styles = {
        container: {
            fontFamily: 'Arial, sans-serif',
            margin: '0',
            padding: '0',
            backgroundColor: '#f9f9f9',
        },
        header: {
            backgroundColor: 'gray',
            padding: '10px 20px',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between', // Espacio entre título y botón
        },
        title: {
            marginLeft: '20px',
            fontSize: '40px',
            fontWeight: 'bold',
            color: 'white',
        },
        nav: {
            display: 'flex',
            justifyContent: 'center',
            listStyleType: 'none',
            padding: '0',
        },
        navLink: {
            display: 'block', // Hacer que el enlace ocupe todo el li
            textDecoration: 'none',
            color: 'black',
            fontWeight: 'bold',
            fontSize: '24px',
            padding: '15px 20px', // Padding para aumentar el área clicable
            transition: 'transform 0.2s ease', // Transición para la animación
        },
        navItem: {
            borderRadius: 15,
            margin: '0px 10px',
            transition: 'background-color 0.2s ease', // Transición para el cambio de color
            backgroundColor: 'white',
        },
        hamburger: {
            display: 'none',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '30px',
            height: '20px',
            cursor: 'pointer',
        },
        line: {
            height: '3px',
            backgroundColor: 'white',
            transition: '0.3s',
        },
        mobileMenu: {
            display: menuOpen ? 'block' : 'none',
            position: 'absolute',
            top: '60px', // Espacio debajo del encabezado
            left: 0,
            backgroundColor: 'gray',
            width: '100%',
            zIndex: 1000,
            textAlign: 'center',
        },
        mobileNavItem: {
            padding: '15px',
        },
        '@media (max-width: 768px)': {
            nav: {
                display: 'none', // Oculta el menú de navegación normal
            },
            hamburger: {
                display: 'flex', // Muestra el menú hamburguesa en pantallas pequeñas
            },
        },
    };

    return (
        <Router>
            <div style={styles.container}>
                <header style={styles.header}>
                    <div style={styles.title}>Catálogo</div> {/* Título de la página */}
                    <div
                        style={styles.hamburger}
                        onClick={() => setMenuOpen(!menuOpen)} // Alterna el estado del menú
                    >
                        <div style={styles.line}></div>
                        <div style={styles.line}></div>
                        <div style={styles.line}></div>
                    </div>
                    <nav>
                        <ul style={styles.nav}>
                            {['/', '/productos', '/contacto'].map((path, index) => {
                                const labels = ['Home', 'Productos', 'Contacto'];
                                const isHovered = hoveredItem === index; // Determina si el item está hovered

                                return (
                                    <li
                                        key={index}
                                        style={{
                                            ...styles.navItem,
                                            backgroundColor: isHovered ? 'darkgray' : 'lightgray', // Cambia el color al pasar el ratón
                                        }}
                                        onMouseEnter={() => setHoveredItem(index)} // Cambia el hovered
                                        onMouseLeave={() => setHoveredItem(null)} // Restablece el hovered
                                    >
                                        <Link
                                            to={path}
                                            style={styles.navLink}
                                            onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-5px)')}
                                            onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
                                        >
                                            {labels[index]}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                        {menuOpen && ( // Muestra el menú desplegable
                            <ul style={styles.mobileMenu}>
                                {['/', '/productos', '/contacto'].map((path, index) => {
                                    const labels = ['Home', 'Productos', 'Contacto'];
                                    return (
                                        <li key={index} style={styles.mobileNavItem}>
                                            <Link to={path} style={styles.navLink} onClick={() => setMenuOpen(false)}>
                                                {labels[index]}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        )}
                    </nav>
                </header>
                <main style={styles.main}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/productos" element={<Productos />} />
                        <Route path="/detalle/:id" element={<Detalle />} />
                        <Route path="/contacto" element={<Contacto />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;