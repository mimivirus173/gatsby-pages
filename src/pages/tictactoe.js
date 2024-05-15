import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import {
    square,
} from '../components/tictactoe.css'

const TicTacToePage = () => {
    return (
      <main>
        <Layout pageTitle="Tic Tac Toe">
            <div className="board-row">
                <button className="square">X</button>
                <button className="square">X</button>
                <button className="square">X</button>
            </div>
            <div className="board-row">
                <button className="square">X</button>
                <button className="square">X</button>
                <button className="square">X</button>
            </div>
            <div className="board-row">
                <button className="square">X</button>
                <button className="square">X</button>
                <button className="square">X</button>
            </div>
        </Layout>
      </main>
    )
  }

export const Head = () => <Seo title="Tic Tac Toe" />

export default TicTacToePage