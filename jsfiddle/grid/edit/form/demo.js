var data = [
  {id: 1, name: 'Ted', surname: 'Smith', email: 'ted.smith@fancygrid.com', position: 'Java Developer', birthday: '6/22/1953', country: 'USA', hour: 52, active: true, about: 'Likes to play on guitar.'},
  {id: 2, name: 'Ed', surname: 'Johnson', email: 'ed.johnson@fancygrid.com', position: 'C/C++ Market Data Developer', birthday: '9/12/1971', country: 'England', hour: 26, active: true, about: 'Proffesional persone.'},
  {id: 3, name: 'Sam', surname: 'Williams', email: 'sam.williams@fancygrid.com', position: 'Technical Analyst', birthday: '9/2/1973', country: 'USA', hour: 40, active: true, about: 'Dreams about travel around the world.'},
  {id: 4, name: 'Alexander', surname: 'Brown', email: 'alexander.brown@fancygrid.com', position: 'Project Manager', country: 'USA', birthday: '9/25/1991', hour: 33, active: true, about: 'Has big family.'},
  {id: 5, name: 'Nicholas', surname: 'Miller', email: 'nicholas.miller@fancygrid.com', position: 'Senior Software Engineer', country: 'Canada', birthday: '8/24/1959', hour: 50, active: false, about: 'Has country house where team spent holidays.'},
  {id: 6, name: 'Andrew', surname: 'Thompson', email: 'andrew.thompson@fancygrid.com', position: 'Agile Project Manager', country: 'Germany', birthday: '8/18/1978', hour: 27, active: true, about: 'Encourages team.'},
  {id: 7, name: 'Ryan', surname: 'Walker', email: 'ryan.walker@fancygrid.com', position: 'Application Support Engineer', country: 'England', birthday: '4/2/1981', hour: 40, active: true, about: 'Intelligent and polite, works with VIP clients'},
  {id: 8, name: 'John', surname: 'Scott', email: 'john.scott@fancygrid.com', position: 'Flex Developer', country: 'USA', birthday: '2/14/1960', hour: 71, active: true, about: 'Cool at support.'},
  {id: 9, name: 'James', surname: 'Phillips', email: 'james.phillips@fancygrid.com', position: 'Senior C++/C# Developer', country: 'USA', birthday: '10/18/1991', hour: 58, active: true, about: 'Works 24 hours per day.'},
  {id: 10, name: 'Brian', surname: 'Edwards', email: 'brian.edwards@fancygrid.com', position: 'UNIX/C++ Developer', country: 'USA', birthday: '4/16/1963', hour: 64, active: false, about: 'Dreams to built self car.'},
  {id: 11, name: 'Jack', surname: 'Richardson', email: 'jack.richardson@fancygrid.com', position: 'Ruby Developer', country: 'Germany', birthday: '11/20/1982', hour: 58, active: true, about: 'Helps in office.'},
  {id: 12, name: 'Alex', surname: 'Howard', email: 'alex.howard@fancygrid.com', position: 'CSS3/HTML5 Developer', country: 'USA', birthday: '7/22/1987', hour: 66, active: true, about: 'Manages meetings.'},
  {id: 13, name: 'Carlos', surname: 'Wood', email: 'carlos.wood@fancygrid.com', position: 'Node.js Developer', country: 'USA', birthday: '8/8/1988', hour: 41, active: true, about: 'Like to present product on performances.'},
  {id: 14, name: 'Adrian', surname: 'Russell', email: 'adrian.russell@fancygrid.com', position: 'Frontend Developer', country: 'Canada', birthday: '6/19/1969', hour: 25, active: true, about: 'Dreams to buy plain.'},
  {id: 15, name: 'Jeremy', surname: 'Hamilton', email: 'jeremy.hamilton@fancygrid.com', position: 'Scala Developer', country: 'USA', birthday: '4/17/1950', hour: 69, active: true, about: 'Dreams to go in cruis with all team.'},
  {id: 16, name: 'Ivan', surname: 'Woods', email: 'ivan.woods@fancygrid.com', position: 'Objective C Developer', country: 'USA', birthday: '3/25/1964', hour: 64, active: false, about: 'Likes to play hockey.'},
  {id: 17, name: 'Peter', surname: 'West', email: 'peter.west@fancygrid.com', position: 'PHP/HTML Developer', country: 'England', birthday: '9/6/1977', hour: 30, active: true, about: 'Just married.'}
];

document.addEventListener("DOMContentLoaded", function() {


var grid = new FancyGrid({
  title: 'Employee',
  renderTo: 'grid',
  width: 500,
  height: 500,
  data: data,
  selModel: 'row',
  trackOver: true,  
  defaults: {
    type: 'string',
    width: 100,
    sortable: true,
    resizable: true,    
    editable: true,
    vtype: 'notempty',
	ellipsis: true
  },
  events: [{
    cellclick: function(grid, o){
      form.set(o.data);
    }
  }],
  columns: [{
    index: 'id',
    width: 40,
    type: 'number',
    filter: false
  },{
    title: 'Name',
    render: function(o){
      o.value = o.data.name + ' ' + o.data.surname;
    
      return o;
    }
  },{
    index: 'birthday',
    title: 'Birthday',
    type: 'date',
    width: 100
  },{
    index: 'country',
    title: 'Country',
    type: 'combo',
    data: ['USA','England', 'Canada', 'Germany']
  },{
    index: 'position',
    title: 'Position',    
    width: 100
  },{
    index: 'hour',
    type: 'currency',
    title: 'Hour rate',
    width: 70
  },{
    index: 'active',
    type: 'checkbox',
    title: 'Active?',  
    width: 60
  },{
    title: 'email',
    index: 'email',
    width: 150
  }]
});

var comboData = [
  {country: 'USA'},
  {country: 'Canada'},
  {country: 'England'},
  {country: 'Germany'}
];


var form = new FancyForm({
  renderTo: 'form',
  title: 'User Data',
  width: 290,
  height: 500,
  defaults: {
    type: 'string'
  },
  items: [{
    name: 'id',
    type: 'hidden'
  },{
    label: 'Name',
    emptyText: 'Name',
    name: 'name'
  },{
    label: 'SurName',
    emptyText: 'SurName',
    name: 'surname'
  },{
    label: 'E-mail',
    emptyText: 'E-mail',
    name: 'email',
    valid: {
      type: 'email',
      blank: false,
      blankText: 'Required',
      text: 'Incorect email'
    }
  },{
    type: 'date',
    label: 'Birthday',
    name: 'birthday'
  },{
    type: 'checkbox',
    label: 'Active',
    name: 'active',
    value: true
  },{
    type: 'number',
    label: 'Hour rate',
    name: 'hour',
    min: 0
  },{
    type: 'string',
    label: 'Position',
    name: 'position'
  },{
    type: 'combo',
    label: 'Country',
    name: 'country',
    data: comboData,
    displayKey: 'country',
    valueKey: 'country'
  },{
    type: 'textarea',
    label: 'About',
    name: 'about'
  }],
  buttons: ['side', {
    text: 'Clear',
    handler: function(){
      form.clear();
    }
  },{
    text: 'Save',
    handler: function(){
      var values = form.get();
      
      if(!values.id){
        return;
      }
      
      grid.getById(values.id).set(values);
      grid.update();
    }
  }]
});
  
});