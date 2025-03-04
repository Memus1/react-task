import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

function AboutPage() {
  const [miqdor, setMiqdor] = useState(0);
  const [input, setInput] = useState("");
  const [mahsulotlar, setMahsulotlar] = useState([]);
  const [productsName, setProductName] = useState("");
  const [producNarx, setProductNarx] = useState("");
  const [productKg, setProductKg] = useState("");

  const AddProduct = () => {
    const cost = parseFloat(producNarx) * parseFloat(productKg);

    if (miqdor !== null && cost > miqdor) {
      alert("Pul yetarli emas");
      return;
    }

    if (productsName && producNarx && productKg) {
      setMahsulotlar([
        ...mahsulotlar,
        {
          name: productsName,
          price: parseFloat(producNarx),
          kg: parseFloat(productKg),
        },
      ]);
      setMiqdor((prev) =>Number(prev) - cost); 

      
      setProductName("");
      setProductNarx("");
      setProductKg("");
    }
   };
   const deleteProduct=(index, cost)=>{
    setMahsulotlar(mahsulotlar.filter((_, i)=> i !== index))
    setMiqdor((prev)=> (isNaN(prev) ? 0 : Number(prev) + cost))
   }
 

  


  return (
    <div>
      
      <div className="jami">
        <input
          className="inp"
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Pul miqdori"
          value={input}
        />
        <button className="btn" onClick={() => setMiqdor(Number(input) || 0)}>
          Enter
        </button>
        <h1>Jami pul: {miqdor}so'm</h1> 
      </div>

      <div className="products">
        <input
          value={productsName}
          onChange={(e) => setProductName(e.target.value)}
          type="text"
          placeholder="Mahsulot nomi"
          className="inp"
        />
        <input
          value={producNarx}
          onChange={(e) => setProductNarx(e.target.value)}
          type="number"
          placeholder="Narxi"
          className="inp"
        />
        <input
          value={productKg}
          onChange={(e) => setProductKg(e.target.value)}
          type="number"
          placeholder="Kg"
          className="inp"
        />
        <button onClick={AddProduct} className="btn">
          Add
        </button>
      </div>

      
      <div className="p-card">
        {mahsulotlar.map((mahsulot, index) => (
          <div key={index} className="product-list">
            <h2>{mahsulot.name}</h2> 
            <h3>Narxi: {mahsulot.price} so'm</h3> 
            <h3>Kg: {mahsulot.kg}</h3> 
            <p>Jami: {mahsulot.price * mahsulot.kg} so'm</p> 
            <button  onClick={() => deleteProduct(index, mahsulot.price * mahsulot.kg)}>
              <FaTrash/>
            </button>
            </div>
        ))}
      </div>

      
     
      
      
    </div>
  );
}

export default AboutPage;
