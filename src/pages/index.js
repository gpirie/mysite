import Head from 'next/head';

import {getPage, getPosts} from '../utils/wordpress';

import Page from '../components/Page';

export default function Home({ pages }) {
  return <Page page={pages} key={pages.id} />;
}

export async function getStaticProps() {
  const pages = await getPage('home');

  return {
    props: {
      pages,
    },
    revalidate: 10, // In seconds
  };
}