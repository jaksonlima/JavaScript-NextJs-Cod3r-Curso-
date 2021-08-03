import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';

import './Intervalo.css';

function Media({ min, max }) {
  return (
    <Card title="Media dos Numeros" green>
    <div >
        <span>
          <span>Result: </span>
          <span>{(max + min) / 2}</span>
        </span>
    </div>
    </Card>
  );
}

const mapStateToProps = ({ numeros }) => (numeros)

export default connect(mapStateToProps)(Media);
