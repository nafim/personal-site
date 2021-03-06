import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const WeatherAppImage = () => {
  const data: any = useStaticQuery(graphql`
    query {
      childImage: file(relativePath: { eq: "weatherapp.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 960) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.childImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  const imageFluid: any = data.childImage.childImageSharp.fluid

  return <Img fluid={imageFluid} style={{borderRadius: '1%'}}/>
}

export default WeatherAppImage