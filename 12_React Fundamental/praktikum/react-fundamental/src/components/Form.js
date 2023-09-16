import { React, Component } from "react";

export default class Form extends Component {
  render() {
    return (
      <div className="container" id="detail-product">
        <form className="row-cols-1">
          <h2>{this.props.formName}</h2>
          <TextInput label="Product Name"></TextInput>
          <SelectInput label="Product Category"></SelectInput>
          <FileInput label="Image of Product"></FileInput>
          <RadioInput label="Product Freshness"></RadioInput>
          <TextareaInput label="Additional Description"></TextareaInput>
          <NumberInput label="Product Price"></NumberInput>
          <button
            onclick="validation()"
            className="btn btn-primary"
            id="submitButton"
            type="button"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

class TextInput extends Component {
  render() {
    return (
      <div className="mb-3" id="productNameDiv">
        <label htmlFor="productName" className="form-label">
          {this.props.label}
        </label>
        <input
          type="text"
          className="form-control"
          id="text-input"
          oninput="update('productName')"
        />
      </div>
    );
  }
}

class SelectInput extends Component {
    render() {
        return (
            <div
            className="mb-3"
            id="productCategoryDiv"
            onchange="update('productCategory')"
          >
            <label htmlFor="productCategory" className="form-label">
              {this.props.label}
            </label>
            <select id="select-input" className="form-select">
              <option disabled="" selected="" value="">
                {" "}
                -- select an option --{" "}
              </option>
              <option value="choose">Choose...</option>
            </select>
          </div>
        )
    }
}
class FileInput extends Component {
    render() {
        return (
            <div className="mb-3" id="productImageDiv">
<label htmlFor="productImage" className="form-label">
  {this.props.label}
</label>
<input
  type="file"
  className="form-control border border-primary btn-outline-primary"
  id="file-input"
  oninput="update('productImage')"
/>
</div>
        )
    }
}

class RadioInput extends Component {
    render() {
        return (
            <div id="productFreshnessDiv">
            <label>{this.props.label}</label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                oninput="update('productFreshness')"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Brand New
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                oninput="update('productFreshness')"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Second Hand
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault3"
                oninput="update('productFreshness')"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault3">
                Refufbished
              </label>
            </div>
          </div>
        )
    }
}

class TextareaInput extends Component {
    render() {
        return (
            <div className="mb-3" id="additionalDescriptionDiv">
            <label htmlFor="additional" className="form-label">
            {this.props.label}
            </label>
            <textarea
              className="form-control"
              id="textarea-input"
              oninput="update('additionalDescription')"
              defaultValue={""}
            />
          </div>
        )
    }
}

class NumberInput extends Component {
    render() {
        return (
        <div className="mb-3" id="productPriceDiv">
            <label htmlFor="productPrice" className="form-label">
            {this.props.label}
            </label>
            <input
              type="number"
              className="form-control"
              id="number-input"
              oninput="update('productPrice')"
            />
          </div>
        )
    }
}

