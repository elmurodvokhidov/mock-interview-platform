import Agent from "@/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.action";

export default async function page() {
    const user = await getCurrentUser();

    return (
        <>
            <h3>Interview Generation</h3>

            <Agent
                userName={user?.name as string}
                userId={user?.id}
                type="generate"
            />
        </>
    )
}