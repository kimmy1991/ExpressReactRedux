/**
 * Created by kimmy on 26/02/2017.
 */
import React, {PropTypes} from 'react';


class Home extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}


export default Home;