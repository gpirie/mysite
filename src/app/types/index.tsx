export type Menu = {
    id: string | null;
    name: string | null;
    menuItems: [] | null;
    label: string | null;
    uri: string | null;
}

export type objectFeaturedImage = {
    databaseId: number;
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

// Type definition for Author
export type Author = {
    node: {
        name: string; // Assuming the author node contains a 'name', adjust based on actual structure.
    };
};

// Type definition for Category
export type Category = {
    node: {
        id: string; // Each category node should have an ID.
        name: string; // Name of the category.
    };
};

export type SEO = {
    metaDesc: string | null;
    metaKeywords: string | null;
    title: string | null;
    breadcrumbs: {
        text: string | null;
        url: string | null;
    };
};

// Type definition for Post
export type Post = {
    id: number;
    databaseId: number;
    date: string; // ISO date string
    author: Author;
    content: string | null;
    excerpt: string | null;
    featuredImage: string | null; // Could be a string or an object, adjust based on actual structure.
    link: string;
    slug: string;
    title: string;
    uri: string;
    categories: {
        edges: Array<{
            node: Category;
        }>;
    };
    seo: SEO;
};
