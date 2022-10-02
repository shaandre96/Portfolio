import React from 'react'
import { card } from '../assets'
import styles, {layout} from '../styles'
import Button from './Button'

const CardDeal = () => {
  return (
    <section className={layout.section}> 
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better card deal <br className='sm:block hidden' /> in a few easy steps.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>With ten cards to choose from, it’s easy to find a card to suit your lifestyle and goals.</p>
        <Button styles='m-10 rounded-[10px]' />
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt='card' className='w-[100%] h-[100%]' />
      </div>
    </section>
  )
}

export default CardDeal