// Environment variables
const GRAPHQL_API_URL = process.env.GRAPHQL_ENDPOINT || '';
const username        = process.env.WP_AUTH_USERNAME;
const password        = process.env.WP_AUTH_SECRET;

/**
 * A wrapper for performing `fetch` queries to the WP DB.
 * @param query     The `body` query
 * @param variables The `body` variables
 * @param caching RequestCache Caching instructions for this `fetch`
 * @returns {Promise<any>}
 */
async function fetchGraphQL(
    query = {},
    variables = {},
    caching: RequestCache = 'reload'
) {

    // Auth
    const auth = Buffer.from(`${username}:${password}`).toString('base64');

    // `fetch` headers
    const headers = {
        'Content-Type': 'application/json',
        Authorization: `Basic ${auth}`,
    };

    // WPGraphQL Plugin must be enabled
    // @ts-ignore
    const response = await fetch( GRAPHQL_API_URL, {
        method: 'POST',
        headers,
        body: JSON.stringify({ query, variables }),
        cache: caching
    });

    return await response.json();
}

/**
 * Fetches all menu items via menu name.
 * @param menuName The name of the target menu.
 * @returns {Promise<*>}
 */
export const fetchMenus = async ( menuName: string ) => {

    const query = `
        query {
          menuItems(where: {location: ${ menuName }}) {
            nodes {
              id        
              label   
              cssClasses
              target     
              uri
              connectedNode {
                node {
                    ... on Category {
                        slug
                        count
                    }
                }
              }
            }
          }
        }             
    `;

    try {
        const data = await fetchGraphQL( query );

        return data?.data?.menuItems?.nodes;
    }
    catch (error) {
        console.error('Error fetching WordPress Menus:', error);
    }
}

/**
 * Fetches general settings
 * @returns {Promise<*>}
 */
export const fetchSiteSettings = async () => {

    const query = `
        query {
          generalSettings {
            dateFormat
            description
            email
            language
            startOfWeek
            timeFormat
            timezone
            title
            url
          }
        }             
    `;

    try {
        const data = await fetchGraphQL( query );

        return data?.data?.generalSettings;
    }
    catch (error) {
        console.error('Error fetching WordPress Menus:', error);
    }
}

export const fetchSinglePage = async ( slug: string ) => {
    const query = `
             query Pages($slug: String!) {
              nodeByUri(uri: $slug) {
                __typename
                uri
                isPostsPage
                ... on Page {
                  date
                  databaseId
                  content
                  title
                  id
                  featuredImage {
                    node {
                      id
                      uri
                      title
                      sizes
                      altText
                      srcSet
                      link
                      mediaDetails {
                        height
                        width
                      }
                      sourceUrl
                    }
                  }
                  seo {
                    metaDesc
                    metaKeywords
                    title
                    breadcrumbs {
                      text
                      url
                    }
                  }
                }
              }
             }`;
    try {
        const data = await fetchGraphQL(query, { slug: slug });

        return data?.data?.nodeByUri;


    } catch (error) {
        console.error('Error fetching WordPress Event:' + slug, error);
    }
}

export const fetchMenuByName = async ( slug: string ) => {
    const query = `
        query MenuByName($slug: ID!) {
            menu(id: $slug, idType: NAME) {
                id
                name
                menuItems {
                    nodes {
                        cssClasses
                        id
                        label
                        target
                        uri
                        title
                    }
                }
            }
        }
    `;
    try {
        const data = await fetchGraphQL(query, { slug: slug });

        return data?.data?.menu;


    } catch (error) {
        console.error('Error fetching WordPress Event:' + slug, error);
    }
}

export const fetchFeaturedImage = async ( id: number ) => {
    const query = `    
        query featuredImage($id: ID!) {
          contentNode(id: $id, idType: DATABASE_ID) {
            ... on Post {
              featuredImage {
                node {
                  sourceUrl
                  altText
                  title
                  caption
                  mediaDetails {
                    height
                    width
                  }
                }
              }
            }
            ... on Page {
              featuredImage {
                node {
                  sourceUrl
                  altText
                  title
                  caption
                  mediaDetails {
                    height
                    width
                  }
                }
              }
            }
          }
        }
    `;

    try {
        // Pass only the slug to the GraphQL function
        const data = await fetchGraphQL(query, { id: id });

        // Handle both Post and Page featured images
        return data?.data?.contentNode?.featuredImage?.node;

    } catch (error) {
        console.error('Error fetching WordPress featured image for slug: ' + id, error);
    }
};

export const fetchAllPosts = async ( number: number ) => {
    const query = `
        query fetchAllPosts($number: Int!) {
            posts(
                first: $number
            )
            { 
                nodes {
                  id
                  uri
                  databaseId
                  date
                  author {
                    node {
                      firstName
                      lastName
                      slug
                      uri
                    }
                  }
                  content
                  excerpt
                  featuredImage {
                    node {
                      altText
                      link
                      id
                      description
                      mediaDetails {
                        sizes(exclude: LARGE) {
                          height
                          width
                        }
                      }
                      slug
                      title
                    }
                  }
                  link
                  slug
                  title
                  categories {
                    edges {
                      node {
                        id
                        name
                        slug
                      }
                    }
                  }
                  seo {
                    metaDesc
                    metaKeywords
                    title
                    breadcrumbs {
                      text
                      url
                    }
                  }
                }
            }
        }
    `;

    try {
        // Pass only the slug to the GraphQL function
        const data = await fetchGraphQL(query, { number: number });

        // Handle both Post and Page featured images
        return data?.data?.posts?.nodes;

    } catch (error) {
        console.error('Error fetching WordPress featured image for slug: ' + number, error);
    }
}

export const fetchPostsPage = async () => {
    const query = `
    query {
        generalSettings {
            url
        }
        page(id: "55", idType: DATABASE_ID) {
        title
        uri
        content
        date
        featuredImage {
          node {
            sourceUrl
            altText
            mediaDetails {
              width
              height
            }
          }
        }
        seo {
          metaDesc
          metaKeywords
          title
          fullHead
          breadcrumbs {
            text
            url
          }
        }
        }
        }
    `;

    try {
        // Pass only the slug to the GraphQL function
        const data = await fetchGraphQL(query);

        // Handle both Post and Page featured images
        return data?.data?.page;

    } catch (error) {
        console.error('Error fetching WordPress posts page');
    }
}
