import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <a style={{height: '15px'}} href='https://www.linkedin.com/in/andre-sha/' target='_blank'>
            <BsLinkedin />
          </a>
        </div>
        <div>
          <a style={{height: '15px'}} href='https://github.com/shaandre96/Portfolio' target='_blank'>
            <BsGithub />
          </a>
        </div>
    </div>
  )
}

export default SocialMedia