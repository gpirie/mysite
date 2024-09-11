import Link from "next/link";
import { fetchAllPosts, fetchFeaturedImage } from "@/data/Data";
import { Post, objectFeaturedImage } from "../../types";
import FeaturedImage from "@/components/featuredImage/featuredImage";
import { formatDateTime, parseHTML } from "@/utils/utils";

// Define the PostWithImage type, extending the original Post type to include featuredImage
type PostWithImage = Post & {
    featuredImage?: objectFeaturedImage; // Optional because it might be undefined initially
};

const Blog = async () => {
    // Fetch all posts and their featured images on the server
    const fetchedPosts: Post[] = await fetchAllPosts(10);

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
        <ol>
            {postsWithImages.map((e: PostWithImage) => (
                <li key={e.id}>
                    <Link
                        key={e.databaseId}
                        href={e.link}
                        title={e.title}
                    >
                        <h1>{e.title}</h1>

                        <time dateTime={e.date}>{formatDateTime(e.date, true)}</time>

                        {/* Render the fetched FeaturedImage component */}
                        {e.featuredImage && (
                            <FeaturedImage image={e.featuredImage} showCaption={false} />
                        )}

                        {e.excerpt && parseHTML(e.excerpt)}
                    </Link>
                </li>
            ))}
        </ol>
    );
};

export default Blog;
