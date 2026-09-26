"use client";
import Link from "next/link";
import { FaArrowLeft, FaDumbbell } from "react-icons/fa";

const NotFound = () => {
    return (
        <main className="min-h-screen bg-[#0F1014] text-white font-inter flex flex-col">
            <section className="flex-1 flex items-center justify-center px-6 py-16 overflow-hidden">
                <div className="w-full max-w-4xl text-center">
                    <div className="relative mx-auto mb-8 h-36 w-72 flex items-center justify-center">
                        <div className="absolute h-28 w-28 rounded-full bg-[#C2F800]/10 blur-3xl animate-pulse" />
                        <div className="absolute left-1/2 top-1/2 h-28 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#2A2E39]" />
                        <div className="relative z-10 animate-lift">
                            <FaDumbbell className="text-7xl text-[#C2F800] drop-shadow-[0_0_18px_rgba(194,248,0,0.2)]" />
                        </div>
                        <span className="absolute left-8 h-12 w-2 rounded-full bg-[#C2F800]/60 animate-pulse" />
                        <span className="absolute right-8 h-12 w-2 rounded-full bg-[#C2F800]/60 animate-pulse" />
                    </div>
                    <div className="relative">
                        <h1 className="font-oswald font-bold text-[9rem] sm:text-[12rem] md:text-[15rem] leading-none tracking-[-0.06em] text-white/5 select-none">
                            404
                        </h1>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <p className="font-oswald font-bold text-5xl sm:text-6xl md:text-7xl tracking-tight text-white">
                                404
                            </p>
                        </div>
                    </div>
                    <div className="mt-2 space-y-4">
                        <div className="flex items-center justify-center gap-3">
                            <span className="h-px w-10 bg-[#C2F800]" />
                            <p className="font-inter text-xs font-bold tracking-[0.2em] text-[#C2F800]">
                                REP NOT FOUND
                            </p>
                            <span className="h-px w-10 bg-[#C2F800]" />
                        </div>
                        <h2 className="font-oswald font-bold text-3xl sm:text-4xl md:text-5xl text-white uppercase">
                            This workout doesn&apos;t exist.
                        </h2>
                        <p className="mx-auto max-w-xl text-sm sm:text-base leading-7 text-[#8A92A0]">
                            Looks like you tried to lift something that
                            isn&apos;t in the library. No worries — rack the
                            weight and head back to the workouts.
                        </p>
                    </div>
                    <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/"
                            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#C2F800] px-6 py-3 font-inter text-sm font-bold text-black transition-all duration-200 hover:bg-[#D4FF33] hover:scale-105 active:scale-95">
                            <FaDumbbell className="transition-transform duration-300 group-hover:rotate-12" />
                            BACK TO WORKOUTS
                        </Link>

                        <Link
                            href="/my-plans"
                            className="group inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#303541] bg-[#15171D] px-6 py-3 font-inter text-sm font-semibold text-white transition-all duration-200 hover:border-[#C2F800] hover:text-[#C2F800] hover:scale-105 active:scale-95">
                            <FaArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
                            MY PLAN
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default NotFound;
