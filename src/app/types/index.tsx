export type Menu = {
    id: string | null;
    name: string | null;
    menuItems: [] | null;
    label: string | null;
    uri: string | null;
}

export type FeaturedImage = {
    sourceUrl: string;
    altText: string;
    title: string;
    caption: string|null;
    mediaDetails: MediaDetails;
};

export type MediaDetails = {
    height: number;
    width: number;
};