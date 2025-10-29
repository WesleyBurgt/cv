"use client";

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import ProjectCard from "./projectCard";
import { Project } from "@/lib/skillProject";
import { ProjectList } from "@/data/projects";
import { Button } from "@/components/ui/button";

function filteredProjectList(query: string, selectedSkills: string[]): Project[] {
    const projectList = ProjectList;

    return projectList.filter(project => {
        const nameMatches = project.name.toLowerCase().includes(query.toLowerCase());

        const skillsMatch =
            selectedSkills.length === 0 ||
            selectedSkills.every(skill =>
                project.skills.some(pSkill => pSkill.name === skill)
            );

        return nameMatches && skillsMatch;
    });
}

export default function SkillsSection() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

    const query = searchQuery.trim();

    const allSkills = useMemo(() => {
        const skillSet = new Set<string>();
        for (const project of ProjectList) {
            for (const skill of project.skills) {
                skillSet.add(skill.name);
            }
        }
        return Array.from(skillSet).sort((a, b) => a.localeCompare(b));
    }, []);

    const displayedProjects = filteredProjectList(query, selectedSkills);

    function toggleSkill(skillName: string) {
        setSelectedSkills(prev =>
            prev.includes(skillName)
                ? prev.filter(s => s !== skillName)
                : [...prev, skillName]
        );
    }

    return (
        <div className="mx-auto max-w-screen-xl">
            <h1 className="mb-12 text-center text-5xl font-bold">Projects</h1>

            {/* Search input */}
            <div>
                <Input
                    type="text"
                    placeholder="Search project name"
                    className="bg-gray-900 border-gray-700"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            {/* Skill filter buttons */}
            <div>
                <div className="my-4 flex items-center">
                    <div className="h-px flex-1 bg-gray-700"></div>
                    <h2 className="mx-4 text-lg font-medium text-gray-400">Filter skills</h2>
                    <div className="h-px flex-1 bg-gray-700"></div>
                </div>
                <div className="flex flex-wrap gap-2">
                    {allSkills.map((skillName, index) => {
                        const isActive = selectedSkills.includes(skillName);
                        return (
                            <Button
                                key={index}
                                className={`${isActive
                                    ? "bg-blue-800 hover:bg-blue-700"
                                    : "bg-gray-950 hover:bg-gray-800"
                                    }`}
                                onClick={() => toggleSkill(skillName)}
                            >
                                {skillName}
                            </Button>
                        );
                    })}
                </div>
                <div className="my-6 h-px flex-1 bg-gray-700"></div>
            </div>

            {/* Projects */}
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
    );
}
