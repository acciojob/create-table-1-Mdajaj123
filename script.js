// function insert_Row() {
//     //Write your code here
// 	const row=document.createElement("tr");
// 	const td=document.createElement("td");
// 	for(let i=1;i<=2;i++){
// 		td.innerText="New cell"+i;
// 	}
// 	row.appendChild(td);;
// 	const table=document.getElementById("sampleTable");
// 	const tr=document.querySelector("tr");
// 	table.insertBefore(tr,row);
    
  
// }
function insert_Row() {
    // Get the table by its ID
    var table = document.getElementById("sampleTable");

    // Insert a new row at the beginning of the table
    var newRow = table.insertRow(0);

    // Insert a cell in the new row at index 0
    var cell1 = newRow.insertCell(0);

    // Insert a cell in the new row at index 1
    var cell2 = newRow.insertCell(1);

    // Add text to the new cells
    cell1.innerText = "New Cell1";
    cell2.innerText = "New Cell2";
}

