// Imports
import type { Metadata } from 'next';
import {fetchAllPosts, fetchFeaturedImage, fetchPostsPage} from "@/data/Data";
import { Post, objectFeaturedImage } from "../types";
import { parseHTML } from "@/utils/utils";
import PostItem from "@/components/blog/postItem/postItem";
import PostHero from "@/components/blog/postHero/postHero";

// Styles
import styles from "./blogPage.module.scss"

// Define the PostWithImage type, extending the original Post type to include featuredImage
type PostWithImage = Post & {
    featuredImage?: objectFeaturedImage; // Optional because it might be undefined initially
};

export async function generateMetadata(): Promise<Metadata> {

    // read route params
    const pageData = await fetchPostsPage();

    return {
        generator: 'Next.js',
        title: pageData.seo.title,
        description: pageData.seo.metaDesc,
        other: {
            fullHead: pageData.seo.fullHead, // Yoast-specific full head
        }
    }
}


const Blog = async () => {
    // Fetch Posts page information
    const blogPage = await fetchPostsPage();

    // Fetch all posts and their featured images on the server
    const fetchedPosts: Post[] = await fetchAllPosts(6);

    // Fetch featured images for each post
    const postsWithImages: PostWithImage[] = await Promise.all(
        fetchedPosts.map(async (post) => {
            const featuredImage = await fetchFeaturedImage(post.databaseId);
            return {
                ...post,
                featuredImage, // Add the fetched image to the post data
            };
        })
    );

    return (
        <>
            { blogPage?.content ? parseHTML(blogPage?.content) : '' }

            <ol className={styles['post-list']}>
                {postsWithImages.map((post, index) => {
                    // Conditional rendering based on index
                    if (index === 0) {
                        // Render FeaturedPostItem for the first post (index 0)
                        return (
                            <PostHero className={'first-post'} key={post.id} post={post} index={index} />
                        );
                    } else if ( index > 0 && index <= 4 ) {
                        return (
                            <PostItem key={post.id} post={post} index={index} />
                        );
                    } else {
                        return (
                            <PostItem key={post.id} post={post} index={index} />
                        );
                    }
                })}
            </ol>
        </>
    );
};

export default Blog;
