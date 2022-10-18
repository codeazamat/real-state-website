import Link from 'next/link'
import { useEffect, useState } from 'react'
import ArrowTopSvg from '../public/img/svg/arrow-top.svg'

const ScrollUp = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 350) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <Link href="/">
      <a className={`scrollup ${isVisible ? 'active' : ''}`}>
        <ArrowTopSvg />
      </a>
    </Link>
  )
}

export default ScrollUp
