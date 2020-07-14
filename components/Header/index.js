import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'

const Header = () => {
  return (
    <React.Fragment>
      <div className={styles.wrapper}>
        <div className='container mx-auto'>
          <Link href='/'>
            <a><img className='mx-auto' src='/logo_palpiteaqui.png' alt='PalpiteBox' /></a>
          </Link>
        </div>
        </div>
    </React.Fragment>
  )
}
export default Header
