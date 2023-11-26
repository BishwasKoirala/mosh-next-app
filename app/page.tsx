import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { Span } from "next/dist/trace";
export default  async function Home() {
  const session = await getServerSession(authOptions)
  return (
    <main>
      {/* if we have session , render the user name */}
      <h1>Hello {session && <span>{session.user!.name} </span> }</h1>
      <Link href="/users">Users</Link>
      <ProductCard/>
    </main>
  );
}
