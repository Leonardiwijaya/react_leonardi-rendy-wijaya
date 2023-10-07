/* eslint-disable jsx-a11y/alt-text */
import { React, useState } from "react";
import styles from "../assets/css/style.module.css";

export default function Form(props) {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [image, setImage] = useState();
  const nameRegex = /[!@#$%^&*()_+//\\{}]/;
  const priceRegex = /[^0-9]/;
  const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

  const nameHandleChange = (event) => {
    return setName(event.target.value);
  };
  const priceHandleChange = (event) => {
    return setPrice(event.target.value);
  };
  const imageHandleChange = (event) => {
    return setImage(event.target.value);
  };

  return (
    <>
      <div className="container" id={styles["detail-product"]}>
        <form className="row-cols-1" onSubmit={props.add}>
          <h2>{props.formName}</h2>
          <TextInput
            label="ProductName"
            validate={nameHandleChange}
          ></TextInput>
          {nameRegex.test(name) && <Error message='Product name field must not contain symbol'/>}
          <SelectInput label="Product Category"></SelectInput>
          <FileInput validate={imageHandleChange} label="Image of Product"></FileInput>
          {!allowedExtensions.test(image) && image && <Error message='Image type must be in jpg, png or gif'/>}
          <RadioInput label="Product Freshness"></RadioInput>
          <TextareaInput label="Additional Description"></TextareaInput>
          <NumberInput validate={priceHandleChange} label="Product Price"></NumberInput>
          {priceRegex.test(price) && price && <Error message='Product price field must be filled with number'/>}
          <Button></Button>
        </form>
      </div>
    </>
  );
}

function TextInput(props) {
  return (
    <div className="mb-3" id="productNameDiv">
      <label htmlFor="productName" className="form-label">
        {props.label}
      </label>
      <input
        defaultValue={props.value}
        type="text"
        className="form-control"
        id={styles["text-input"]}
        name="name"
        onChange={props.validate}
        style={props.style}
        disabled={props.disabled}
      />
    </div>
  );
}

function SelectInput(props) {
  return (
    <div className="mb-3" id="productCategoryDiv">
      <label htmlFor="productCategory" className="form-label">
        {props.label}
      </label>
      <select id="select-input" className="form-select" name="category" disabled={props.disabled}>
        <option disabled="" value="">
          {" "}
          -- select an option --{" "}
        </option>
        <option value="choose">Choose...</option>
        { props.value && <option selected="selected" defaultValue={props.value}>{props.value}</option> }
      </select>
    </div>
  );
}

function FileInput(props) {
  return (
    <div className="mb-3" id="productImageDiv">
      <label htmlFor="productImage" className="form-label">
        {props.label}
      </label>
      {props.disabled ? <><br/> <img src={props.value} width={100} height={100}/></> : 
      <input
        type="file"
        accept="image/*"
        name="image"
        className="form-control border border-primary btn-outline-primary"
        id={styles["file-input"]}
        onChange={props.validate}
        disabled={props.disabled}
      />}
    </div>
  );
}

function RadioInput(props) {
  return (
    <div id="productFreshnessDiv">
      { props.disabled ? <label>{props.label}: {props.value}</label> :
      <>
      <label>{props.label}</label>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="freshness"
          id="flexRadioDefault1"
          value="Brand New"
          disabled={props.disabled}
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
          disabled={props.disabled}
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
          disabled={props.disabled}
        />
        <label className="form-check-label" htmlFor="flexRadioDefault3">
          Refufbished
        </label>
      </div>
      {props.value && 
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="freshness"
          id="flexRadioDefault4"
          defaultValue={props.value}
          checked="checked"
          disabled={props.disabled}
        />
        <label className="form-check-label" htmlFor="flexRadioDefault4">
          {props.value}
        </label>
      </div>}
      </>
      }
    </div>
  );
}

function TextareaInput(props) {
  return (
    <div className="mb-3" id="additionalDescriptionDiv">
      <label htmlFor="additional" className="form-label">
        {props.label}
      </label>
      <textarea
        name="description"
        className="form-control"
        id="textarea-input"
        defaultValue={props.value}
        disabled={props.disabled}
      />
    </div>
  );
}

function NumberInput(props) {
  return (
    <div className="mb-3" id="productPriceDiv">
      <label htmlFor="productPrice" className="form-label">
        {props.label}
      </label>
      <input
        type="text"
        className="form-control"
        id="number-input"
        name="price"
        onChange={props.validate}
        defaultValue={props.value}
        disabled={props.disabled}
      />
    </div>
  );
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

function Error(props) {
  const {message} = props;
  return (
    <p style={{ color: "red" }}>{message}</p>
  );
}

export {TextInput, SelectInput, FileInput, RadioInput, TextareaInput, NumberInput, Button}