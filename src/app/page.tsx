import { getUserSession } from '@/lib/session'
import Link from "next/link";

export default async function Home() {
    const user = await getUserSession()
    return (
    <div>
        {JSON.stringify(user)}
        <Link href='/api/auth/signin'>Sing in</Link>
    </div>
  );
}
