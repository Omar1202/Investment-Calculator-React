export default function TableHeader({ heads }) {
    return (
        <thead>
            <tr>
                {heads.map( (head, ind) => <td key={ind}>{head}</td> )}
            </tr>
        </thead>
    );
}