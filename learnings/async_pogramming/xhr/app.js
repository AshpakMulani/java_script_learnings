document.getElementById('button2').addEventListener('click', loadCustomers);

// Load Customers
function loadCustomers(e) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customers.json', true);
  // customer.json can be replaced with another API endpoint
  // depending on response format from API we need to process
  // the data

  //register a function to execute on data load 
  xhr.onload = function(){
    // check if status is success
    if(this.status === 200) {
      // parse the received data in JSON object
      const customers = JSON.parse(this.responseText);
      let output = '';

      // create dynamic html format from returned data
      customers.forEach(function(customer){
        output += `
        <ul>
          <li>ID: ${customer.id}</li>
          <li>Name: ${customer.name}</li>
          <li>Company: ${customer.company}</li>
          <li>Phone: ${customer.phone}</li>
        </ul>
      `;
      });

      document.getElementById('customers').innerHTML = output;
    }
  }

  xhr.send();
}