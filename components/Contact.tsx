import Image from 'next/image'
import ContactImage from '../public/img/contact.png'
import CallSvg from '../public/img/svg/call.svg'
import MessageSvg from '../public/img/svg/message.svg'
import VideoSvg from '../public/img/svg/video.svg'
import EnveloSvg from '../public/img/svg/envelo.svg'

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <div className="contact__container container grid">
        <div className="contact__images">
          <div className="contact__orbe"></div>

          <div className="contact__img">
            <Image src={ContactImage} width={640} height={798} alt="" />
          </div>
        </div>

        <div className="contact__content">
          <div className="contact__data">
            <span className="section__subtitle">Contact Us</span>
            <h2 className="section__title">
              Easy to Contact us<span>.</span>
            </h2>
            <p className="contact__description">
              Is there a problem finding your dream home? Need a guide in buying
              first home? or need a consultation on residential issues? just
              contact us.
            </p>
          </div>

          <div className="contact__card">
            <div className="contact__card-box">
              <div className="contact__card-info">
                <CallSvg />
                <div>
                  <h3 className="contact__card-title">Call</h3>
                  <p className="contact__card-description">022.321.165.19</p>
                </div>
              </div>
              <button className="button contact__card-button">Call Now</button>
            </div>

            <div className="contact__card-box">
              <div className="contact__card-info">
                <MessageSvg />
                <div>
                  <h3 className="contact__card-title">Chat</h3>
                  <p className="contact__card-description">022.321.165.19</p>
                </div>
              </div>
              <button className="button contact__card-button">Chat Now</button>
            </div>

            <div className="contact__card-box">
              <div className="contact__card-info">
                <VideoSvg />
                <div>
                  <h3 className="contact__card-title">Video Call</h3>
                  <p className="contact__card-description">022.321.165.19</p>
                </div>
              </div>
              <button className="button contact__card-button">Video Call Now</button>
            </div>

            <div className="contact__card-box">
              <div className="contact__card-info">
                <EnveloSvg />
                <div>
                  <h3 className="contact__card-title">Message</h3>
                  <p className="contact__card-description">022.321.165.19</p>
                </div>
              </div>
              <button className="button contact__card-button">Message Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
