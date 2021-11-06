import { useSession} from "next-auth/client";
import { useRouter } from "next/router";
export default function index() {
    const [session, loading] = useSession();
    const router = useRouter()
    if (loading) return null;

    if (!loading && !session) {
      router.push('/auth/signin')
    }

    return (
      <>
        {!loading && session &&(
          <div>
            <h1>Protected Page</h1>
            <p>You can view this page because you are signed in.</p>
          </div>
        )}
      </>
    );
}
