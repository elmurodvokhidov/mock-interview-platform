import { getCurrentUser } from "@/lib/actions/auth.action";
import { getFeedbackByInterviewId, getInterviewById } from "@/lib/actions/general.action";
import { redirect } from "next/navigation";

export default async function page({ params }: RouteParams) {
    const { id } = await params;
    const user = await getCurrentUser();

    const interview = await getInterviewById(id);
    if (!interview) {
        redirect("/");
    }

    const feedback = await getFeedbackByInterviewId({
        interviewId: id,
        userId: user?.id!
    });

    return (
        <div>page</div>
    )
}