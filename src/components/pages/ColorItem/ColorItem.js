import React, { useState, useEffect } from 'react'
import './ColorItem.css'
import { IoMdCopy } from 'react-icons/all'

export default function ColorItem({ item }) {
  const [isCopy, setIsCopy] = useState(false);

  const color = `#${item.hex}`;
  let textColor = item.type === 'tint' ? '#000' : '#fff';
  textColor = item.type === 'tint' && item.weight > 50 ? '#000' : '#fff';

  const copyText = (text) => {
   const input = document.createElement('input');
   input.value = text;
   document.body.appendChild(input);
   input.select();
   document.execCommand('copy');
   input.remove()
    setIsCopy(true);

    setTimeout(() => {
      setIsCopy(false);
    }, 2000);
  }



  return (
    <div className='colorItem ' onClick={() => copyText(color)} key={color} style={{ backgroundColor: color }}>
      <small style={{ color: textColor }}>{item.weight}%</small>
      <p style={{ color: textColor }}>{color}</p>

      <div className="copyBox ripple" >
        <IoMdCopy color={textColor} size={70} />
      </div>
      {isCopy && (
        <div className="copyText">
          Copied !
        </div>
      )}

    </div>
  )
}
