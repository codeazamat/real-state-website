import Image from 'next/image'
import Map from '../public/img/svg/map.svg'
import HomeImage from '../public/img/home.jpg'

const Hero = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__data">
          <h1 className="home__title">
            Discover <br /> Most Suitable <br /> Property
          </h1>
          <p className="home__description">
            Find a variety of properties that suit you very easily, forget all
            difficulties in finding a residence for you
          </p>

          <form className="home__search">
            <Map />
            <input
              className="home__search-input"
              type="search"
              placeholder="Search by location..."
            />
            <button className="button">Search</button>
          </form>

          <div className="home__value">
            <div>
              <h1 className="home__value-number">
                9K <span>+</span>
              </h1>
              <span className="home__value-description">
                Premium <br /> Product
              </span>
            </div>

            <div>
              <h1 className="home__value-number">
                2K <span>+</span>
              </h1>
              <span className="home__value-description">
                Happy <br /> Customer
              </span>
            </div>

            <div>
              <h1 className="home__value-number">
                28K <span>+</span>
              </h1>
              <span className="home__value-description">
                Awards <br /> Winning
              </span>
            </div>
          </div>
        </div>

        <div className="home__images">
          <div className="home__orbe"></div>

          <div className="home__img">
            <Image src={HomeImage} width={490} height={713} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
