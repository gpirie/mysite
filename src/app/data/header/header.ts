const BASE_URL = process.env.BASE_URL

export async function getHeaderMenu() {
    let headerMenu = await fetch( BASE_URL + 'wp/v2/navigation/9' );

    headerMenu = await headerMenu.json();

    return headerMenu.content.rendered;
}