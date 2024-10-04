// Imports
import Link from "next/link";

// Components
import { formatDateTime, parseHTML } from "@/utils/utils";
import FeaturedImage from "@/components/featuredImage/featuredImage";

// Styles
import styles from "./postHero.module.scss";

// Types
import {objectFeaturedImage, Post} from "../../../types";

interface PostItemProps {
    className: string;
    post: PostWithImage;
    index: number;
}

type PostWithImage = Post & {
    featuredImage?: objectFeaturedImage; // Optional because it might be undefined initially
};

const PostHero: React.FC<PostItemProps> = ({ post, className }) => {

    return (
        <li className={`${styles['post-hero']} ${styles[className]}`}>

            <Link href={`blog/${post.uri}`} title={post.title}>

                <FeaturedImage image={post.featuredImage} showCaption={false} />

                {/* Title */}
                <h1>{post.title}</h1>

                {/* Meta Data */}
                <time dateTime={post.date}>
                    {formatDateTime(post.date, true)}
                </time>

                {/* Excerpt */}
                {post.excerpt && parseHTML(post.excerpt)}

            </Link>

        </li>
    );
};

export default PostHero;
