import {useEffect, useState} from "react";

const BASE_URL = 'https://graemepirie.com/wp-json';

export async function getSiteInfo() {
    const siteInfo = await fetch( BASE_URL );
    console.log(siteInfo.json);
    return await siteInfo.json();
}

export const SiteData = (props) => {
    const [siteData, setSiteData] = useState();
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

export async function getSlugs(type) {
    let elements = [];
    switch (type) {
        case 'posts':
            elements = await getPosts();
            break;
    }
    return elements.map((element) => {
        return {
            params: {
                slug: element.slug,
            },
        };
    });
}
