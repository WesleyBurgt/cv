"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { getProjectManagerData } from "@/data/skills"
import { Project, ProjectManager } from "@/lib/skillManager";
import ProjectCard from "./projectCard";



export default function SkillsSection() {
    const projectManager = getProjectManagerData();
    const [searchQuery, setSearchQuery] = useState("")

    const filteredProjectManager = (): ProjectManager => {
        const query = searchQuery.trim().toLowerCase();

        if (!query) return projectManager;

        const filtered = new ProjectManager();

        for (const project of projectManager.projects) {
            const nameMatches = project.name.toLowerCase().includes(query);
            const skillMatches = project.skills.some(skill =>
                skill.name.toLowerCase().includes(query)
            );

            if (nameMatches || skillMatches) {
                const fullProject = new Project(
                    project.name,
                    project.icon,
                    project.urls,
                    project.myWork,
                    project.startDate,
                    project.endDate
                );
                fullProject.addSkills(project.skills);
                filtered.addProject(fullProject);
            }
        }

        return filtered;
    };


    const displayedProjects = filteredProjectManager()

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
                {displayedProjects.projects.length === 0 ? (
                    <p className="white text-xl">No results found.</p>
                ) : (
                    displayedProjects.projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))
                )}
            </div>
        </div>
    )
}