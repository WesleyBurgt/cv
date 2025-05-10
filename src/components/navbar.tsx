import Link from "next/link"

export function Navbar() {
    return (
        <header className="border-b border-gray-800 bg-black">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link href="/" className="flex items-center text-xl font-semibold">
                    <span>Wesley v.d. Burgt</span>
                </Link>

                <nav className="flex items-center gap-8">
                    <Link href="/skills" className="font-medium hover:text-gray-300">
                        Skills
                    </Link>
                    <Link href="/projects" className="font-medium hover:text-gray-300">
                        Projects
                    </Link>
                </nav>
            </div>
        </header>
    )
}