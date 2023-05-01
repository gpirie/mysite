import Head from 'next/head';

import { getPosts } from '../utils/wordpress';

import Post from '../components/Post';

export default function Home({ posts }) {
  const jsxPosts = posts.map((post) => {
    const featuredMedia = post['_embedded']['wp:featuredmedia'][0];
    return <Post post={post} featuredMedia={featuredMedia} key={post.id} />;
  });

  return (
      <>
        {jsxPosts}
      </>
  );
}

export async function getStaticProps({ params }) {
  const posts = await getPosts();

  return {
    props: {
      posts,
    },
    revalidate: 10, // In seconds
  };
}