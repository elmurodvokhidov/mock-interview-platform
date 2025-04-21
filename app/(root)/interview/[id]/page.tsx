import { getInterviewById } from "@/lib/actions/general.action";
import { redirect } from "next/navigation";

export default async function page({ params }: RouteParams) {
    const { id } = await params;
    const interview = await getInterviewById(id);

    if (!interview) {
        redirect("/");
    }

    return (
        <div>page</div>
    )
}