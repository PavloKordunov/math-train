'use client'

import TestNav from "@/components/TestNav";
import TimeTracker from "@/components/TimeTracker";
import { ReactNode } from "react";

export default function homeLayout({ children }: { children: ReactNode }) {
    return (
        <div className="w-full px-20">
            <div className="relative">
                <div className="px-20 fixed inset-x-0 z-1000">
                    <TimeTracker />
                    <TestNav />
                </div>
            </div>
            <div className="py-70">{children}</div>
        </div>
    );
}
