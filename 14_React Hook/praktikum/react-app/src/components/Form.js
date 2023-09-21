import { React, Component, useState } from "react";

export default function Form(props) {
  const [productNameLength, setProductNameLength] = useState(0);

  const handleChange = (event) => {
    return setProductNameLength(event.target.value.length);
  };
  const handleSubmit = (event) => {
    // if (productNameLength === 0) {
    //   alert("Please enter a valid product name.");
    // }
  };
  return (
    <>
      <div className="container" id="detail-product">
        <form className="row-cols-1" onSubmit={props.onSubmit}>
          <h2>{props.formName}</h2>
          <TextInput
            label="ProductName"
            validate={handleChange}
            style={productNameLength > 25 ? { border: "1px solid red" } : null}
          ></TextInput>
          {productNameLength > 25 && errorMessage()}
          <SelectInput label="Product Category"></SelectInput>
          <FileInput label="Image of Product"></FileInput>
          <RadioInput label="Product Freshness"></RadioInput>
          <TextareaInput label="Additional Description"></TextareaInput>
          <NumberInput label="Product Price"></NumberInput>
          <Button></Button>
        </form>
      </div>
    </>
  );
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
          name="name"
          onChange={this.props.validate}
          style={this.props.style}
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
      >
        <label htmlFor="productCategory" className="form-label">
          {this.props.label}
        </label>
        <select id="select-input" className="form-select" name="category">
          <option disabled="" value="">
            {" "}
            -- select an option --{" "}
          </option>
          <option value="choose">Choose...</option>
        </select>
      </div>
    );
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
        />
      </div>
    );
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
            name="freshness"
            id="flexRadioDefault1"
            value="Brand New"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Brand New
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="freshness"
            id="flexRadioDefault2"
            value="Second Hand"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Second Hand
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="freshness"
            id="flexRadioDefault3"
            value="Refufbished"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault3">
            Refufbished
          </label>
        </div>
      </div>
    );
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
          defaultValue={""}
        />
      </div>
    );
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
          name="price"
        />
      </div>
    );
  }
}

function Button(props) {
  return (
    <button
      className="btn btn-primary"
      id="submitButton"
      type="submit"
      onClick={props.validate}
    >
      Submit
    </button>
  );
}

function errorMessage() {
  return (
    <p style={{ color: "red" }}>Last Name must not exceed 25 characters.</p>
  );
}
