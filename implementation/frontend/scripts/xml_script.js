// Use fetch API to get the XML data
console.log("Hello World!");

function fetchDataAndCreateTable(resource) {
	fetch("http://localhost:8081/" + resource, {
		method: "GET",
		headers: {
			Accept: "application/xml", // Specify that you want to receive XML
		},
	})
		.then((response) => response.text())
		.then((data) => {
			console.log(data);
			let blob = new Blob([data], { type: "text/xml" });
			let url = window.URL.createObjectURL(blob);
			var link = document.createElement("a");
			link.href = url;
			link.download = "query_result.xml"; // Set the filename for the downloaded file
			// Append the link to the body
			document.body.appendChild(link);
			// Trigger a click event on the link
			link.click();
			// Remove the link from the DOM
			document.body.removeChild(link);
			// let parser = new DOMParser();
			// let xmlDoc = parser.parseFromString(data, "text/xml");
			// // Use XPath to get all the 'book' elements
			// let xpath = new XPathEvaluator();
			// let books = xpath.evaluate(
			// 	"/",
			// 	xmlDoc,
			// 	null,
			// 	XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
			// 	null
			// );
			// console.log(books);
			// // Create a table
			// let table = document.createElement("table");
			// // Create table header
			// let thead = document.createElement("thead");
			// let headerRow = document.createElement("tr");
			// // Get the first book to create the headers
			// if (books.snapshotLength > 0) {
			// 	let firstBook = books.snapshotItem(0);
			// 	let headers = firstBook.childNodes;
			// 	headers.forEach((header) => {
			// 		if (header.nodeType === Node.ELEMENT_NODE) {
			// 			let th = document.createElement("th");
			// 			th.appendChild(
			// 				document.createTextNode(header.nodeName)
			// 			);
			// 			headerRow.appendChild(th);
			// 		}
			// 	});
			// }
			// thead.appendChild(headerRow);
			// table.appendChild(thead);
			// // Create table body
			// let tbody = document.createElement("tbody");
			// for (let i = 0; i < books.snapshotLength; i++) {
			// 	let book = books.snapshotItem(i);
			// 	let row = document.createElement("tr");
			// 	// Create a cell for each book property and append it to the row
			// 	book.childNodes.forEach((bookProperty) => {
			// 		if (bookProperty.nodeType === Node.ELEMENT_NODE) {
			// 			let td = document.createElement("td");
			// 			td.appendChild(
			// 				document.createTextNode(bookProperty.textContent)
			// 			);
			// 			row.appendChild(td);
			// 		}
			// 	});
			// 	// Append the row to the table body
			// 	tbody.appendChild(row);
			// }
			// // Append the table body to the table
			// table.appendChild(tbody);
			// // Append the table to the body
			// document.body.appendChild(table);
		})
		.catch((error) => console.error("Error:", error));
}
