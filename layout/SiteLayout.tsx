import Navbar from '@/shared/header/Navbar'
import Footer from '@/shared/footer/Footer'
import React from 'react'

interface SiteLayoutProps {
  children: React.ReactNode
}

const SiteLayout = ({ children }: SiteLayoutProps) => {
  return (
    <div>
      <Navbar/>
      {children}
      <Footer />
    </div>
  )
}

export default SiteLayout