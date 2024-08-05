import React, { useEffect, useState } from 'react';
import {FaList} from 'react-icons/fa';
const CategoriesPanel = () => {
    const [categoryDetails, setCategoryDetails] = useState({});
    const [totalCategories, setTotalCategories] = useState(0);

    useEffect(() => {
        fetch('http://localhost:3300/api/products/countByCategory')
            .then(response => response.json())
            .then(data => {
                console.log('Categorías recibidas:', data);
                const categoryCounts = data.meta.categories;
                const totalCount = Object.keys(categoryCounts).length;
                console.log('Total de categorías:', totalCount);
                setTotalCategories(totalCount);
                setCategoryDetails(categoryCounts);
            })
            .catch(error => {
                console.error('Error fetching category details:', error);
            });
    }, []);

    if (!categoryDetails) {
        return (
            <div className="panel">
                <h2>Categorías</h2>
                <h4>Total de categorías: {totalCategories}</h4>
                <p>Cargando...</p>
            </div>
        );
    }

    return (
        <div>
            <div className='categorias'>
            <h3 className='seccionCategoria'><FaList /> CATEGORIAS</h3>
            <h3>Total de categorías: {totalCategories}</h3>
            </div>
            <div className='categoriesPanel-details'>
                
                <table className='categoriesTable'>
                    <thead>
                        <tr>
                            <th className='campos'>Categoría</th>
                            <th className='campos'>Productos</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(categoryDetails).map(([category, count]) => (
                            <tr key={category} className='categoryItem'>
                                <td className='filasUser'>{category}</td>
                                <td className='filasUser'>{count}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CategoriesPanel;
