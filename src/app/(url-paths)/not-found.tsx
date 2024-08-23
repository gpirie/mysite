// Imports
import Link from 'next/link';

/**
 * This component renders a generic "404" message across
 * all dynamic routes throughout the application.
 *
 * For more info on the Next.js 13 `not-found` functionality,
 * see https://nextjs.org/docs/app/api-reference/file-conventions/not-found
 * @constructor
 */
const NotFound = () => {
    return (
        <>
            <h1>404</h1>
            <p>Unfortunately, this page does not exist.</p>
            <p><Link href={ `/` }>Back to site</Link></p>
        </>
    )
}
export default NotFound;