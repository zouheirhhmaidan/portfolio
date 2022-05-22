import React from 'react'
import CV from '../../assets/cv2.pdf'
const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn b11'>Download CV</a>
        <a href="#contact" className='btn btn-primary b1' >Let's Talk CV</a>
    </div>
  )
}

export default CTA