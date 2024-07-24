import { Metadata, ResolvingMetadata } from 'next';
import "@/styles/globals.scss";

// Components
import Header from "@/components/header/siteHeader"
import Footer from "@/components/footer/siteFooter"

type Props = {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata( { params, searchParams }: Props, parent: ResolvingMetadata ): Promise<Metadata> {

    // fetch data
    //TODO: remove hardcoded data for seo
    //const pageData = await fetchSinglePost('home')

    return {
        title: 'E-FWD | Where energy\'s forward thinkers come together', //pageData?.seo?.title,
        description: 'E-FWD | Where energy\'s forward thinkers come together', //pageData?.seo?.metaDesc,
        icons: {
            icon: 'logos/favicon.svg'
        },
    }
}

const RootLayout = async ({children}: {children: React.ReactNode}) => {

    return (
        <>
            <html lang="en">
            <head>
                <title></title>
            </head>
            <body>
                <Header />
                {children}
                <Footer />
            </body>
            </html>
        </>
    )
}

export default RootLayout;
