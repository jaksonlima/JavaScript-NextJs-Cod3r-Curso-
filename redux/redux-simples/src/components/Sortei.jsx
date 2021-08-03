import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';

import './Intervalo.css';

function Sorteo({ min, max }) {
  return (
    <Card title="Sortei de um Numeros" purple>
    <div >
        <span>
          <span>Result: </span>
          <span>{parseInt(Math.random() * (min - max)) + min}</span>
        </span>
    </div>
    </Card>
  );
}

const mapStateToProps = ({ numeros }) => (numeros)

export default connect(mapStateToProps)(Sorteo);
