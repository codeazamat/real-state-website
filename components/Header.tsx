import Link from 'next/link'
import HomeSolid from '../public/img/svg/home-solid.svg'
import HomeLine from '../public/img/svg/home-line.svg'
import Building from '../public/img/svg/building.svg'
import Award from '../public/img/svg/award.svg'
import Phone from '../public/img/svg/phone.svg'
import {useEffect, useState} from 'react'

const Header = () => {
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    const scrollHeader = () => {
      // console.log(window.scrollY)
      if (window.scrollY >= 50) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    }

    window.addEventListener('scroll', scrollHeader)
  }, [])

  return (
    <header className={`header ${scroll ? 'scroll-header' : ''}`}>
      <nav className="nav container">
        <Link href="/">
          <a className="nav__logo">
            Holux <HomeSolid />
          </a>
        </Link>

        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <Link href="#home">
                <a className="nav__link">
                  <HomeLine />
                  <span>Home</span>
                </a>
              </Link>
            </li>

            <li className="nav__item">
              <Link href="#popular">
                <a className="nav__link">
                  <Building />
                  <span>Residences</span>
                </a>
              </Link>
            </li>

            <li className="nav__item">
              <Link href="#value">
                <a className="nav__link">
                  <Award />
                  <span>Value</span>
                </a>
              </Link>
            </li>

            <li className="nav__item">
              <Link href="#contact">
                <a className="nav__link">
                  <Phone />
                  <span>Contact</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>

        <Link href="#">
          <a className="button nav__button">Subscribe</a>
        </Link>
      </nav>
    </header>
  )
}

export default Header
