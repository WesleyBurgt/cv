"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import ProjectCard from "./projectCard";
import { Project } from "@/lib/skillProject";
import { ProjectList } from "@/data/projects";

function filteredProjectList(query: string): Project[] {
    const projectList = ProjectList;

    if (!query) return projectList;

    const lowerQuery = query.toLowerCase();
    const filtered: Project[] = [];

    for (const project of projectList) {
        const nameMatches = project.name.toLowerCase().includes(lowerQuery);
        const skillMatches = project.skills.some(skill =>
            skill.name.toLowerCase().includes(lowerQuery)
        );

        if (nameMatches || skillMatches) {
            const fullProject = new Project(
                project.name,
                project.icon,
                project.skills,
                project.urls,
                project.myWork,
                project.startDate,
                project.endDate
            );
            filtered.push(fullProject);
        }
    }

    return filtered;
}

export default function SkillsSection() {
    const [searchQuery, setSearchQuery] = useState("")

    const query = searchQuery.trim();
    const displayedProjects = filteredProjectList(query)

    return (
        <div className="mx-auto max-w-screen-xl">
            <h1 className="mb-12 text-center text-5xl font-bold">Projects</h1>

            <div className="mb-10">
                <Input
                    type="text"
                    placeholder="Search project or skill"
                    className="bg-gray-900 border-gray-700"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            <div className="flex flex-wrap gap-6">
                {displayedProjects.length === 0 ? (
                    <p className="white text-xl">No results found.</p>
                ) : (
                    displayedProjects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))
                )}
            </div>
        </div>
    )
}