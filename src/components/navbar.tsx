import Link from "next/link"

export function Navbar() {
    return (
        <header className="absolute w-full border-b border-gray-800 bg-black">
            <nav className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link href="/" className="flex items-center text-xl font-semibold">
                    <span>Wesley v.d. Burgt</span>
                </Link>

                <div className="flex items-center gap-8">
                    <Link href="/skills" className="font-medium hover:text-gray-300">
                        Skills
                    </Link>
                    <Link href="/projects" className="font-medium hover:text-gray-300">
                        Projects
                    </Link>
                </div>
            </nav>
        </header>
    )
}