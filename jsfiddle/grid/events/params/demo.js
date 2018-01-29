document.addEventListener("DOMContentLoaded", function() {

  var data = [{
    id: 1,
    name: 'Ted Smith',
    position: 'Java Developer',
    birthday: '06/22/1953',
    country: 'USA',
    hour: 52
  }, {
    id: 2,
    name: 'Ed Johnson',
    position: 'C/C++ Developer',
    birthday: '09/12/1971',
    country: 'England',
    hour: 16
  }, {
    id: 3,
    name: 'Sam Williams',
    position: 'Technical Analyst',
    birthday: '09/02/1973',
    country: 'USA',
    hour: 40
  }, {
    id: 4,
    name: 'Alexander Brown',
    position: 'Project Manager',
    country: 'USA',
    birthday: '09/25/1991',
    hour: 33
  }, {
    id: 5,
    name: 'Nicholas Miller',
    position: 'Senior Software Engineer',
    country: 'Canada',
    birthday: '08/24/1959',
    hour: 50
  }, {
    id: 6,
    name: 'Andrew Thompson',
    position: 'Agile Project Manager',
    country: 'Germany',
    birthday: '08/18/1978',
    hour: 27
  }, {
    id: 7,
    name: 'Ryan Walker',
    position: 'Application Support Engineer',
    country: 'England',
    birthday: '04/02/1981',
    hour: 40
  }, {
    id: 8,
    name: 'John Scott',
    position: 'Flex Developer',
    country: 'USA',
    birthday: '02/14/1960',
    hour: 71
  }, {
    id: 9,
    name: 'James Phillips',
    position: 'Senior C++/C# Developer',
    country: 'USA',
    birthday: '10/18/1991',
    hour: 58
  }, {
    id: 10,
    name: 'Brian Edwards',
    position: 'UNIX/C++ Developer',
    country: 'USA',
    birthday: '04/16/1963',
    hour: 64
  }, {
    id: 11,
    name: 'Jack Richardson',
    position: 'Ruby Developer',
    country: 'Germany',
    birthday: '11/20/1982',
    hour: 58
  }, {
    id: 12,
    name: 'Alex Howard',
    position: 'CSS3/HTML5 Developer',
    country: 'USA',
    birthday: '07/22/1987',
    hour: 66
  }, {
    id: 13,
    name: 'Carlos Wood',
    position: 'Node.js Developer',
    country: 'USA',
    birthday: '08/08/1988',
    hour: 41
  }, {
    id: 14,
    name: 'Adrian Russell',
    position: 'Frontend Developer',
    country: 'Canada',
    birthday: '06/19/1969',
    hour: 25
  }, {
    id: 15,
    name: 'Jeremy Hamilton',
    position: 'Scala Developer',
    country: 'USA',
    birthday: '04/17/1950',
    hour: 69
  }, {
    id: 16,
    name: 'Ivan Woods',
    position: 'Objective C Developer',
    country: 'USA',
    birthday: '03/25/1964',
    hour: 64
  }, {
    id: 17,
    name: 'Peter West',
    position: 'PHP/HTML Developer',
    country: 'England',
    birthday: '09/06/1977',
    hour: 30
  }, {
    id: 18,
    name: 'Lorenzo Tucker',
    position: 'Architect',
    country: 'USA',
    birthday: '10/25/1975',
    hour: 41
  }, {
    id: 19,
    name: 'Randy Grant',
    position: 'Engineer',
    country: 'USA',
    birthday: '07/16/1969',
    hour: 50
  }, {
    id: 20,
    name: 'Arthur Gardner',
    position: 'Analytic',
    country: 'USA',
    birthday: '09/26/1994',
    hour: 16
  }, {
    id: 21,
    name: 'Orlando Ruiz',
    position: 'Unit Testing Developer',
    country: 'Germany',
    birthday: '11/02/1985',
    hour: 29
  }];


  var grid = new FancyGrid({
    subTitle: 'Events',
    renderTo: 'events',
    width: 630,
    height: 300,
    data: {
      fields: ['name', 'options']
    },
    trackOver: true,
    defaults: {
      type: 'string',
      sortable: true,
      resizable: true,
	  ellipsis: true,
      editable: true
    },
    clicksToEdit: 1,
    columns: [{
      index: 'name',
      width: 100,
      title: 'Name'
    }, {
      index: 'options',
      width: 495,
      title: 'Options'
    }]
  });


  new FancyGrid({
    title: 'Employee',
    renderTo: 'container',
    width: 630,
    height: 300,
    data: data,
    trackOver: true,
    defaults: {
      type: 'string',
      width: 100,
      sortable: true,
      resizable: true,
      editable: true
    },
    clicksToEdit: 1,
    columns: [{
      index: 'name',
      title: 'Name'
    }, {
      index: 'birthday',
      title: 'Birthday',
      type: 'date',
      width: 100
    }, {
      index: 'country',
      title: 'Country',
      type: 'combo',
      data: ['USA', 'England', 'Canada', 'Germany']
    }, {
      index: 'position',
      title: 'Position',
      width: 150
    }, {
      index: '"$" + hour',
      type: 'number',
      format: 'number',
      editable: false,
      title: 'Hour rate',
      width: 80
    }, {
      type: 'action',
      width: 65,
      items: [{
        text: 'Delete',
        cls: 'action-column-remove',
        action: 'remove'
      }]
    }],
    events: [{
      cellclick: function(g, o) {
        var options = '{columnIndex:' + o.columnIndex + ', rowIndex:' + o.rowIndex + ', value: ' + o.value + ', ...}'
        grid.insert({
          name: 'cellclick',
          options: options
        });
      }
    }, {
      celldblclick: function(g, o) {
        var options = '{columnIndex:' + o.columnIndex + ', rowIndex:' + o.rowIndex + ', value: ' + o.value + ', ...}'
        grid.insert({
          name: 'celldblclick',
          options: options
        });
      }
    }, {
      columnclick: function(g, o) {
        var options = '{columnIndex:' + o.columnIndex + ', ...}'
        grid.insert({
          name: 'columnclick',
          options: options
        });
      }
    }, {
      init: function() {
        grid.insert({
          name: 'init'
        });
      }
    }, {
      headercellclick: function(g, o) {
        var options = '{index:' + o.index + ', ...}'
        grid.insert({
          name: 'headercellclick',
          options: options
        });
      }
    }, {
      load: function() {
        grid.insert({
          name: 'load'
        });
      }
    }, {
      remove: function(g, o) {
        grid.insert({
          name: 'remove',
          options: o
        });
      }
    }, {
      set: function(g, o) {
        var options = '{id:' + o.id + ', key: ' + o.key + ', oldValue: ' + o.oldValue + ', value: ' + o.value + ', rowIndex: ' + o.rowIndex + '}';
        grid.insert({
          name: 'set',
          options: options
        });
      }
    }, {
      sort: function(g, o) {
        var options = '{key:' + o.key + ', action: ' + o.action + '}'
        grid.insert({
          name: 'sort',
          options: options
        });
      }
    }]
  });

});
