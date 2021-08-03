import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Card from './Card';
import * as ActionCreators from '../store/actions/numeros'

import './Intervalo.css';

function Intervalo({ min, max, onChangeMax, onChangeMin }) {
  return (
    <Card title="Intervalo de Numeros" red>
    <div className="Intervalo">
        <span>
          <strong>Minimo:</strong>
          <input 
          type='number' 
          value={min}
          onChange={env => onChangeMin(+env.target.value)}
          />
        </span>
        <span>
          <strong>Maximo:</strong>
          <input 
          type="number" 
          value={max}
          onChange={env => onChangeMax(+env.target.value)}          
          />
        </span>
        </div>
    </Card>
  );
}


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    onChangeMax: ActionCreators.onChangeMax,
    onChangeMin: ActionCreators.onChangeMin
  }, dispatch);
}

const mapStateToProps = ({ numeros }) => (numeros)  

export default connect(mapStateToProps, mapDispatchToProps)(Intervalo);
