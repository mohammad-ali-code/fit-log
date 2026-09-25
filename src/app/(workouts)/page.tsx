import HeroSection from "./components/HeroSection";
import LibrarySection from "./components/LibrarySection";

export default function Home() {
    return (
        <main className="max-w-7xl w-full mx-auto px-6 py-16 space-y-16">
            <HeroSection></HeroSection>
            <LibrarySection></LibrarySection>
        </main>
    );
}
