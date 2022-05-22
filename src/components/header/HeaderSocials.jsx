import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'
export const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/zouheir-hmaidan-63478223a/' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com/zouheirhhmaidan' target='_blank'><FaGithub/></a>
    </div>
  )
}
