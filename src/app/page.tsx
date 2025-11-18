"use client";

import ExperienceSection from "@/components/experienceSection";
import InfoListSection from "@/components/InfoListSection";
import { Button } from "@/components/ui/button";
import { EducationList } from "@/data/education";
import { HardSkillList } from "@/data/hardSkills";
import { InterestList } from "@/data/interests";
import { SoftSkillList } from "@/data/softSkills";
import { SoftwareMotivationList } from "@/data/softwareMotivation";
import { WorkExperienceList } from "@/data/workExperience";
import { generatePdf } from "@/lib/generatePdf";
import { Calendar, Mail, MapPin } from "lucide-react";

export default function AboutMe() {
    return (
        <div className="text-center justify-items-center">
            <h1 className="text-3xl font-bold">Contact</h1>
            <div className="flex">
                <Mail className="mr-2" />
                <a href = "mailto:wesleyburgt@gmail.com">wesleyburgt@gmail.com</a>
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

            <div className="mt-4 grid grid-cols-1 gap-8 md:grid-cols-2 w-full">
                <ExperienceSection title="Education" items={EducationList} />
                <ExperienceSection title="Work experience" items={WorkExperienceList} />
                <InfoListSection title="Soft skills" items={SoftSkillList} />
                <InfoListSection title="Hard skills" items={HardSkillList} />
                <InfoListSection title="Software motivations" items={SoftwareMotivationList} />
                <InfoListSection title="Interests" items={InterestList} />
            </div>

            <div className="h-px w-full bg-gray-700 my-6"></div>

            <Button onClick={generatePdf} className="bg-gray-800 mt-1 text-2xl p-6">
                View as PDF
            </Button>
        </div>
    )
}