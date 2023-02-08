import React from 'react'
import { useGlobalContext } from '../../hook/Context'
import ColorItem from '../ColorItem/ColorItem';
import './ColorBox.css'

export default function ColorBox() {

  const { colorArr, gradientArr, } = useGlobalContext();

  return (
    <div className='colorBox'>
      {colorArr.map(item=>{
        return (
          <ColorItem item={item} />
        );
      })}
    </div>
  )
}
