import Link from "next/link"


const Error = () => {
    return (
        <div className="container py-5">
            <h3 className="text-center">Page Not Found !</h3>
            <Link href="/">
            <a><p className="text-center">Go to home</p></a>
            </Link>
        </div>
    )
}

export default Error
