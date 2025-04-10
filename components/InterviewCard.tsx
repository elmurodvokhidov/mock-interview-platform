import { getRandomInterviewCover } from "@/lib/utils";
import dayjs from "dayjs";
import Image from "next/image";

export default function InterviewCard({
    interviewId,
    userId,
    role,
    type,
    techstack,
    createdAt,
}: InterviewCardProps) {
    const feedback = null as Feedback | null;
    const normilazedType = /mix/gi.test(type) ? "Mixed" : type;
    const formattedDate = dayjs(feedback?.createdAt || createdAt || Date.now()).format("MMM D, YYYY");

    return (
        <div className="card-border w-[360px] max-sm:w-full min-h-96">
            <div className="card-interview">
                <div>
                    <div className="absolute top-0 right-0 w-fit px-4 py-2 rounded-bl-lg bg-light-600">
                        <p className="badge-text">
                            {normilazedType}
                        </p>
                    </div>

                    <Image
                        src={getRandomInterviewCover()}
                        alt="Interview cover"
                        width={90}
                        height={90}
                        className="rounded-full object-fit size-[90px]"
                    />
                </div>
            </div>
        </div>
    )
}