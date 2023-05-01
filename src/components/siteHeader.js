import Head from "next/head";
// import { SiteData, SiteDataFetch } from "@components/utils/wordpress";

export default function siteHeader() {
    
    // const siteMeta = SiteData().map((site) => {
    //   return site.name;
    // })
    
    return (
        <>
        <Head>
            <title>Tech Blog Meta</title>
            <meta
                name="description"
                content="Keep up to date with the latest trends in tech"
            />
            <link rel="icon" href="/favicon.ico" />
            {/* You can add more metadata here, like open graph tags for social media, etc */}
        </Head>

        <div className="site-header">
            Test
        </div>
        </>
    );
}