import { get } from "http";
import prisma from "../utils/db"
import { DiscAlbum } from "lucide-react";
import { Button } from "@/components/ui/button";
import MovieButton from "./MovieButtons";

async function getData() {
    
    const data = await prisma.movie.findFirst({
        select: {
            title: true,
            overview: true,
            videoSource: true,
            imageString: true,
            release: true,
            duration: true,
            id: true,
            age: true,
            youtubeString: true
        },
    
    });

    return data 
}


export default async function MovieVideo() {
    const data = await getData();
    return(
       <div className="h-[55vh] lg:h-[60vh] w-full flex justify-start items-center">
        <video 
        poster={data?.imageString}
        autoPlay
        muted
        loop
        src={data?.videoSource}
        className="w-full absolute top-0 left-0 h-[60vh] object-cover -z-10 brightness-[60%]"
        >


        </video>
        <div className="absolute w-[90%] lg:w-[40%] mx:auto">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">{data?.title}</h1>
            <p className="text-white text-lg mt-5 line-clamp-3 drop-shadow-xl">{data?.overview}</p>
            <div className="flex gap-x-2 mt-4">
                <MovieButton 
                overview={data?.overview as string} 
                youtubeUrl={data?.youtubeString as string} 
                id={data?.id as number} 
                age={data?.age as number} 
                title={data?.title as string} 
                relaseDate={data?.release as number} 
                duration={data?.duration as number} 
                key={data?.id}
                />
            </div>

        </div>

       </div>
    )
}