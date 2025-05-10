import { Button } from "@/components/ui/button";
import { Project } from "@/lib/skillProject";
import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function formatDate(date: Date): string {
    const parts = date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "2-digit",
    }).split(" ");

    const [day, month, year] = parts;
    return `${day} ${month} '${year}`;
}

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="flex justify-between w-max rounded-lg bg-gray-950 p-4">
            <div className="flex flex-col items-center flex-1">
                <div className="h-48 w-48 object-contain">
                    <Image
                        width={512}
                        height={512}
                        src={project.icon}
                        alt={`${project.name} icon`}
                        className="h-full w-full object-contain"
                    />
                </div>
                <span className="flex"><Calendar className="mr-2" /> {`${formatDate(project.startDate)} - ${project.endDate ? formatDate(project.endDate) : "Present"}`}</span>
                <div className="grid grid-cols-4 gap-1 mt-1">
                    {project.skills.map((skill, skillIndex) => (
                        <div
                            key={skillIndex}
                            className="p-1"
                        >
                            <Image
                                width={512}
                                height={512}
                                src={skill.icon}
                                alt={`${skill.name} icon`}
                                className="h-10 w-10 object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="mx-1" />

            <div className="flex flex-col w-80 flex-shrink-0 h-full justify-between">

                <span className="font-medium text-xl">{project.name}</span>

                {project.extraInfo ? (
                    <div className="mb-2 text-sm">
                        {project.extraInfo}
                    </div>
                ) : (
                    <div className="mb-2" />
                )}

                <div>
                    <span className="font-medium">My work:</span>
                    {project.myWork.map((work, index) => (
                        <li key={index}>{work}</li>
                    ))}
                </div>

                <div className="flex flex-col mt-2 items-end">
                    {project.urls.map((url, index) => (
                        <Button key={index} className="w-fit bg-gray-800 mt-1">
                            <Link href={url.link}>
                                {url.text}
                            </Link>
                        </Button>
                    ))}
                </div>
            </div>

        </div>
    )
}