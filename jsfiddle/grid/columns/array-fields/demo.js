document.addEventListener("DOMContentLoaded", function() {

var data = [
  ['Ted', 'Smith', 'Java Developer', 'ted.smith@gmail.com', 'Electrical Systems', 30, 'High School Of Cambridge', 'Java, Ruby'],
  ['Ed', 'Johnson', 'C/C++ Market Data Developer', 'ed.johnson@gmail.com', 'Energy and Oil', 35, 'High School Of Cambridge', 'C++'],
  ['Sam', 'Williams', 'Technical Analyst', 'sam.williams@gmail.com', 'Airbus', 38, 'High School Of Cambridge', ''],
  ['Alexander', 'Brown', 'Project Manager', 'alexander.brown@gmail.com', 'Renault', 24, 'High School Of Cambridge', ''],
  ['Nicholas', 'Miller', 'Senior Software Engineer', 'nicholas.miller@gmail.com', 'Adobe', 33, 'High School Of Cambridge', 'Unix, C/C++'],
  ['Andrew', 'Thompson', 'Agile Project Manager', 'andrew.thompson@gmail.com', 'Google', 28, 'High School Of Cambridge', ''],
  ['Ryan', 'Walker', 'Application Support Engineer', 'ryan.walker@gmail.com', 'Siemens', 39, 'High School Of Cambridge', 'ActionScript'],
  ['John', 'Scott', 'Flex Developer', 'john.scott@gmail.com', 'Cargo', 45, 'High School Of Cambridge', 'Flex'],
  ['James', 'Phillips', 'Senior C++/C# Developer', 'james.phillips@gmail.com', 'Pro bugs', 30, 'High School Of Cambridge', 'C/C++, Unix'],
  ['Brian', 'Edwards', 'UNIX/C++ Developer', 'brian.edwards@gmail.com', 'IT Consultant', 23, 'High School Of Cambridge', 'C/C++ Unix'],
  ['Jack', 'Richardson', 'Ruby Developer', 'jack.richardson@gmail.com', 'Europe IT', 24, 'High School Of Cambridge', 'Ruby'],
  ['Alex', 'Howard', 'CSS3/HTML5 Developer', 'alex.howard@gmail.com', 'Cisco', 27, 'High School Of Cambridge', 'CSS3/HTML5'],
  ['Carlos', 'Wood', 'Node.js Developer', 'carlos.wood@gmail.com', 'HP', 36, 'High School Of Cambridge', 'Node.js'],
  ['Adrian', 'Russell', 'Frontend Developer', 'adrian.russell@gmail.com', 'Micro Systems', 31, 'High School Of Cambridge', 'HTML, JavaScript'],
  ['Jeremy', 'Hamilton', 'Scala Developer', 'jeremy.hamilton@gmail.com', 'Big Machines', 30, 'High School Of Cambridge', 'Scala'],
  ['Ivan', 'Woods', 'Objective C Developer', 'ivan.woods@gmail.com', '', 24, 'High School Of Cambridge', 'Objective C'],
  ['Peter', 'West', 'PHP/HTML Developer', 'peters.west@gmail.com', 'Adobe', 26, 'High School Of Cambridge', 'PHP/HTML'],
  ['Scott', 'Simpson', 'Designer', 'scott.simpson@gmail.com', 'IBM', 29, 'High School Of Cambridge', 'Adobe PhotoShop'],
  ['Lorenzo', 'Tucker', 'Architect', 'lorenzo.tucker@gmail.com', 'Intel', 29, 'High School Of Cambridge', ''],
  ['Randy', 'Grant', 'Engineer', 'randy.grant@gmail.com', 'Bridges', 30, 'High School Of Cambridge', ''],
  ['Arthur', 'Gardner', 'Analytic', 'arthur.gardner@gmail.com', 'Google', 31, 'High School Of Cambridge', ''],
  ['Orlando','Ruiz', 'Unit Testing Developer', 'orlando.ruiz@gmail.com', 'Apple', 32, 'High School Of Cambridge', '']
];


new FancyGrid({
  title: 'Array Data with fields',
  renderTo: 'container',
  renderTo: 'container',
  width: 450,
  height: 500,
  data: {
    fields: ['name', 'surname', 'position', 'email', 'company', 'age', 'education', 'knowledge'],
    items: data
  },
  defaults: {
    type: 'string',
    width: 100
  },
  columns: [{
    index: 'company',
	width: 105,
    title: 'Company'
  },{
    index: 'name',
    title: 'Name'
  },{
    index: 'surname',
    title: 'Sur Name'
  },{
    index: 'age',
	width: 60,
    title: 'Age',
    type: 'number'
  }]
});

  
});
