import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Home() {
    redirect("/doashboard");
    return (
        <main>
            <h1 style={{ margin: 0 }}>Hello world!</h1>
            <Link href={"/doashboard"} passHref>
                Go to doashboard
            </Link>
        </main>
    );
}
