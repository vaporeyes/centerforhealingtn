module.exports = {
  siteMetadata: {
    title: "Center for Healing TN",
    description: "The Center for Healing: a trauma-informed practice - specializing in trauma-informed treatment for childhood sexual abuse, sexual assault/rape, and other traumatic incidents and a safe space for all ages, LGBTQIA+, and alternative lifestyle groups",
    author: "jduncan",
    siteUrl: "https://centerforhealingtn.com",
    email: 'centerforhealingtn@gmail.com',
    phone: '+19313209683',
    address: '119 N. 3rd St. Clarksville, TN 37040',
    keywords: [
      'clarksville', 'tennessee', 'tn',
      'sexual assault',
      'rape','sexual abuse', 
      'child sexual abuse', 
      'childhood sexual abuse', 
      'rape counseling', 
      'trauma therapy', 'therapy', 
      'rape crisis counseling', 
      'sexual assault therapy', 
      'play therapy', 'child trauma therapy', 
      'sex abuse therapy', 'transgender therapy', 
      'sex work counseling', 'counseling', 
      'therapist', 'counselor', 'LGBTQIA', 
      'LGBTQIA therapy', 'anxiety', 
      'depression', 'trauma'],
    social: {
      instagram: '@centerforhealingtn'
    },
    socialLinks: {
      // twitter: '@centerforhealingtn',
      // linkedin: '',
      facebook: 'https://www.facebook.com/Center-for-Healing-105872327448742',
      instagram: '@centerforhealingtn',
      pinterest: 'https://www.pinterest.com/centerforhealingtn/',
    }
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'centerforhealingtn',
        short_name: 'centerforhealingtn',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/heart-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
