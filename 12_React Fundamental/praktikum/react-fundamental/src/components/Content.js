import {React, Component} from 'react';

export default class Content extends Component {
    render(){
        return <div className="container-fluid row-cols-1" id="create-product">
        <img src={this.props.logo} alt="" />
        <h1>Create Product</h1>
        <p>
          Below is an example form built entirely with Bootstrap’s form
          controls. Each required form group has a validation state that can be
          triggered by attempting to submit the form without completing it.
        </p>
      </div>
    }
}
