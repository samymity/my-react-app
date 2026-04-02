
export function CarComponent({ data, drive }: { data: any, drive: () => void }) {
    return (
        <div>
            <h1>{data.model}</h1> {/* data is an object from your JSON bridge */}
            <button onClick={drive}>Start Engine</button>
        </div>
    );
}