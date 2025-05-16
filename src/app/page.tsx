import ExperienceSection from "@/components/experienceSection";
import { EducationList } from "@/data/education";
import { WorkExperienceList } from "@/data/workExperience";
import { Calendar, Mail, MapPin } from "lucide-react";

export default function AboutMe() {
    return (
        <div className="text-center justify-items-center">
            <h1 className="text-3xl font-bold">Contact</h1>
            <div className="flex">
                <Mail className="mr-2" />
                wesleyburgt [at] gmail [dot] com
            </div>

            <div className="h-px w-full bg-gray-700 my-6"></div>

            <h1 className="text-3xl font-bold">About me</h1>
            <div>Wesley van der Burgt</div>
            <div className="flex">
                <Calendar className="mr-2" />
                2-10-2006

            </div>
            <div className="flex">
                <MapPin className="mr-2" />
                Zeeland, NB
            </div>

            <div className="mt-4 grid grid-cols-1 gap-10 md:grid-cols-2 w-full">
                <ExperienceSection title="Education" items={EducationList} />
                <ExperienceSection title="Work experience" items={WorkExperienceList} />

                <div className="p-8 rounded-lg bg-gray-950 h-fit">
                    <h2 className="text-2xl font-medium">Soft skills</h2>
                </div>
                <div className="p-8 rounded-lg bg-gray-950 h-fit">
                    <h2 className="text-2xl font-medium">Hard skills</h2>
                </div>
                <div className="p-8 rounded-lg bg-gray-950 h-fit">
                    <h2 className="text-2xl font-medium">Software motivations</h2>
                    <li>Code optimization</li>
                    <li>Statistics</li>
                </div>
                <div className="p-8 rounded-lg bg-gray-950 h-fit">
                    <h2 className="text-2xl font-medium">Interests</h2>
                    <li>Motorsport</li>
                    <li>Simracing</li>
                    <li>Birdkeeping</li>
                </div>
            </div>
        </div>
    )
}