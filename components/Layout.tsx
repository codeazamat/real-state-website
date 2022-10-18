import { PropsWithChildren } from 'react'
import Header from './Header'
import Footer from './Footer'
import ScrollUp from './ScrollUp'

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <main className="main">{children}</main>
      <Footer />
      <ScrollUp />
    </>
  )
}

export default Layout
