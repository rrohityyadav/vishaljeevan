import Seo from '../components/Seo'
import Hero from '../components/Hero'
import About from '../components/About'
import Products from '../components/Products'
import CustomBranding from '../components/CustomBranding'
import ManufacturingProcess from '../components/ManufacturingProcess'
import WhyChooseUs from '../components/WhyChooseUs'
import Industries from '../components/Industries'
import Certifications from '../components/Certifications'
import EnquiryForm from '../components/EnquiryForm'
import SideEnquiryTab from '../components/SideEnquiryTab'

export default function Home() {
  return (
    <>
      <Seo path="/" title="Packaged Drinking Water Manufacturer | Custom Branded Water Bottles"
        description="Packaged drinking water manufacturer with bottles from 250 ml to 20 litre jars, bulk supply, private-label and customised branded water bottles for hotels, events and businesses." />
      <SideEnquiryTab />
      <Hero />
      <About />
      <Products />
      <CustomBranding />
      <ManufacturingProcess />
      <WhyChooseUs />
      <Industries />
      <Certifications />
      <EnquiryForm />
    </>
  )
}
