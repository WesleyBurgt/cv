import { Experience } from "@/lib/experience";

interface ExperienceSectionProps {
    title: string;
    items: Experience[];
}

function formatTimeframe (item: Experience): string {
        const startDate = (item as any).startDate as Date | undefined;
        const endDate = (item as any).endDate as Date | undefined;

        const format = (date: Date | undefined, fallbackYear: number | undefined, isEnd = false): string => {
            if (date instanceof Date) {
                return date.toLocaleString("en-US", { month: "short", year: "numeric" });
            }
            if (isEnd) return fallbackYear?.toString() ?? "Present";
            return fallbackYear?.toString() ?? "";
        };

        const start = format(startDate, item.startYear);
        const end = format(endDate, item.endYear, true);

        return `${start} – ${end}`;
    };

export default function ExperienceSection({ title, items }: ExperienceSectionProps) {
    const sortedItems = items.toSorted((a, b) => b.startYear - a.startYear);

    return (
        <div className="p-8 rounded-lg bg-gray-950 h-fit">
            <h2 className="text-2xl font-medium">{title}</h2>
            <div className="divide-y divide-gray-800">
                {sortedItems.map((item, index) => (
                    <div key={index}>
                        <div className="flex justify-between mt-2">
                            <div>{formatTimeframe(item)}</div>
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
