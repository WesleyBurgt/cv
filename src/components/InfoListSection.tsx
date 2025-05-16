interface InfoListSectionProps {
    title: string;
    items: string[];
}

export default function InfoListSection({ title, items }: InfoListSectionProps) {
    return (
        <div className="p-8 rounded-lg bg-gray-950 h-fit">
            <h2 className="text-2xl font-medium">{title}</h2>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </div>
    );
}