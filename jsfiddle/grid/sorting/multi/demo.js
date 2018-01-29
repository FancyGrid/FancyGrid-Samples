var data = [{
  name: 'Ted',
  surname: 'Smith',
  company: 'Electrical Systems',
  salary: 70000,
  age: 30
}, {
  name: 'Ed',
  surname: 'Johnson',
  company: 'Energy and Oil',
  salary: 75000,
  age: 35
}, {
  name: 'Sam',
  surname: 'Williams',
  company: 'Airbus',
  salary: 80000,
  age: 38
}, {
  name: 'Alexander',
  surname: 'Brown',
  company: 'Renault',
  salary: 70000,
  age: 24
}, {
  name: 'Nicholas',
  surname: 'Miller',
  company: 'Adobe',
  salary: 70000,
  age: 33
}, {
  name: 'Andrew',
  surname: 'Thompson',
  company: 'Google',
  salary: 80000,
  age: 28
}, {
  name: 'Ryan',
  surname: 'Walker',
  company: 'Siemens',
  salary: 75000,
  age: 39
}, {
  name: 'John',
  surname: 'Scott',
  company: 'Cargo',
  salary: 75000,
  age: 45
}, {
  name: 'James',
  surname: 'Phillips',
  company: 'Pro bugs',
  salary: 70000,
  age: 30
}, {
  name: 'Brian',
  surname: 'Edwards',
  company: 'IT Consultant',
  salary: 80000,
  age: 23
}, {
  name: 'Jack',
  surname: 'Richardson',
  company: 'Europe IT',
  salary: 80000,
  age: 24
}, {
  name: 'Alex',
  surname: 'Howard',
  company: 'Cisco',
  salary: 80000,
  age: 27
}, {
  name: 'Carlos',
  surname: 'Wood',
  company: 'HP',
  salary: 70000,
  age: 36
}, {
  name: 'Adrian',
  surname: 'Russell',
  company: 'Micro Systems',
  salary: 80000,
  age: 31
}, {
  name: 'Jeremy',
  surname: 'Hamilton',
  company: 'Big Machines',
  salary: 80000,
  age: 30
}, {
  name: 'Ivan',
  surname: 'Woods',
  company: '',
  salary: 80000,
  age: 24
}, {
  name: 'Peter',
  surname: 'West',
  company: 'Adobe',
  salary: 75000,
  age: 26
}, {
  name: 'Scott',
  surname: 'Simpson',
  company: 'IBM',
  salary: 75000,
  age: 29
}, {
  name: 'Lorenzo',
  surname: 'Tucker',
  company: 'Intel',
  salary: 80000,
  age: 29
}, {
  name: 'Randy',
  surname: 'Grant',
  company: 'Bridges',
  salary: 70000,
  age: 30
}, {
  name: 'Arthur',
  surname: 'Gardner',
  company: 'Google',
  salary: 75000,
  age: 31
}, {
  name: 'Orlando',
  surname: 'Ruiz',
  company: 'Apple',
  salary: 75000,
  age: 32
}];

document.addEventListener("DOMContentLoaded", function() {

  new FancyGrid({
    title: 'Multi Sorting',
    renderTo: 'container',
    width: 700,
    height: 400,
    data: data,
    multiSort: true,
    defaults: {
      type: 'string',
      width: 100,
      editable: true,
      resizable: true,
      sortable: true
    },
    columns: [{
      index: 'age',
      title: 'Age',
	  width: 50,
      type: 'number'
    }, {
      index: 'salary',
      title: 'Salary',
	  width: 80,
      type: 'currency'
    }, {
      index: 'name',
      title: 'Name'
    }, {
      index: 'surname',
      title: 'Sur Name'
    }, {
      index: 'company',
      title: 'Company'
    }]
  });

});