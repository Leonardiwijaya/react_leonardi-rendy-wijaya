import {React, Component} from 'react';

export default class Content extends Component {
    render(){
        return <div className="container-fluid row-cols-1" id="create-product">
        <img src={this.props.logo} alt="" />
        <h1>{this.props.article?.title[this.props.language]}</h1>
        <p>
          {this.props.article?.description[this.props.language]}
        </p>
      </div>
    }
}

Content.defaultProps = {
  language: "en"
}