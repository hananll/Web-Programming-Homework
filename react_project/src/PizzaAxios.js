import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PizzaAxios() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    // Kendi localhost URL'ini buraya yaz
    axios.get('http://localhost/pizza_homework/get_pizzas.php')
      .then(res => setPizzas(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h3>Pizzas from MySQL (Axios)</h3>
      <ul>
        {pizzas.map(p => (
          <li key={p.id}>{p.pname} - {p.categoryname}</li>
        ))}
      </ul>
    </div>
  );
}
export default PizzaAxios;