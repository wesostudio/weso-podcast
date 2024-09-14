export default function ListOfChapters() {
    return (<section>
        <h2 className="p-4 font-bold text-3xl uppercase">Episodes</h2>
        <ul>
            <ListOfChapters />
            <ListOfChapters />
            <ListOfChapters />
            <ListOfChapters />
        </ul>
    </section>)
}