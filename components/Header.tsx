import Link from 'next/link'
import { Link as ScrollLink } from 'react-scroll'
import LogoSvg from '../public/img/svg/logo.svg'
import HomeLine from '../public/img/svg/home-line.svg'
import Building from '../public/img/svg/building.svg'
import Award from '../public/img/svg/award.svg'
import Phone from '../public/img/svg/phone.svg'
import { useEffect, useState } from 'react'

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
        <ScrollLink
          href="#home"
          className="nav__logo"
          to="home"
          hashSpy={true}
          spy={true}
          smooth={true}
          duration={500}
        >
          Holux <LogoSvg />
        </ScrollLink>

        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <ScrollLink
                href="#home"
                className="nav__link"
                activeClass="active"
                to="home"
                hashSpy={true}
                spy={true}
                smooth={true}
                duration={500}
                offset={-5}
              >
                <HomeLine />
                <span>Home</span>
              </ScrollLink>
            </li>

            <li className="nav__item">
              <ScrollLink
                href="#popular"
                className="nav__link"
                activeClass="active"
                to="popular"
                hashSpy={true}
                spy={true}
                smooth={true}
                duration={500}
                offset={-5}
              >
                <Building />
                <span>Residences</span>
              </ScrollLink>
            </li>

            <li className="nav__item">
              <ScrollLink
                href="#value"
                className="nav__link"
                activeClass="active"
                to="value"
                hashSpy={true}
                spy={true}
                smooth={true}
                duration={500}
                offset={-5}
              >
                <Award />
                <span>Value</span>
              </ScrollLink>
            </li>

            <li className="nav__item">
              <ScrollLink
                href="#contact"
                className="nav__link"
                activeClass="active"
                to="contact"
                hashSpy={true}
                spy={true}
                smooth={true}
                duration={500}
                offset={-5}
              >
                <Phone />
                <span>Contact</span>
              </ScrollLink>
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
