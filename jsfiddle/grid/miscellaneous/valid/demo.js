var data = [
  {name: 'Ted', surname: 'Smith', position: 'Java Developer', email: 'ted.smith@gmail.com', company: 'Electrical Systems', age: 30, knownledge: 'Java, Ruby'},
  {name: 'Ed', surname: 'Johnson', position: 'C/C++ Market Data Developer', email: 'ed.johnson@gmail.com', company: 'Energy and Oil', age: 35, knownledge: 'C++'},
  {name: 'Sam', surname: 'Williams', position: 'Technical Analyst', email: 'sam.williams@gmail.com', company: 'Airbus', age: 38, knownledge: ''},
  {name: 'Alexander', surname: 'Brown', position: 'Project Manager', email: 'alexander.brown@gmail.com', company: 'Renault', age: 24, knownledge: ''},
  {name: 'Nicholas', surname: 'Miller', position: 'Senior Software Engineer', email: 'nicholas.miller@gmail.com', company: 'Adobe', age: 33, knownledge: 'Unix, C/C++'},
  {name: 'Andrew', surname: 'Thompson', position: 'Agile Project Manager', email: 'andrew.thompson@gmail.com', company: 'Google', age: 28, knownledge: ''},
  {name: 'Ryan', surname: 'Walker', position: 'Application Support Engineer', email: 'ryan.walker@gmail.com', company: 'Siemens', age: 39, knownledge: 'ActionScript'},
  {name: 'John', surname: 'Scott', position: 'Flex Developer', email: 'john.scott@gmail.com', company: 'Cargo', age: 45, knownledge: 'Flex'},
  {name: 'James', surname: 'Phillips', position: 'Senior C++/C# Developer', email: 'james.phillips@gmail.com', company: 'Pro bugs', age: 30, knownledge: 'C/C++, Unix'},
  {name: 'Brian', surname: 'Edwards', position: 'UNIX/C++ Developer', email: 'brian.edwards@gmail.com', company: 'IT Consultant', age: 23, knownledge: 'C/C++ Unix'},
  {name: 'Jack', surname: 'Richardson', position: 'Ruby Developer', email: 'jack.richardson@gmail.com', company: 'Europe IT', age: 24, knownledge: 'Ruby'},
  {name: 'Alex', surname: 'Howard', position: 'CSS3/HTML5 Developer', email: 'alex.howard@gmail.com', company: 'Cisco', age: 27, knownledge: 'CSS3/HTML5'},
  {name: 'Carlos', surname: 'Wood', position: 'Node.js Developer', email: 'carlos.wood@gmail.com', company: 'HP', age: 36, knownledge: 'Node.js'},
  {name: 'Adrian', surname: 'Russell', position: 'Frontend Developer', email: 'adrian.russell@gmail.com', company: 'Micro Systems', age: 31, knownledge: 'HTML, JavaScript'}
];

$(function() {
 
new FancyGrid({
  title: 'Validation',
  renderTo: 'container',
  width: 600,
  height: 400,
  data: data,
  defaults: {
    type: 'string',
    sortable: true,
    editable: true,
    resizable: true,
    vtype: 'notempty'
  },
  clicksToEdit: 1,
  columns: [{
    index: 'company',
    flex: 1,
    title: 'Company'
  }, {
    index: 'name',
    title: 'Name'
  }, {
    index: 'surname',
    title: 'Sur Name'
  }, {
    index: 'email',
    title: 'Email',
    width: 150,
    vtype: 'email'
  }, {
    index: 'age',
    title: 'Age',
    width: 50,
    type: 'number',
    vtype: {
      before: ['notempty', 'notnan'],
      type: 'range',
      min: 20,
      max: 70
    }
  }]
});

 
});