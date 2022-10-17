import Link from 'next/link'
import LogoSvg from '../public/img/svg/logo.svg'
import FacebookSvg from '../public/img/svg/facebook.svg'
import InstagramSvg from '../public/img/svg/instagram.svg'
import PinterestSvg from '../public/img/svg/pinterest.svg'

const Footer = () => {
  return (
    <footer className="footer section">
      <div className="footer__container container grid">
        <div>
          <Link href="/">
            <a className="footer__logo">
              Holux <LogoSvg />
            </a>
          </Link>

          <p className="footer__description">
            Our vision is to make all people <br />
            the best place to live for them.
          </p>
        </div>

        <div className="footer__content">
          <div>
            <h3 className="footer__title">About</h3>
            <ul className="footer__list">
              <li className="footer__item">
                <Link href="#">
                  <a className="footer__link">About Us</a>
                </Link>
              </li>

              <li className="footer__item">
                <Link href="#">
                  <a className="footer__link">Features</a>
                </Link>
              </li>

              <li className="footer__item">
                <Link href="#">
                  <a className="footer__link">News & Blog</a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="footer__title">Company</h3>
            <ul className="footer__list">
              <li className="footer__item">
                <Link href="#">
                  <a className="footer__link">How We Work?</a>
                </Link>
              </li>

              <li className="footer__item">
                <Link href="#">
                  <a className="footer__link">Capital</a>
                </Link>
              </li>

              <li className="footer__item">
                <Link href="#">
                  <a className="footer__link">Security</a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="footer__title">Security</h3>
            <ul className="footer__list">
              <li className="footer__item">
                <Link href="">
                  <a className="footer__link">FAQs</a>
                </Link>
              </li>

              <li className="footer__item">
                <Link href="">
                  <a className="footer__link">Support center</a>
                </Link>
              </li>

              <li className="footer__item">
                <Link href="">
                  <a className="footer__link">Contact Us</a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="footer__title">Follow us</h3>
            <ul className="footer__social">
              <li className="footer__social-item">
                <Link href="https://www.facebook.com/">
                  <a className="footer__social-link" target="_blank">
                    <FacebookSvg />
                  </a>
                </Link>
              </li>

              <li className="footer__social-item">
                <Link href="https://www.instagram.com/">
                  <a className="footer__social-link" target="_blank">
                    <InstagramSvg />
                  </a>
                </Link>
              </li>

              <li className="footer__social-item">
                <Link href="https://www.pinterest.com/">
                  <a className="footer__social-link" target="_blank">
                    <PinterestSvg />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__info container">
        <span className="footer__copy">
          &#169; Bedimcode. All rigths reserved
        </span>

        <div className="footer__privacy">
          <Link href="#">
            <a className="">Terms & Agreements</a>
          </Link>

          <Link href="#">
            <a className="">Privacy Policy</a>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
