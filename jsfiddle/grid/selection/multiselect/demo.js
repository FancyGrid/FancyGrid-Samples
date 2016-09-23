var data = [{
  id: 1,
  name: 'Ted',
  surname: 'Smith',
  position: 'Java Developer',
  email: 'ted.smith@gmail.com',
  company: 'Electrical Systems',
  age: 30,
  education: 'High School Of Cambridge',
  knownledge: 'Java, Ruby'
}, {
  id: 2,
  name: 'Ed',
  surname: 'Johnson',
  position: 'C/C++ Market Data Developer',
  email: 'ed.johnson@gmail.com',
  company: 'Energy and Oil',
  age: 35,
  education: 'High School Of Cambridge',
  knownledge: 'C++'
}, {
  id: 3,
  name: 'Sam',
  surname: 'Williams',
  position: 'Technical Analyst',
  email: 'sam.williams@gmail.com',
  company: 'Airbus',
  age: 38,
  education: 'High School Of Cambridge',
  knownledge: ''
}, {
  id: 4,
  name: 'Alexander',
  surname: 'Brown',
  position: 'Project Manager',
  email: 'alexander.brown@gmail.com',
  company: 'Renault',
  age: 24,
  education: 'High School Of Cambridge',
  knownledge: ''
}, {
  id: 5,
  name: 'Nicholas',
  surname: 'Miller',
  position: 'Senior Software Engineer',
  email: 'nicholas.miller@gmail.com',
  company: 'Adobe',
  age: 33,
  education: 'High School Of Cambridge',
  knownledge: 'Unix, C/C++'
}, {
  id: 6,
  name: 'Andrew',
  surname: 'Thompson',
  position: 'Agile Project Manager',
  email: 'andrew.thompson@gmail.com',
  company: 'Google',
  age: 28,
  education: 'High School Of Cambridge',
  knownledge: ''
}, {
  id: 7,
  name: 'Ryan',
  surname: 'Walker',
  position: 'Application Support Engineer',
  email: 'ryan.walker@gmail.com',
  company: 'Siemens',
  age: 39,
  education: 'High School Of Cambridge',
  knownledge: 'ActionScript'
}, {
  id: 8,
  name: 'John',
  surname: 'Scott',
  position: 'Flex Developer',
  email: 'john.scott@gmail.com',
  company: 'Cargo',
  age: 45,
  education: 'High School Of Cambridge',
  knownledge: 'Flex'
}, {
  id: 9,
  name: 'James',
  surname: 'Phillips',
  position: 'Senior C++/C# Developer',
  email: 'james.phillips@gmail.com',
  company: 'Pro bugs',
  age: 30,
  education: 'High School Of Cambridge',
  knownledge: 'C/C++, Unix'
}, {
  id: 10,
  name: 'Brian',
  surname: 'Edwards',
  position: 'UNIX/C++ Developer',
  email: 'brian.edwards@gmail.com',
  company: 'IT Consultant',
  age: 23,
  education: 'High School Of Cambridge',
  knownledge: 'C/C++ Unix'
}, {
  id: 11,
  name: 'Jack',
  surname: 'Richardson',
  position: 'Ruby Developer',
  email: 'jack.richardson@gmail.com',
  company: 'Europe IT',
  age: 24,
  education: 'High School Of Cambridge',
  knownledge: 'Ruby'
}, {
  id: 12,
  name: 'Alex',
  surname: 'Howard',
  position: 'CSS3/HTML5 Developer',
  email: 'alex.howard@gmail.com',
  company: 'Cisco',
  age: 27,
  education: 'High School Of Cambridge',
  knownledge: 'CSS3/HTML5'
}, {
  id: 13,
  name: 'Carlos',
  surname: 'Wood',
  position: 'Node.js Developer',
  email: 'carlos.wood@gmail.com',
  company: 'HP',
  age: 36,
  education: 'High School Of Cambridge',
  knownledge: 'Node.js'
}, {
  id: 14,
  name: 'Adrian',
  surname: 'Russell',
  position: 'Frontend Developer',
  email: 'adrian.russell@gmail.com',
  company: 'Micro Systems',
  age: 31,
  education: 'High School Of Cambridge',
  knownledge: 'HTML, JavaScript'
}, {
  id: 15,
  name: 'Jeremy',
  surname: 'Hamilton',
  position: 'Scala Developer',
  email: 'jeremy.hamilton@gmail.com',
  company: 'Big Machines',
  age: 30,
  education: 'High School Of Cambridge',
  knownledge: 'Scala'
}, {
  id: 16,
  name: 'Ivan',
  surname: 'Woods',
  position: 'Objective C Developer',
  email: 'ivan.woods@gmail.com',
  company: '',
  age: 24,
  education: 'High School Of Cambridge',
  knownledge: 'Objective C'
}, {
  id: 17,
  name: 'Peter',
  surname: 'West',
  position: 'PHP/HTML Developer',
  email: 'peters.west@gmail.com',
  company: 'Adobe',
  age: 26,
  education: 'High School Of Cambridge',
  knownledge: 'PHP/HTML'
}, {
  id: 18,
  name: 'Scott',
  surname: 'Simpson',
  position: 'Designer',
  email: 'scott.simpson@gmail.com',
  company: 'IBM',
  age: 29,
  education: 'High School Of Cambridge',
  knownledge: 'Adobe PhotoShop'
}, {
  id: 19,
  name: 'Lorenzo',
  surname: 'Tucker',
  position: 'Architect',
  email: 'lorenzo.tucker@gmail.com',
  company: 'Intel',
  age: 29,
  education: 'High School Of Cambridge',
  knownledge: ''
}, {
  id: 20,
  name: 'Randy',
  surname: 'Grant',
  position: 'Engineer',
  email: 'randy.grant@gmail.com',
  company: 'Bridges',
  age: 30,
  education: 'High School Of Cambridge',
  knownledge: ''
}, {
  id: 21,
  name: 'Arthur',
  surname: 'Gardner',
  position: 'Analytic',
  email: 'arthur.gardner@gmail.com',
  company: 'Google',
  age: 31,
  education: 'High School Of Cambridge',
  knownledge: ''
}, {
  id: 22,
  name: 'Orlando',
  surname: 'Ruiz',
  position: 'Unit Testing Developer',
  email: 'orlando.ruiz@gmail.com',
  company: 'Apple',
  age: 32,
  education: 'High School Of Cambridge',
  knownledge: ''
}];

$(function() {

var grid = new FancyGrid({
  renderTo: 'container',
  title: 'MultiSelect(CTRL Key)',
  width: 600,
  height: 400,
  data: data,
  selModel: 'rows',
  multiSelect: true,
  defaults: {
    type: 'string',
    width: 100,
    sortable: true,
    resizable: true
  },
  columns: [{
    index: 'id',
    title: 'Id',
    locked: true,
    width: 50,
    type: 'number'
  }, {
    index: 'company',
    title: 'Company'
  }, {
    index: 'name',
    title: 'Name'
  }, {
    index: 'surname',
    title: 'Sur Name'
  }, {
    index: 'age',
    title: 'Age',
    type: 'number'
  }, {
    index: 'knownledge',
    title: 'Knownledge',
    width: 100
  }, {
    index: 'position',
    title: 'Position',
    rightLocked: true,
    width: 100
  }]
});

});