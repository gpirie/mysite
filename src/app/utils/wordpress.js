const BASE_URL = process.env.BASE_URL

export async function getSiteInfo() {
    const siteInfo = await fetch( BASE_URL );
    return await siteInfo.json();
}

export async function getSiteLogoUrl() {
    const siteInfo = await getSiteInfo();

    let siteLogo = await fetch( BASE_URL + 'wp/v2/media/' + siteInfo.site_logo);
    siteLogo = await siteLogo.json();

    // Extract relevant data from the siteLogo object
    return {
        url: siteLogo.source_url,
        alt: siteLogo.alt_text,
        width: siteLogo.media_details.width,
        height: siteLogo.media_details.height,
        // Add any other necessary properties you might need
    };
}

export async function getStaticPaths() {
    const response = fetch( BASE_URL )
    const userData = await response.json()

    // Getting the unique key of the user from the response
    // with the map method of JavaScript.
    const uniqueId = userData.map((data) => {
        return data.name
    })

    return {
        paths: {
            params: {
                uniqueId: uniqueId.toString()
            }
        }
    }
}

export async function getPosts() {
    const postsRes = await fetch(BASE_URL + '/wp/v2/posts?_embed');
    return await postsRes.json();
}

export async function getPost(slug) {
    const posts = await getPosts();
    const postArray = posts.filter((post) => post.slug === slug);
    return postArray.length > 0 ? postArray[0] : null;
}


export async function getPages() {
    const pagesRes = await fetch(BASE_URL + '/wp/v2/pages?_embed');
    return await pagesRes.json();
}

export async function getPage(slug) {
    const pages = await getPages();
    const pageArray = pages.filter((page) => page.slug === slug);
    return pageArray.length > 0 ? pageArray[0] : null;
}

export async function getSlugs(type) {
    let elements = [];
    switch (type) {
        case 'posts':
            elements = await getPosts();
            break;
        case 'pages':
            elements = await getPages();
    }
    return elements.map((element) => {
        return {
            params: {
                slug: element.slug,
            },
        };
    });
}
