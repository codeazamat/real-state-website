import Link from "next/link";

const Subscribe = () => {
  return (
    <section className="subscribe section">
      <div className="subscribe__container container">
        <h1 className="subscribe__title">Get Started with Holux</h1>
        <p className="subscribe__description">
          Subscribe and find super attractive price quotes from us, Find your
          residence soon
        </p>
        <Link href="#">
          <a className="button subscribe__button">Get Started</a>
        </Link>
      </div>
    </section>
  )
}

export default Subscribe
