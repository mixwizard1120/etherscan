import { useState, useEffect } from 'react'
import { ethers } from "ethers"
import { Row, Col, Card } from 'react-bootstrap'
import { Link } from "react-router-dom";

const Contract = ({ networkName }) => {
    const [loading, setLoading] = useState(false)
    const [lastBlockNumber, setLastBlockNumber] = useState(0)

    //const [account, setAccount] = useState([])
    console.log('Network:', networkName)

    //get last block number
    const getLastBlockNumber = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const blockNumber = await provider.getBlockNumber()
        console.log('Last block number:', blockNumber)

        setLastBlockNumber(blockNumber)
    }

    //const getLastBlockTransaction = async () => {
    //    const provider = new ethers.providers.Web3Provider(window.ethereum)
      //  const blockNumber = await provider.getBlockNumber()
    //}

    useEffect(() => {
      getLastBlockNumber()

      }, [])
      if (loading) return (
        <main style={{ padding: "1rem 0" }}>
          <h2>Loading home...</h2>
        </main>
      )

      //setLoading(false)
      // Render ---------------------------------------------------------------------------------------------------------- //
      return (
        <div className="flex justify-center">
            <div className="px-5 py-3 container">
                <h2>Ethereum Block Scanner</h2>

                <Link to={`/block/${lastBlockNumber}`}>{lastBlockNumber}</Link>

                <Row className="justify-content-center">
                    <Col xs={1} md={4} lg={6}>
                        <Card className="text-center">
                            <Card.Body>
                                <Card.Title>
                                    <h3>Latest Blocks</h3>
                                </Card.Title>
                                <Card.Text>
                                    <span className="text-muted">
                                        <i className="fas fa-user-circle">Text</i>
                                    </span>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={1} md={4} lg={6}>
                        <Card className="text-center">
                            <Card.Body>
                                <Card.Title>
                                    <h3>Latest Transactions</h3>

                                </Card.Title>
                                <Card.Text>
                                    <span className="text-muted">
                                        <i className="fas fa-user-circle">Text</i>
                                    </span>

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>

            </div>
        </div>
    );
}
export default Contract