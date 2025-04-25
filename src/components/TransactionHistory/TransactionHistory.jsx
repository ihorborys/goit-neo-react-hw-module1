import styles from "./TransactionHistory.module.css"


const TransactionHistory = ({items}) => {
    return <table className={styles.table}>
        <thead className={styles.tableHeader}>
        <tr>
            <th className={styles.tableHeaderRowData}>Type</th>
            <th className={styles.tableHeaderRowData}>Amount</th>
            <th className={styles.tableHeaderRowData}>Currency</th>
        </tr>
        </thead>
        {items.map((item, index) =>
            <tbody key={item.id}>
            <tr className={(index % 2 === 0) ? styles.tableBodyRow : styles.tableBodyRowGrey}>
                <td className={styles.tableBodyRowData}>{item.type}</td>
                <td className={styles.tableBodyRowData}>{item.amount}</td>
                <td className={styles.tableBodyRowData}>{item.currency}</td>
            </tr>
            </tbody>
        )}
    </table>

}

export default TransactionHistory
