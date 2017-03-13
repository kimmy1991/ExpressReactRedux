/**
 * Created by kimmy on 26/02/2017.
 */
import React, {PropTypes} from 'react';
import styles from './anotherComponent.css'

class AnotherComponent extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className={styles.root}>
      <h1>this is another component</h1>
      </div>
    )
  }
}


export default AnotherComponent;