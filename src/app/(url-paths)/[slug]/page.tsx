// Imports
import type { Metadata } from 'next';
import {fetchFeaturedImage, fetchSinglePage} from "@/data/Data";
import FeaturedImage from "@/components/featuredImage/featuredImage";
import {parseHTML} from "@/utils/utils";

// Components
import NotFound from "../not-found";

type Props = {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata( { params }: Props ): Promise<Metadata> {

    // read route params
    const pageData = await fetchSinglePage(params.slug);

    return {
        generator: 'Next.js',
        title: pageData.seo.title,
        description: pageData.seo.metaDesc,
    }
}

const Page = async ({params}: { params: {slug: string}}) => {

    // Get Page data
    const pageData = await fetchSinglePage(params.slug);
    const featuredImage = await fetchFeaturedImage( pageData.databaseId );

    if ( ! pageData ) {

        return (
            <NotFound />
        )
    }

    return (
        <>
            <h1>{ pageData?.title }</h1>

            <FeaturedImage image={featuredImage} showCaption={false} />

            { pageData?.content ? parseHTML(pageData?.content) : '' }

        </>
    )
}

export default Page;