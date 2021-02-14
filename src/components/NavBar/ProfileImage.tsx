import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ProfileImage = () => {
  const data: any = useStaticQuery(graphql`
    query {
      profileImage: file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  if (!data?.profileImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  const imageFluid: any = data.profileImage.childImageSharp.fluid

  return <Img fluid={imageFluid} style={{borderRadius: '50%'}}/>
}

export default ProfileImage
