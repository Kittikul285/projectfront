import React from 'react'
import './DescriptionBox.css'

function DescriptionBox() {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">คำอธิบาย</div>
            <div className="descriptionbox-nav-box fade">รีวิว (112)</div>
        </div>
        <div className="descriptionbox-description">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos odit eaque nobis sapiente veniam quae laborum, sequi commodi voluptas dolorem.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, ea atque maxime veniam adipisci pariatur voluptatum qui eum minus aliquam libero saepe illo quaerat porro quidem dicta consequatur incidunt? Earum.</p>
        </div>
    </div>
  )
} 

export default DescriptionBox