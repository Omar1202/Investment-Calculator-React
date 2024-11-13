import TableRow from '../TableRow/TableRow';
import { formatter } from '../../util/investment';

export default function TableInnerContent({rows}) {

    let contentTest = [];

    rows.map((row) => {
        let rowList = [];
        Object
            .keys(row)
            .forEach((value, indx) => {
                if (value != "year") {
                    rowList.push(<td key={indx + 1}>{formatter.format(row[value])}</td>);
                }else {
                    rowList.push(<td key={indx + 1}>{row[value]}</td>);
                }
            });
            contentTest.push(rowList);
    });

    console.log("Inner: " + contentTest);

    return (
        <tbody>
            {
                contentTest.map((inner, idx) => <TableRow key={idx}>{inner}</TableRow>)
            }
        </tbody>
    )
}