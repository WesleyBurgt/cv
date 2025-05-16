"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { SkillCategory } from "@/lib/skillCategory";
import { SkillCategoryList } from "@/data/skillCategories";

function filteredCategoryList(query: string): SkillCategory[] {
    const categoryList = SkillCategoryList;

    if (!query) return categoryList;

    const lowerQuery = query.toLowerCase();
    const filtered: SkillCategory[] = [];

    for (const category of categoryList) {
        const matchingSkills = category.skills.filter(skill =>
            skill.name.toLowerCase().includes(lowerQuery)
        );

        if (matchingSkills.length > 0) {
            const filteredCategory = new SkillCategory(
                category.name,
                category.skills
            );
            filtered.push(filteredCategory);
        }
    }

    return filtered;
}

export default function SkillList() {
    const [searchQuery, setSearchQuery] = useState("")

    const query = searchQuery.trim();
    const displayedSkills = filteredCategoryList(query);

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

            {displayedSkills.map((category, index) => (
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