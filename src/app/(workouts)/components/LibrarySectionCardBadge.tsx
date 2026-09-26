const LibrarySectionCardBadge = ({ muscle }: { muscle: string }) => {
    return (
        <span className="text-xs font-bold bg-[#C2F800] text-black rounded-full px-2.5 py-0.5">
            {muscle}
        </span>
    );
};

export default LibrarySectionCardBadge;
