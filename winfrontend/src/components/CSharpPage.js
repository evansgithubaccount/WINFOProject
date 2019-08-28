import React from 'react';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';




class CSharpPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id='cSharpPage'>
        <div class="row">
          <div class="col-sm-2">
            <ul class="nav flex-column">
              <li class="nav-item">
                <Link class="nav-link active" to={{ pathname: '/javascript/react' }}>TBD C#</Link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Other</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Other</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#">Other</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

    )
  }
}

export default withRouter(CSharpPage);