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
                ... on Page {
                  date
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
                    }
                  }
                }
              }
             }`;
    try {
        const data = await fetchGraphQL(query, { slug: slug });

        console.log(data?.data?.nodeByUri?.date)

        return data?.data?.nodeByUri;


    } catch (error) {
        console.error('Error fetching WordPress Event:' + slug, error);
    }
}