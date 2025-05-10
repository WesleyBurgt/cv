"use client"

import { useState } from "react"
import { SkillCategory, CategoryManager } from "@/lib/skillManager"
import { Input } from "@/components/ui/input"
import { getCategoryManagerData } from "@/data/skills"
import Image from "next/image"

export default function SkillList() {
    const skillManager = getCategoryManagerData();
    const [searchQuery, setSearchQuery] = useState("")

    const filteredSkillManager = (): CategoryManager => {
        if (!searchQuery.trim()) return skillManager;

        const filtered = new CategoryManager();
        const lowerSearch = searchQuery.toLowerCase();

        for (const category of skillManager.categories) {
            const matchingSkills = category.skills.filter(skill =>
                skill.name.toLowerCase().includes(lowerSearch)
            );

            if (matchingSkills.length > 0) {
                const filteredCategory = new SkillCategory(category.name);
                filteredCategory.addSkills(matchingSkills);
                filtered.addCategory(filteredCategory);
            }
        }

        return filtered;
    };


    const displayedSkills = filteredSkillManager()

    return (
        <div className="mx-auto max-w-4xl">
            <h1 className="mb-12 text-center text-5xl font-bold">Skills</h1>

            <div className="mb-10">
                <Input
                    type="text"
                    placeholder="Search skill"
                    className="bg-gray-900 border-gray-700"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            {displayedSkills.categories.map((category, index) => (
                <div key={index} className="mb-12">
                    <div className="mb-4 flex items-center">
                        <div className="h-px flex-1 bg-gray-700"></div>
                        <h2 className="mx-4 text-lg font-medium text-gray-400">{category.name}</h2>
                        <div className="h-px flex-1 bg-gray-700"></div>
                    </div>

                    <div className="flex flex-wrap gap-6">
                        {category.skills.map((skill, skillIndex) => (
                            <div
                                key={skillIndex}
                                className="flex flex-col aspect-square items-center justify-between rounded-lg bg-gray-950 p-4 w-fit"
                            >
                                <div className="h-24 w-24 object-contain">
                                    <Image
                                        width={512}
                                        height={512}
                                        src={skill.icon}
                                        alt={`${skill.name} icon`}
                                        className="h-full w-full object-contain"
                                    />
                                </div>
                                <span className="font-medium">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}