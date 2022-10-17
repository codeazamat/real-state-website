import { useRef } from 'react'
import Image from 'next/image'
import PopularOne from '../public/img/popular1.jpg'
import PopularTwo from '../public/img/popular2.jpg'
import PopularThree from '../public/img/popular3.jpg'
import PopularFour from '../public/img/popular4.jpg'
import PopularFive from '../public/img/popular5.jpg'
import ArrowRight from '../public/img/svg/arrow-right.svg'
import ArrowLeft from '../public/img/svg/arrow-left.svg'

import SwiperCore from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

const Popular = () => {
  const swiperRef = useRef<SwiperCore>()

  return (
    <section className="popular section" id="popular">
      <div className="container">
        <span className="section__subtitle">Best Choice</span>
        <h2 className="section__title">
          Popular Residences<span>.</span>
        </h2>

        <div className="popular__container">
          <div>
            <Swiper
              spaceBetween={32}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              loop={true}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper
              }}
            >
              <SwiperSlide>
                <article className="popular__card">
                  <div className="popular__img">
                    <Image src={PopularOne} width={540} height={427} alt="" />
                  </div>

                  <div className="popular__data">
                    <h2 className="popular__price">
                      <span>$</span>66,356
                    </h2>
                    <h3 className="popular__title">Garden City Assat</h3>
                    <p className="popular__description">
                      Street The Garden City Of Miraflores, Lima - Perú Av. Sol
                      #9876
                    </p>
                  </div>
                </article>
              </SwiperSlide>

              <SwiperSlide>
                <article className="popular__card">
                  <div className="popular__img">
                    <Image src={PopularTwo} width={540} height={427} alt="" />
                  </div>

                  <div className="popular__data">
                    <h2 className="popular__price">
                      <span>$</span>35,159
                    </h2>
                    <h3 className="popular__title">Gables Luxurious House</h3>
                    <p className="popular__description">
                      Street The Garden City Of Miraflores, Lima - Perú Av. Sol
                      #9876
                    </p>
                  </div>
                </article>
              </SwiperSlide>

              <SwiperSlide>
                <article className="popular__card">
                  <div className="popular__img">
                    <Image src={PopularThree} width={540} height={427} alt="" />
                  </div>

                  <div className="popular__data">
                    <h2 className="popular__price">
                      <span>$</span>75,043
                    </h2>
                    <h3 className="popular__title">Garden Orchard City</h3>
                    <p className="popular__description">
                      Street The Garden City Of Miraflores, Lima - Perú Av. Sol
                      #9876
                    </p>
                  </div>
                </article>
              </SwiperSlide>

              <SwiperSlide>
                <article className="popular__card">
                  <div className="popular__img">
                    <Image src={PopularFour} width={540} height={427} alt="" />
                  </div>

                  <div className="popular__data">
                    <h2 className="popular__price">
                      <span>$</span>62,024
                    </h2>
                    <h3 className="popular__title">Luxurious City Garden</h3>
                    <p className="popular__description">
                      Street The Garden City Of Miraflores, Lima - Perú Av. Sol
                      #9876
                    </p>
                  </div>
                </article>
              </SwiperSlide>

              <SwiperSlide>
                <article className="popular__card">
                  <div className="popular__img">
                    <Image src={PopularFive} width={540} height={427} alt="" />
                  </div>

                  <div className="popular__data">
                    <h2 className="popular__price">
                      <span>$</span>47,043
                    </h2>
                    <h3 className="popular__title">Aliva Private Garden</h3>
                    <p className="popular__description">
                      Street The Garden City Of Miraflores, Lima - Perú Av. Sol
                      #9876
                    </p>
                  </div>
                </article>
              </SwiperSlide>
            </Swiper>

            <button className="prev" onClick={() => swiperRef.current?.slidePrev()}>
              <ArrowLeft />
            </button>
            <button className="next" onClick={() => swiperRef.current?.slideNext()}>
              <ArrowRight />
            </button>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Popular
