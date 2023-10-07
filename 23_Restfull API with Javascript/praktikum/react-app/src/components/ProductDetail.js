import {TextInput, SelectInput, FileInput, RadioInput, TextareaInput, NumberInput, Button} from './Form.js';
import styles from "../assets/css/style.module.css";

export default function ProductDetail(props) {
  const { name, category, image, freshness, description, price } = props.product ?? [];
  return (
    <>
      <section className={`${styles.section} container mt-5 pb-5`}>
        <form className="row-cols-1" onSubmit={props.edit}>
          <TextInput label="Product Name" value={name} disabled={props.view}></TextInput>
          <SelectInput label="Product Category" value={category} disabled={props.view}></SelectInput>
          <FileInput label="Image of Product" value={image} disabled={props.view}></FileInput>
          <RadioInput label="Product Freshness" value={freshness} disabled={props.view}></RadioInput>
          <TextareaInput label="Additional Description" value={description} disabled={props.view}></TextareaInput>
          <NumberInput label="Product Price" value={price} disabled={props.view}></NumberInput>
          {!props.view && <Button></Button>}
        </form>
      </section>
    </>
  );
}
