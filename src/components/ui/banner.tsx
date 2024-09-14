import Image from "next/image";

export default function Banner() {
    return <section className="lg:col-span-2 flex justify-end">
        <Image 
            src="/podcast.png"
            alt="Weso Podcast"
            className="min-h-screen "
            width={240}
            height={600}        
        />
    </section>
}