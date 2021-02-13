import React, { ReactNode } from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

interface HomeBackgroundSectionProps {
  className?: string;
  children?: ReactNode;
}

const HomeBackgroundSection = ({ className, children }: HomeBackgroundSectionProps) => {
  const { desktop } = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "trial2.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 6035) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `
  )

  const imageData = desktop.childImageSharp.fluid
  return (
    <BackgroundImage
      Tag="section"
      className={className}
      fluid={imageData}
      backgroundColor={`#040e18`}
      title="home-background"
      id="home-background"
      role="img"
      aria-label="home-background"
    >
      {children}
    </BackgroundImage>
  )
}

export default HomeBackgroundSection;