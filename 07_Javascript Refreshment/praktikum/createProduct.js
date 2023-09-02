let elements = ['productName', 'productCategory', 'productImage', 'additionalDescription', 'productPrice'];
let elementDivs = ['productNameDiv', 'productCategoryDiv', 'productImageDiv',  'additionalDescriptionDiv', 'productPriceDiv'];
let labels = ['product name', 'product category', 'product image', 'additional description', 'product price']
let fills = {
    productName: false,
    productCategory: false,
    productImage: false,
    productFreshness: false,
    additionalDescription: false,
    productPrice: false,
};
submitButton.disabled = true;

function update(name) {
    let index = elements.findIndex((element) => element === name);
    if (index === -1) {
        let [radio1, radio2, radio3] = document.querySelectorAll('#productFreshnessDiv input');
        let radioStatus = [radio1.checked, radio2.checked, radio3.checked];
        fills['productFreshness'] = radioStatus.includes(true);
    } else {
        fills[elements[index]] = (document.getElementById(`${elements[index]}`).value.length > 0)
    }
    if (Object.values(fills).includes(false)) {
        submitButton.disabled = true;
    } else {
        submitButton.disabled = false;
    };
}

function validation() {

    let productName = document.getElementById("productName");
    let productPrice = document.getElementById("productPrice");
    let submitButton = document.getElementById("submitButton");
    const pattern = /[@/#{}]/;
    
    for (let i = 0; i < elements.length; i++) {
        let element = document.getElementById(`${elements[i]}`).value;
        let elementDiv = document.getElementById(`${elementDivs[i]}`);
        let errorMessage = document.querySelector(`#${elementDivs[i]} .error`);
        if ( element.length === 0 && typeof errorMessage?.innerHTML === 'undefined') {
            elementDiv.innerHTML += `<p class='error'>The ${labels[i]} field must be filled in</p>`;
        }
        else if (element.length > 0 && typeof errorMessage?.innerHTML === 'string'){
            errorMessage.remove();
        } else {
            console.log(element);
        }
      }
      let [radio1, radio2, radio3] = document.querySelectorAll('#productFreshnessDiv input');
      let radioStatus = [radio1.checked, radio2.checked, radio3.checked];
      if (!radioStatus.includes(true) && typeof document.querySelector('#productFreshnessDiv .error')?.innerHTML === 'undefined') {
        document.getElementById('productFreshnessDiv').innerHTML += `<p class='error'>The product freshness field must be filled in</p>`;
      }
      else if (radioStatus.includes(true) && typeof document.querySelector('#productFreshnessDiv .error')?.innerHTML === 'string'){
        document.querySelector('#productFreshnessDiv .error')?.remove();
      }
    
    if (productName.value.length > 25) {
        alert("Product Name must not exceed 25 characters.")
    }
    if (productName.value.length === 0) {
        alert("Please enter a valid Product name.");
    }
    else if (productPrice.value.length === 0) {
        alert("Please enter a valid Product price.");
    }

    if (pattern.test(productName.value)) {
        alert("Product Name must not contain symbols.");
        document.getElementById("productName").style.border = '1px solid red';
    } else {
        document.getElementById("productName").style.border = '1px solid gray';
    }
}
