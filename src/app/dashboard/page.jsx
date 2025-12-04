"use client"

import WidgetBox from "@/components/WidgetBox";
import { useState } from "react";

export default function Dashboard() {
    const [preferences, setPreferences] = useState();

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <WidgetBox setPreferences={setPreferences}/>
        </div>
    )
}