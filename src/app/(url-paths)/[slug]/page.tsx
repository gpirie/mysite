// Imports
import {fetchSinglePage} from "@/data/Data";
import {parseHTML} from "@/utils/utils";

const Page = async ({params}: { params: {slug: string}}) => {

    // Get Page data
    const pageData = await fetchSinglePage(params.slug);

    return (
        <>
            <h1>{pageData?.title}</h1>

            { pageData?.content ? parseHTML(pageData?.content) : '' }
        </>
    )
}

export default Page;