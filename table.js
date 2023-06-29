let newForm = document.getElementById("submitBtn");

//when the submit button is clicked
newForm.addEventListener("click", function(e) {
    e.preventDefault();
    
    //record input
    let newName = document.getElementById('productName').value;
    let newCategory = document.getElementById('productCategory').value;
    let newPrice = document.getElementById('productPrice').value;

    //if inputs are valid, create table data and button.
    //append table data and button to table row.
    //each row is given a row number as value in delete button and id in table row.
    //clear input boxes 
    if(newName && newCategory && newPrice && !isNaN(newPrice)) {
        let tdName = document.createElement("td");
        let tdCategory = document.createElement("td");
        let tdPrice = document.createElement("td");
        let tdButton = document.createElement("td");

        let Button = document.createElement("button");

        tdName.innerHTML = newName;
        tdCategory.innerHTML = newCategory;
        tdPrice.innerHTML = "$" + newPrice;
        Button.innerHTML = "Delete";

        let rowNumber = document.getElementsByTagName("tr").length;
        Button.setAttribute("value", rowNumber);
        tdButton.appendChild(Button);

        let newRow = document.createElement("tr");
        newRow.append(tdName, tdCategory, tdPrice, tdButton);
        newRow.setAttribute("id", rowNumber);
        document.getElementById("contents").appendChild(newRow);

        document.getElementById('productName').value = '';
        document.getElementById('productCategory').value = '';
        document.getElementById('productPrice').value = '';
    }
    
});

//when the delete button is clicked
let content = document.getElementById("contents")
content.addEventListener("click", function(e) {
    document.getElementById(e.target.value).remove();
})
