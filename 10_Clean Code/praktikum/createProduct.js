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

let data = [];
let newData = {
    id: null,
    productName: null,
    productCategory: null,
    productImage: null,
    productFreshness: null,
    additionalDescription: null,
    productPrice: null,
};
submitButton.disabled = true;

// Function update untuk mendisable button submit jika ada form yang belum terisi
function update(name) {
    let index = elements.findIndex((element) => element === name);
    if (index === -1) {
        let [radio1, radio2, radio3] = document.querySelectorAll('#productFreshnessDiv input');
        let radioStatus = [radio1.checked, radio2.checked, radio3.checked];
        fills['productFreshness'] = true;
    } else {
        fills[elements[index]] = (document.getElementById(`${elements[index]}`).value.length > 0)
    }
    if (Object.values(fills).includes(false)) {
        submitButton.disabled = true;
    } else {
        submitButton.disabled = false;
    };
}

// Function validation untuk menvalidasi setiap memasukkan input
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


    add();
    read();
}

// function add berfungsi untuk menambah data pada tabel
function add() {
    let id = 1;
    if (data.length >= 1) {
        id = data[data.length-1].id+1;
    }
    newData = {
        id: id,
    };
    for (let i = 0; i < elements.length; i++) {
        newData[elements[i]] = document.getElementById(`${elements[i]}`).value;
    }
    newData['productFreshness'] = document.querySelector("input[type='radio'][name=flexRadioDefault]:checked").value;
    data.push(newData);
}

//function read untuk menampilkan data yang baru ditambahkan
function read() {
    document.querySelector('tbody').innerHTML += `
    <tr>
        <td scope="col">${newData.id}</td>
        <td scope="col">${newData.productName}</td>
        <td scope="col">${newData.productCategory}</td>
        <td scope="col">${newData.productImage}</td>
        <td scope="col">${newData.productFreshness}</td>
        <td scope="col">${newData.additionalDescription}</td>
        <td scope="col">${newData.productPrice}</td>
    </tr>`;
}

//function update untuk mengupdate tampilan product ketika ada data yang dihapus
function updateProduct() {
    document .querySelector('tbody').innerHTML = '';
    for (let i = 0; i < data.length; i++) {
        document.querySelector('tbody').innerHTML += `
    <tr>
        <td scope="col">${data[i].id}</td>
        <td scope="col">${data[i].productName}</td>
        <td scope="col">${data[i].productCategory}</td>
        <td scope="col">${data[i].productImage}</td>
        <td scope="col">${data[i].productFreshness}</td>
        <td scope="col">${data[i].additionalDescription}</td>
        <td scope="col">${data[i].productPrice}</td>
    </tr>`;
    }
}

function deleteProduct() {
    let id = document.getElementById('productId').value;
    let index = data.findIndex(i => i.id === parseInt(id));
    if (typeof index !== 'undefined') {
        data.splice(index, 1);
    }
    updateProduct();
}

function searchProduct() {
    let id = document.getElementById('productId').value;
    let result = data.find(i => i.id === parseInt(id));
    if (typeof result === 'undefined') {
        alert(`Product with id = ${id} not found`)
    } else {
        alert(`
        id: ${result.id},
        product name: ${result.productName},
        product category: ${result.productCategory},
        product image: ${result.productImage},
        product freshness: ${result.productFreshness},
        additional description: ${result.additionalDescription},
        product price: ${result.productPrice},
        `);
    }
}