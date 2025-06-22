import { Experience } from "@/lib/experience";

interface ExperienceSectionProps {
    title: string;
    items: Experience[];
}

export default function ExperienceSection({ title, items }: ExperienceSectionProps) {
    const sortedItems = items.toSorted(function(a, b){return b.startYear-a.startYear})

    return (
        <div className="p-8 rounded-lg bg-gray-950 h-fit">
            <h2 className="text-2xl font-medium">{title}</h2>
            <div className="divide-y divide-gray-800">
                {sortedItems.map((item, index) => (
                    <div key={index}>
                        <div className="flex justify-between mt-2">
                            <div>{item.startYear}–{item.endYear ?? "Present"}</div>
                            <div>{item.name}</div>
                        </div>
                        {item.extraInfo && (
                            <div className="mb-2 text-sm">{item.extraInfo}</div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
