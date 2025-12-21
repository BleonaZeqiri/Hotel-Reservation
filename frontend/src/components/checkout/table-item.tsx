
type IProps = {
    name: string;
    value: string;
}
export default function TableItem({ name, value }: IProps) {
    return (
        <tr className="cart_item">
            <td className="product-name">
                {name}
            </td>
            <td className="product-total">
                <span className="amount">{value}</span>
            </td>
        </tr>
    )
}
