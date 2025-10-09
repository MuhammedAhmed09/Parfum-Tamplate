import Hero from "../../aboutSections/Hero"
import Features from "../../aboutSections/Features"
import FeaturedImage from "../../aboutSections/FeaturedImage"
import FAQ from "../../aboutSections/FAQ"

const About = () => {
  return (
    <section className="bg-Light-Pink flex flex-col gap-8">
      <Hero />
      <Features />
      <FeaturedImage />
      <FAQ />
    </section>
  )
}

export default About