import Image from "next/image";
import LogoOne from '../public/img/logo1.png'
import LogoTwo from '../public/img/logo2.png'
import LogoThree from '../public/img/logo3.png'
import LogoFour from '../public/img/logo4.png'

const Logos = () => {
  return (
    <section className="logos section">
      <div className="logos__container container">
        <div className="logos__images grid">
          <div className="logos__image">
            <Image src={LogoOne} width={392} height={200} alt="" />
          </div>
          <div className="logos__image">
            <Image src={LogoTwo} width={435} height={200} alt="" />
          </div>
          <div className="logos__image">
            <Image src={LogoThree} width={467} height={200} alt="" />
          </div>
          <div className="logos__image">
            <Image src={LogoFour} width={493} height={200} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Logos
