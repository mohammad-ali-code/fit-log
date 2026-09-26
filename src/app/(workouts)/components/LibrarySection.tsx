import React from "react";
import LibrarySectionGrid from "./LibrarySectionGrid";

const LibrarySection = () => {
    return (
        <section id="library" className="space-y-8">
            <div className="space-y-1">
                <h2 className="font-oswald font-bold text-white text-3xl">
                    THE LIBRARY
                </h2>
                <p className="font-inter text-sm text-[#9CA3AF]">
                    Twelve lifts covering every major muscle group.
                </p>
            </div>
            <LibrarySectionGrid></LibrarySectionGrid>
        </section>
    );
};

export default LibrarySection;
