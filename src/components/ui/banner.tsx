import Image from "next/image";

export default function Banner() {
    return <>
        <Image 
            src="/podcast.png"
            alt="Weso Podcast"
            width={200}
            height={700}        
        />
    </>
}