var data = [{
  name: 'Ted',
  surname: 'Smith',
  position: 'Java Developer',
  email: 'ted.smith@gmail.com',
  company: 'Electrical Systems',
  age: 30,
  knownledge: 'Java, Ruby'
}, {
  name: 'Ed',
  surname: 'Johnson',
  position: 'C/C++ Market Data Developer',
  email: 'ed.johnson@gmail.com',
  company: 'Energy and Oil',
  age: 35,
  knownledge: 'C++'
}, {
  name: 'Sam',
  surname: 'Williams',
  position: 'Technical Analyst',
  email: 'sam.williams@gmail.com',
  company: 'Airbus',
  age: 38,
  knownledge: ''
}, {
  name: 'Alexander',
  surname: 'Brown',
  position: 'Project Manager',
  email: 'alexander.brown@gmail.com',
  company: 'Renault',
  age: 24,
  knownledge: ''
}, {
  name: 'Nicholas',
  surname: 'Miller',
  position: 'Senior Software Engineer',
  email: 'nicholas.miller@gmail.com',
  company: 'Adobe',
  age: 33,
  knownledge: 'Unix, C/C++'
}, {
  name: 'Andrew',
  surname: 'Thompson',
  position: 'Agile Project Manager',
  email: 'andrew.thompson@gmail.com',
  company: 'Google',
  age: 28,
  knownledge: ''
}, {
  name: 'Ryan',
  surname: 'Walker',
  position: 'Application Support Engineer',
  email: 'ryan.walker@gmail.com',
  company: 'Siemens',
  age: 39,
  knownledge: 'ActionScript'
}, {
  name: 'John',
  surname: 'Scott',
  position: 'Flex Developer',
  email: 'john.scott@gmail.com',
  company: 'Cargo',
  age: 45,
  knownledge: 'Flex'
}, {
  name: 'James',
  surname: 'Phillips',
  position: 'Senior C++/C# Developer',
  email: 'james.phillips@gmail.com',
  company: 'Pro bugs',
  age: 30,
  knownledge: 'C/C++, Unix'
}, {
  name: 'Brian',
  surname: 'Edwards',
  position: 'UNIX/C++ Developer',
  email: 'brian.edwards@gmail.com',
  company: 'IT Consultant',
  age: 23,
  knownledge: 'C/C++ Unix'
}, {
  name: 'Jack',
  surname: 'Richardson',
  position: 'Ruby Developer',
  email: 'jack.richardson@gmail.com',
  company: 'Europe IT',
  age: 24,
  knownledge: 'Ruby'
}, {
  name: 'Alex',
  surname: 'Howard',
  position: 'CSS3/HTML5 Developer',
  email: 'alex.howard@gmail.com',
  company: 'Cisco',
  age: 27,
  knownledge: 'CSS3/HTML5'
}, {
  name: 'Carlos',
  surname: 'Wood',
  position: 'Node.js Developer',
  email: 'carlos.wood@gmail.com',
  company: 'HP',
  age: 36,
  knownledge: 'Node.js'
}, {
  name: 'Adrian',
  surname: 'Russell',
  position: 'Frontend Developer',
  email: 'adrian.russell@gmail.com',
  company: 'Micro Systems',
  age: 31,
  knownledge: 'HTML, JavaScript'
}, {
  name: 'Jeremy',
  surname: 'Hamilton',
  position: 'Scala Developer',
  email: 'jeremy.hamilton@gmail.com',
  company: 'Big Machines',
  age: 30,
  knownledge: 'Scala'
}, {
  name: 'Ivan',
  surname: 'Woods',
  position: 'Objective C Developer',
  email: 'ivan.woods@gmail.com',
  company: '',
  age: 24,
  knownledge: 'Objective C'
}, {
  name: 'Peter',
  surname: 'West',
  position: 'PHP/HTML Developer',
  email: 'peters.west@gmail.com',
  company: 'Adobe',
  age: 26,
  knownledge: 'PHP/HTML'
}, {
  name: 'Scott',
  surname: 'Simpson',
  position: 'Designer',
  email: 'scott.simpson@gmail.com',
  company: 'IBM',
  age: 29,
  knownledge: 'Adobe PhotoShop'
}, {
  name: 'Lorenzo',
  surname: 'Tucker',
  position: 'Architect',
  email: 'lorenzo.tucker@gmail.com',
  company: 'Intel',
  age: 29,
  knownledge: ''
}, {
  name: 'Randy',
  surname: 'Grant',
  position: 'Engineer',
  email: 'randy.grant@gmail.com',
  company: 'Bridges',
  age: 30,
  knownledge: ''
}, {
  name: 'Arthur',
  surname: 'Gardner',
  position: 'Analytic',
  email: 'arthur.gardner@gmail.com',
  company: 'Google',
  age: 31,
  knownledge: ''
}, {
  name: 'Orlando',
  surname: 'Ruiz',
  position: 'Unit Testing Developer',
  email: 'orlando.ruiz@gmail.com',
  company: 'Apple',
  age: 32,
  knownledge: ''
}];

document.addEventListener("DOMContentLoaded", function(event) {

   // Components must be pre-defined before instance
  var FancyGridComponent = Vue.component('fancygrid-component', {
    // create props to get data from the parent
    props: {
      fgId: {
        type: String
      },
      fgJson: {
        type: Object,
        default: function() {
          return {
            width: 400,
            height: 400,
            columns: [],
            data: []
          }
        }
      }
    },
    data: function() {
      return {
        id: this.fgId || 'fancy-auto-gen-' + Math.ceil(Math.random() * 1000000),
        json: this.fgJson 
      }
    },
    mounted: function() {
      this.json.renderTo = this.id;
      
      new FancyGrid(this.json);
    },
    destroyed: function() {
      var grid = FancyGrid.get(this.id);
      
      grid.destroy();
    },
    template: '<div :id="id"></div>' // bind id to fgId to render the grid
  });

  // actual data used in app
  var app = new Vue({
    el: '#app',
    data: {
      gridConfig: {
        title: 'Vue.js with FancyGrid',
        width: 700,
        height: 400,
        data: data,
        clicksToEdit: 1,
        resizable: true,
        defaults: {
          type: 'string',
          width: 100,
          sortable: true,
          editable: true,
          resizable: true
        },
        selModel: 'rows',
        trackOver: true,
        paging: {
          refreshButton: true
        },
        columns: [{
          index: 'company',
          locked: true,
          title: 'Company',
          filter: {
            header: true,
            tip: [
              'Contains: Energy<br>',
              'Equal: =Energy and Oil<br>',
              'Not Equal: !=Energy and Oil<br>'
            ].join("")
          }
        },{
          index: 'name',
          title: 'Name',
          filter: {
            header: true,
            tip: [
              'Contains: Te<br>',
              'Equal: =Ted<br>',
              'Not Equal: !=Ted<br>'
            ].join("")
          }
        },{
          index: 'surname',
          title: 'Sur Name',
          filter: {
            header: true,
            tip: [
              'Contains: Smi<br>',
              'Equal: =Smith<br>',
              'Not Equal: !=Smith<br>'
            ].join("")
          }
        },{
          index: 'age',
          title: 'Age',
          type: 'number',
          width: 80,
          filter: {
            header: true,
            tip: [
              'Contains: 30<br>',
              'Less than: <30<br>',
              'More than: >30<br>',
              'Equal: 30<br>',
              'Not Equal: !=30<br>',
              'Composite: <30,>5'
            ].join("")
          }
        },{
          index: 'email',
          title: 'Email',
          width: 160
        }]
      }
    },
    components: {
      // register component
      'fancygrid': FancyGridComponent
    }
  });

}