// Imports
import {fetchFeaturedImage, fetchSinglePage} from "@/data/Data";
import {parseHTML} from "@/utils/utils";

// Components
import NotFound from "../not-found";

const Page = async ({params}: { params: {slug: string}}) => {

    // Get Page data
    const pageData = await fetchSinglePage(params.slug);
    const featuredImage = await fetchFeaturedImage(params.slug);

    if ( ! pageData ) {

        return (
            <NotFound />
        )
    }

    return (
        <>
            <h1>{ pageData?.title }</h1>

            { pageData?.content ? parseHTML(pageData?.content) : '' }

            {
                featuredImage?.node?.sourceUrl
            }
        </>
    )
}

export default Page;