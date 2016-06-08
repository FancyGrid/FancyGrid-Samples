var data = [
  {name: 'Ted', surname: 'Smith',email: 'ted.smith@gmail.com', company: 'Electrical Systems', age: 30},
  {name: 'Ed', surname: 'Johnson', email: 'ed.johnson@gmail.com', company: 'Energy and Oil', age: 35},
  {name: 'Sam', surname: 'Williams', email: 'sam.williams@gmail.com', company: 'Airbus', age: 38},
  {name: 'Alexander', surname: 'Brown',email: 'alexander.brown@gmail.com', company: 'Renault', age: 24},
  {name: 'Nicholas', surname: 'Miller', email: 'nicholas.miller@gmail.com', company: 'Adobe', age: 33},
  {name: 'Andrew', surname: 'Thompson', email: 'andrew.thompson@gmail.com', company: 'Google', age: 28},
  {name: 'Ryan', surname: 'Walker', email: 'ryan.walker@gmail.com', company: 'Siemens', age: 39},
  {name: 'John', surname: 'Scott', email: 'john.scott@gmail.com', company: 'Cargo', age: 45},
  {name: 'James', surname: 'Phillips', email: 'james.phillips@gmail.com', company: 'Pro bugs', age: 30},
  {name: 'Brian', surname: 'Edwards', email: 'brian.edwards@gmail.com', company: 'IT Consultant', age: 23},
  {name: 'Jack', surname: 'Richardson', email: 'jack.richardson@gmail.com', company: 'Europe IT', age: 24},
  {name: 'Alex', surname: 'Howard', email: 'alex.howard@gmail.com', company: 'Cisco', age: 27},
  {name: 'Carlos', surname: 'Wood', email: 'carlos.wood@gmail.com', company: 'HP', age: 36},
  {name: 'Adrian', surname: 'Russell', email: 'adrian.russell@gmail.com', company: 'Micro Systems', age: 31}
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