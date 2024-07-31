// Imports
import {fetchSinglePage} from "@/data/Data";
import {parseHTML} from "@/utils/utils";

const HomePage = async () => {

    // Get Page data
    const pageData = await fetchSinglePage('home');

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