import Link from "next/link";


export default function Page() {
    return (
        <div>
            This is home page
            <br/>
        <Link href={"/signin"}>
            Click Here is to Sign in 
        </Link>
        </div>
    );
}
