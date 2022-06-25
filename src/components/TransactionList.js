import React from "react";
import { Card, Button, Table } from 'react-bootstrap'
import { Link } from "react-router-dom"

const TransactionList = ({txs}) => {
    return (
        <Card >
            <Card.Header>
                <Card.Title>Transaction List</Card.Title>
            </Card.Header>
            <Card.Body>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Txn Hash</th>
                            <th>Method</th>
                            <th>Block</th>
                            <th>From</th>
                            <th>To</th>
                            <th>Value</th>
                            <th>Txn Fee</th>
                        </tr>
                    </thead>
                    <tbody>
                        {txs ? txs.map((item, idx) => (
                            <tr key={idx}>
                                <td><Link to={`/tx/${item.hash}`}>{item.hash ? item.hash.slice(0, 7) + '...': null}</Link></td>
                                <td><Button variant="secondary btn-list" size="sm" className="ml-2">{item.method}</Button></td>
                                <td><Link to={`/block/${item.blockNumber}`}>{item.blockNumber}</Link></td>
                                <td><Link to={`/address/${item.from}`}>{item.from ? item.from.slice(0, 7) + '...'+item.from.slice(38, 42) : null}</Link></td>
                                <td>{item.to ? <Link to={`/address/${item.to}`}>{item.to.slice(0, 7) + '...'+item.to.slice(38, 42)}</Link> : null}</td>
                                <td>{item.value / 10 ** 18} ether</td>
                                <td>{item.gas / 10 ** 0} gwei</td>
                            </tr>
                        )): null}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};
export default TransactionList;