var data = [{
  id: 1,
  name: 'Ted',
  surname: 'Smith',
  position: 'Java Developer',
  email: 'ted.smith@gmail.com',
  company: 'Electrical Systems',
  age: 30,
  married: true,
  country: 'USA'
}, {
  id: 2,
  name: 'Ed',
  surname: 'Johnson',
  position: 'C/C++ Market Data Developer',
  email: 'ed.johnson@gmail.com',
  company: 'Energy and Oil',
  age: 35,
  married: true,
  country: 'Canada'
}, {
  id: 3,
  name: 'Sam',
  surname: 'Williams',
  position: 'Technical Analyst',
  email: 'sam.williams@gmail.com',
  company: 'Airbus',
  age: 38,
  married: true,
  country: 'England'
}, {
  id: 4,
  name: 'Alexander',
  surname: 'Brown',
  position: 'Project Manager',
  email: 'alexander.brown@gmail.com',
  company: 'Renault',
  age: 24,
  married: false,
  country: 'England'
}, {
  id: 5,
  name: 'Nicholas',
  surname: 'Miller',
  position: 'Senior Software Engineer',
  email: 'nicholas.miller@gmail.com',
  company: 'Adobe',
  age: 33,
  married: true,
  country: 'Canada'
}, {
  id: 6,
  name: 'Andrew',
  surname: 'Thompson',
  position: 'Agile Project Manager',
  email: 'andrew.thompson@gmail.com',
  company: 'Google',
  age: 28,
  married: true,
  country: 'USA'
}, {
  id: 7,
  name: 'Ryan',
  surname: 'Walker',
  position: 'Application Support Engineer',
  email: 'ryan.walker@gmail.com',
  company: 'Siemens',
  age: 39,
  married: true,
  country: 'Canada'
}, {
  id: 8,
  name: 'John',
  surname: 'Scott',
  position: 'Flex Developer',
  email: 'john.scott@gmail.com',
  company: 'Cargo',
  age: 45,
  knownledge: 'Flex',
  married: true,
  country: 'England'
}, {
  id: 9,
  name: 'James',
  surname: 'Phillips',
  position: 'Senior C++/C# Developer',
  email: 'james.phillips@gmail.com',
  company: 'Pro bugs',
  age: 30,
  married: false,
  country: 'Canada'
}, {
  id: 10,
  name: 'Brian',
  surname: 'Edwards',
  position: 'UNIX/C++ Developer',
  email: 'brian.edwards@gmail.com',
  company: 'IT Consultant',
  age: 23,
  married: true,
  country: 'England'
}, {
  id: 11,
  name: 'Jack',
  surname: 'Richardson',
  position: 'Ruby Developer',
  email: 'jack.richardson@gmail.com',
  company: 'Europe IT',
  age: 24,
  married: true,
  country: 'Canada'
}, {
  id: 12,
  name: 'Alex',
  surname: 'Howard',
  position: 'CSS3/HTML5 Developer',
  email: 'alex.howard@gmail.com',
  company: 'Cisco',
  age: 27,
  married: true,
  country: 'Canada'
}, {
  id: 13,
  name: 'Carlos',
  surname: 'Wood',
  position: 'Node.js Developer',
  email: 'carlos.wood@gmail.com',
  company: 'HP',
  age: 36,
  married: true,
  country: 'Canada'
}, {
  id: 14,
  name: 'Adrian',
  surname: 'Russell',
  position: 'Frontend Developer',
  email: 'adrian.russell@gmail.com',
  company: 'Micro Systems',
  age: 31,
  married: true,
  country: 'England'
}, {
  id: 15,
  name: 'Jeremy',
  surname: 'Hamilton',
  position: 'Scala Developer',
  email: 'jeremy.hamilton@gmail.com',
  company: 'Big Machines',
  age: 30,
  married: true,
  country: 'England'
}, {
  id: 16,
  name: 'Ivan',
  surname: 'Woods',
  position: 'Objective C Developer',
  email: 'ivan.woods@gmail.com',
  company: '',
  age: 24,
  married: false,
  country: 'USA'
}, {
  id: 17,
  name: 'Peter',
  surname: 'West',
  position: 'PHP/HTML Developer',
  email: 'peters.west@gmail.com',
  company: 'Adobe',
  age: 26,
  married: true,
  country: 'England'
}, {
  id: 18,
  name: 'Scott',
  surname: 'Simpson',
  position: 'Designer',
  email: 'scott.simpson@gmail.com',
  company: 'IBM',
  age: 29,
  married: true,
  country: 'Canada'
}, {
  id: 19,
  name: 'Lorenzo',
  surname: 'Tucker',
  position: 'Architect',
  email: 'lorenzo.tucker@gmail.com',
  company: 'Intel',
  age: 29,
  married: true,
  country: 'England'
}, {
  id: 20,
  name: 'Randy',
  surname: 'Grant',
  position: 'Engineer',
  email: 'randy.grant@gmail.com',
  company: 'Bridges',
  age: 30,
  married: false,
  country: 'Canada'
}, {
  id: 21,
  name: 'Arthur',
  surname: 'Gardner',
  position: 'Analytic',
  email: 'arthur.gardner@gmail.com',
  company: 'Google',
  age: 31,
  married: true,
  country: 'England'
}, {
  id: 22,
  name: 'Orlando',
  surname: 'Ruiz',
  position: 'Unit Testing Developer',
  email: 'orlando.ruiz@gmail.com',
  company: 'Apple',
  age: 32,
  married: true,
  country: 'Canada'
}];


document.addEventListener("DOMContentLoaded", function() {

  new FancyGrid({
    theme: 'sand',
    title: 'Staff',
    renderTo: 'container',
    width: 750,
    height: 400,
    data: data,
    paging: true,
    selModel: 'rows',
    trackOver: true,
    tbar: [{
      type: 'button',
      text: 'Add',
      action: 'add'
    }, {
      type: 'button',
      text: 'Delete',
      action: 'remove'
    }],
    defaults: {
      type: 'string',
      width: 100,
      editable: true,
      sortable: true,
	  ellipsis: true,
      resizable: true
    },
    clicksToEdit: 1,
    columns: [{
      index: 'id',
      locked: true,
      title: 'ID',
      type: 'number',
      editable: false,
      width: 40
    }, {
      index: 'company',
      locked: true,
      title: 'Company'
    }, {
      text: 'Base Info',
      columns: [{
        index: 'name',
        title: 'Name'
      }, {
        index: 'surname',
        title: 'Sur Name'
      }, {
        index: 'age',
        title: 'Age',
        type: 'number'
      }]
    }, {
      index: 'country',
      title: 'Country',
      type: 'combo',
      width: 99,
      data: ['USA', 'Canada', 'England']
    }, {
      index: 'married',
      title: 'Married',
      type: 'checkbox',
      width: 60
    }, {
      index: 'email',
      title: 'Email',
      vtype: 'email',
      width: 150
    }]
  });

});