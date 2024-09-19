import React from 'react'
// import Header from '../../components/header'
import SectionOne from '../../components/sectionOne'
import SectionTwo from '../../components/sectionTwo'
import SectionFour from '../../components/sectionFour'
import SectionFive from '../../components/sectionFive'
import SecctionSeven from '../../components/sectionSeven'
import SectionThree from '../../components/sectionThree'
import SectionSix from '../../components/sectionSix'
import SectionEight from '../../components/sectionEight'
import SectionNine from '../../components/sectionNine'
import SectionTen from '../../components/sectionTen'
import Section from '../../components/sectionThirteen/Section'
import About from '../../components/about'
import Navbar from '../../components/navbar'
 
export default function LandingPage() {
  return (
    <div>
      {/* <Header/> */}
      <Navbar/>
      <SectionOne/>
      <Section/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <SectionFive/>
      <SectionSix/>
      <SecctionSeven/>
      <SectionEight/>
      <SectionNine/>
      <SectionTen/>
        <About/>
      </div>
  )
}
