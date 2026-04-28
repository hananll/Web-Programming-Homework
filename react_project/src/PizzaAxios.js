import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PizzaAxios = () => {
    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        // PHP dosyanın tam URL'sini buraya yazdığından emin ol
        axios.get('https://gamferasmus.42web.io/get_pizzas.php')
            .then(response => {
                console.log("PHP'den Gelen Veri:", response.data);
                setPizzas(response.data);
            })
            .catch(error => {
                console.error('Veri çekme hatası:', error);
            });
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <h2>Pizza Listesi (Axios & İlişkisel Database)</h2>
            <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                    <tr style={{ backgroundColor: '#f2f2f2' }}>
                        <th>Pizza Adı</th>
                        <th>Kategori</th>
                        <th>Fiyat</th>
                        <th>Vejetaryen</th>
                    </tr>
                </thead>
                <tbody>
                    {pizzas.length > 0 ? (
                        pizzas.map((pizza, index) => (
                            <tr key={index}>
                                {/* Veritabanındaki yeni isimler: pname, cname, price */}
                                <td>{pizza.pname}</td>
                                <td>{pizza.cname}</td>
                                <td>{pizza.price} HUF</td>
                                <td>{pizza.vegetarian === "1" || pizza.vegetarian === 1 ? "✅ Yes" : "❌ No"}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" style={{ textAlign: 'center' }}>Veriler yükleniyor veya bulunamadı...</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default PizzaAxios;