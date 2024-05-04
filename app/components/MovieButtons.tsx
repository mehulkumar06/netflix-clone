"use client";

import { Button } from "@/components/ui/button";
import { InfoIcon, PlayCircle } from "lucide-react";
import { useState } from "react";
import PlayVideoModal from "./PlayVideoModal";

interface iAppProps {
    overview: string,
    youtubeUrl: string,
    id: number,
    age: number,
    title: string,
    relaseDate: number;
    duration: number;
}

export default function MovieButton({
    overview,
    youtubeUrl,
    age,
    duration,
    id,
    relaseDate,
    title,

} : iAppProps) {
    const [open, setOpen] = useState(false)
    return (
        <>
        <Button onClick={() => setOpen(true)} className="text-lg font-medium">
            <PlayCircle className="mr-2 h-6 w-6"/> Play
        </Button>
        <Button onClick={() => setOpen(true)} className="text-lg font-medium bg-white/40 hover:bg-white/30 text-white">
            <InfoIcon className="mr-2 h-6 w-6"/> Learn More
        </Button>

        <PlayVideoModal state={open} changeState={setOpen} age={age} duration={duration} key={id} overview={overview} release={relaseDate} title={title} youtubeUrl={youtubeUrl}/>
        </>
    )
}