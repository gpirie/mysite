// Imports
import {fetchSinglePage} from "@/data/pages/pages";
import {parseHTML} from "@/utils/utils";

const HomePage = async ({params}: { params: {slug: string}}) => {

    // Get Page data
    const pageData = await fetchSinglePage(params.slug);

    return (
        <>
            <h1>{pageData?.title}</h1>

            {
                parseHTML(pageData.content)
            }
        </>
    )
}

export default HomePage;