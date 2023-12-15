export default function BlogMultiSlug({ params }) {
    return (
        <>
        <h1>hello</h1>
            <h1>{params?.slug?.length > 1 ? "multi " : "single "}slug handle [...slug]</h1>
            <ul>
                {params?.slug?.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
        </>
    )
}
