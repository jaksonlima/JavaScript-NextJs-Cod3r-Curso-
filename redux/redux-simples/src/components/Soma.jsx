import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';

import './Intervalo.css';

function Soma({ max, min }) {
  return (
    <Card title="Soma dos Numeros" blue>
    <div>
        <span>
          <span>Result: </span>
          <span>{max + min}</span>
        </span>
    </div>
    </Card>
  );
}

const mapStateToProps = ({ numeros }) => (numeros)

export default connect(mapStateToProps)(Soma);
