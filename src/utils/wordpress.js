const BASE_URL = 'https://graemepirie.com/wp-json/wp/v2';

export async function getPosts() {
    const postsRes = await fetch(BASE_URL + '/posts?_embed');
    return await postsRes.json();
}

export async function getPost(slug) {
    const posts = await getPosts();
    const postArray = posts.filter((post) => post.slug === slug);
    return postArray.length > 0 ? postArray[0] : null;
}
export async function getEvents() {
    const eventsRes = await fetch(BASE_URL + '/events?_embed');
    return await eventsRes.json();
}

export async function getEvent(slug) {
    const events = await getEvents();
    const eventArray = events.filter((event) => event.slug === slug);
    return eventArray.length > 0 ? eventArray[0] : null;
}

export async function getSlugs(type) {
    let elements = [];
    switch (type) {
        case 'posts':
            elements = await getPosts();
            break;
        case 'events':
            elements = await getEvents();
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