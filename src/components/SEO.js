import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

function SEO({ description, lang, image, meta, keywords, title }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description
        const metaImage = image && image.src ? `${data.site.siteMetadata.siteUrl}${image.src}` : null
        const metaUrl = `${data.site.siteMetadata.siteUrl}`
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:url`,
                content: metaUrl,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                name: `instagram:creator`,
                content: `${data.site.siteMetadata.social.instagram}`,
              },
              {
                name: `instagram:title`,
                content: title,
              },
              {
                name: `instagram:description`,
                content: metaDescription,
              },
            ]
              .concat(metaImage ? [
                {
                  property: `og:image`,
                  content: metaImage
                },
                {
                  property: `og:image:alt`,
                  content: title,
                },
                {
                  property: 'og:image:width',
                  content: image.width
                },
                {
                  property: 'og:image:height',
                  content: image.height
                },
                {
                  name: `instagram:card`,
                  content: `summary_large_image`,
                }
              ] : [
                {
                  name: `instagram:card`,
                  content: `summary`,
                },
              ])
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `),
                    }
                  : []
              )
              .concat(meta)}
          />
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
  
}

SEO.propTypes = {
  description: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        siteUrl
        description
        author
        phone
        email
        address
        social {
          instagram
        }
        keywords
      }
    }
  }
`