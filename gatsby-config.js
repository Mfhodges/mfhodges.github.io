module.exports = {
    siteMetadata:{
        title:'Maddy Hodges\' website',
        description:'Maddy Hodges\s portfolio and blog'
    },
    plugins: ['gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
        resolve:'gatsby-plugin-mdx',
        options :{
            defaultLayouts :{
                default: require.resolve('./src/components/layout.js')
            },
            gatsbyRemarkPlugins: ['gatsby-remark-images'],
            plugins: ['gatsby-remark-images'],
        },
    },
    {
        resolve: 'gatsby-source-filesystem',
        options: {
            name: 'posts',
            path: 'posts',
        }
    },
    {
        resolve: 'gatsby-source-filesystem',
        options: {
            name: 'images',
            path: 'images',
        }
    },
    {
        resolve: 'gatsby-plugin-webpack-bundle-analyzer',
        options: {
            production: true,
            disable: !process.env.ANALYZE_BUNDLE_SIZE,
            generateStatsFile: true,
            analyzerMode:'static',
        
        }
    },
      {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-165762946-1",
      },
    }
      
    ]
};