var data = [
  ['Ted', 'Smith', 'Java Developer', 'ted.smith@gmail.com', 'Electrical Systems', 30, 'Java, Ruby'],
  ['Ed', 'Johnson', 'C/C++ Market Data Developer', 'ed.johnson@gmail.com', 'Energy and Oil', 35, 'C++'],
  ['Sam', 'Williams', 'Technical Analyst', 'sam.williams@gmail.com', 'Airbus', 38, ''],
  ['Alexander', 'Brown', 'Project Manager', 'alexander.brown@gmail.com', 'Renault', 24, ''],
  ['Nicholas', 'Miller', 'Senior Software Engineer', 'nicholas.miller@gmail.com', 'Adobe', 33, 'Unix, C/C++'],
  ['Andrew', 'Thompson', 'Agile Project Manager', 'andrew.thompson@gmail.com', 'Google', 28, ''],
  ['Ryan', 'Walker', 'Application Support Engineer', 'ryan.walker@gmail.com', 'Siemens', 39, 'ActionScript'],
  ['John', 'Scott', 'Flex Developer', 'john.scott@gmail.com', 'Cargo', 45, 'Flex'],
  ['James', 'Phillips', 'Senior C++/C# Developer', 'james.phillips@gmail.com', 'Pro bugs', 30, 'C/C++, Unix'],
  ['Brian', 'Edwards', 'UNIX/C++ Developer', 'brian.edwards@gmail.com', 'IT Consultant', 23, 'C/C++ Unix'],
  ['Jack', 'Richardson', 'Ruby Developer', 'jack.richardson@gmail.com', 'Europe IT', 24, 'Ruby'],
  ['Alex', 'Howard', 'CSS3/HTML5 Developer', 'alex.howard@gmail.com', 'Cisco', 27, 'CSS3/HTML5'],
  ['Carlos', 'Wood', 'Node.js Developer', 'carlos.wood@gmail.com', 'HP', 36, 'Node.js'],
  ['Adrian', 'Russell', 'Frontend Developer', 'adrian.russell@gmail.com', 'Micro Systems', 31, 'HTML, JavaScript'],
  ['Jeremy', 'Hamilton', 'Scala Developer', 'jeremy.hamilton@gmail.com', 'Big Machines', 30, 'Scala'],
  ['Ivan', 'Woods', 'Objective C Developer', 'ivan.woods@gmail.com', '', 24, 'Objective C'],
  ['Peter', 'West', 'PHP/HTML Developer', 'peters.west@gmail.com', 'Adobe', 26, 'PHP/HTML'],
  ['Scott', 'Simpson', 'Designer', 'scott.simpson@gmail.com', 'IBM', 29, 'Adobe PhotoShop'],
  ['Lorenzo', 'Tucker', 'Architect', 'lorenzo.tucker@gmail.com', 'Intel', 29, ''],
  ['Randy', 'Grant', 'Engineer', 'randy.grant@gmail.com', 'Bridges', 30, ''],
  ['Arthur', 'Gardner', 'Analytic', 'arthur.gardner@gmail.com', 'Google', 31, ''],
  ['Orlando', 'Ruiz', 'Unit Testing Developer', 'orlando.ruiz@gmail.com', 'Apple', 32, '']
];

$(function() {

  new Fancy.Grid({
    title: 'Title',
    subTitle: 'Sub Title',
    renderTo: 'container',
    width: 450,
    height: 400,
    selModel: 'cell',
    data: {
      fields: ['name', 'surname', 'position', 'email', 'company', 'age', 'knowledge'],
      items: data
    },
    defaults: {
      type: 'string',
      width: 100
    },
    columns: [{
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
      width: 50,
      type: 'number'
    }]
  });

});
