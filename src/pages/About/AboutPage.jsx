import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

function AboutPage() {
  const [miqdor, setMiqdor] = useState(0);
  const [input, setInput] = useState("");
  const [mahsulotlar, setMahsulotlar] = useState([]);
  const [productsName, setProductName] = useState("");
  const [producNarx, setProductNarx] = useState("");
  const [productKg, setProductKg] = useState("");

  

  


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

      
     
      
      
    </div>
  );
}

export default AboutPage;
