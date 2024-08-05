import React, { useEffect, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip'
const ProductsPanel = () => {
    const [products, setProducts] = useState([]);
    const [totalProducts, setTotalProducts] = useState(0);

    useEffect(() => {
        fetch('http://localhost:3300/api/products/')
            .then(response => response.json())
            .then(data => {
                console.log('Datos recibidos:', data.img); // Log para verificar la respuesta
                setProducts(data.data);
                setTotalProducts(data.data.length); // Usar la propiedad length del array de productos
            })
            .catch(error => {
                console.error('Error fetching product data:', error);
                // Manejo de errores
            });
    }, []);

    return (
        <div className="productsPanel">
            <div className="productos">
                <h3 className='seccionUsuario'> <FaShoppingCart /> PRODUCTOS</h3>
                <h3>Total de productos: {totalProducts}</h3>
            </div>
            <table className="productsTable">
                <thead>
                    <tr>
                        <th className='camposProd' >ID</th>
                        <th className='camposProd'>Nombre</th>
                        <th className='camposProd'>Descripción</th>
                        <th className='camposProd'>Categoría</th>
                        <th className='camposProd'>Detalle</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td className='filasProd' data-tooltip-id="my-tooltip-inline"
                                data-tooltip-content={`ID del PRODUCTO: ${product.id}`}><img className='imgProd' src={`http://localhost:3300/images/productsBD/${product.img}`} alt="ImagenProd" /></td>
                            <td className='filasProd'>{product.name}</td>
                            <td className='filasProd'>{product.description}</td>
                            <td className='filasProd'>{product.categories.join(', ')}</td>
                            <td className='filasProd'>{product.detail}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Tooltip
            id="my-tooltip-inline"
            style={{ 
                backgroundColor: "rgb(6, 91, 102)", 
                color: "#f7f7f7" ,
                padding: "20px",
                borderRadius: "5px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
                fontSize: "20px",
                fontWeight: "bold",
            }}
            />
        </div>
    );
};

export default ProductsPanel;
