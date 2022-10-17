import Image from 'next/image'
import Accordion from './Accordion'
import { AccordionData } from '../models/AccordionData'
import ValueImage from '../public/img/value.jpg'
import ShieldSvg from '../public/img/svg/shield.svg'
import ArrowDownSvg from '../public/img/svg/arrow-down.svg'
import XSquareSvg from '../public/img/svg/xsquare.svg'
import ChartSvg from '../public/img/svg/chart.svg'
import CheckSvg from '../public/img/svg/check.svg'

const Value = () => {
  const accordionList: AccordionData[] = [
    {
      id: 1,
      title: 'Best interest rates on the market',
      iconArrow: <ArrowDownSvg />,
      icon: <ShieldSvg />,
      description:
        'Price we provides is the best for you, we guarantee no price changes on your property due to various unexpected costs that may come.'
    },
    {
      id: 2,
      title: 'Prevent unstable prices',
      iconArrow: <ArrowDownSvg />,
      icon: <XSquareSvg />,
      description:
        'Price we provides is the best for you, we guarantee no price changes on your property due to various unexpected costs that may come.'
    },
    {
      id: 3,
      title: 'Best prices on the market',
      iconArrow: <ArrowDownSvg />,
      icon: <ChartSvg />,
      description:
        'Price we provides is the best for you, we guarantee no price changes on your property due to various unexpected costs that may come.'
    },
    {
      id: 4,
      title: 'Security of your data',
      iconArrow: <ArrowDownSvg />,
      icon: <CheckSvg />,
      description:
        'Price we provides is the best for you, we guarantee no price changes on your property due to various unexpected costs that may come.'
    }
  ]

  return (
    <section className="value section" id="value">
      <div className="value__container container grid">
        <div className="value__images">
          <div className="value__orbe"></div>

          <div className="value__img">
            <Image src={ValueImage} width={640} height={798} alt="" />
          </div>
        </div>

        <div className="value__content">
          <div className="value__data">
            <span className="section__subtitle">Our Value</span>
            <h2 className="section__title">
              Value We Give To You<span>.</span>
            </h2>
            <p className="value__description">
              We always ready to help by providing the best service for you. We
              believe a good place to live can make your life better.
            </p>
          </div>

          <Accordion items={accordionList} />
        </div>
      </div>
    </section>
  )
}

export default Value
