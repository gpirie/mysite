// Imports
import Link from "next/link";

// Components
import { formatDateTime, parseHTML } from "@/utils/utils";

// Styles
import styles from "./postItem.module.scss";

// Types
import {objectFeaturedImage, Post} from "../../../types";

interface PostItemProps {
    post: PostWithImage;
    index: number;
}

type PostWithImage = Post & {
    featuredImage?: objectFeaturedImage; // Optional because it might be undefined initially
};

const PostItem: React.FC<PostItemProps> = ({ post }) => {

    return (
        <li className={`${styles['post-item']}`}>

            <Link href={`blog/${post.uri}`} title={post.title}>

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

export default PostItem;
