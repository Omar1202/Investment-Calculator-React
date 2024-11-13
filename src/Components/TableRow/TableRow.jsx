export default function TableRow({ children, ...props }) {
    return (
        <tr {...props}>
            {children}
        </tr>
    )
}