import React, { useEffect, useState } from 'react';
import UsersPanel from './UsersPanel';
import ProductsPanel from './ProductsPanel';
import CategoriesPanel from './CategoriesPanel';
import LastCreatedPanel from './LastCreatedPanel';


const Dashboard = () => {
    const [totalUsers, setTotalUsers] = useState(0);
    const [totalProducts, setTotalProducts] = useState(0);
    const [categories, setCategories] = useState({});
    const [lastUser, setLastUser] = useState(null);
    const [lastProduct, setLastProduct] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3300/api/users/')
            .then(response => response.json())
            .then(data => {
                console.log('Datos de usuarios recibidos:', data);
                setTotalUsers(data.count);
                setLastUser(data.users[data.users.length - 1]);
            });

         fetch('http://localhost:3300/api/products/')
             .then(response => response.json())
             .then(data => {
                 setTotalProducts(data.count);
                 setCategories(data.countByCategory);
                 setLastProduct(data.products[data.products.length - 1]);
             });
    }, []);

    return (
        <div>
            <h1 className="dashboardTexto">DASHBOARD</h1>
            <div className="dashBoard-top">
                <div>
                    <UsersPanel totalUsers={totalUsers} />
                    <LastCreatedPanel lastUser={lastUser} />
                    <CategoriesPanel categories={categories} />
                </div>
                <div className="productTable">
                    <ProductsPanel totalProducts={totalProducts} />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
