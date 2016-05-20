$(function() {

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

  FancyGrid.defineController('mycontrol', {
    controls: [{
      event: 'cellclick',
      selector: '.sign-minus',
      handler: 'onClickMinus'
    }, {
      event: 'cellclick',
      selector: '.sign-plus',
      handler: 'onClickPlus'
    }, {
      event: 'cellmousedown',
      selector: '.sign-minus',
      handler: 'onMouseDownMinus'
    }, {
      event: 'cellmousedown',
      selector: '.sign-plus',
      handler: 'onMouseDownPlus'
    }],
    onClickMinus: function(grid, o) {
      this.minusRate(o.item);
      grid.update();
    },
    onClickPlus: function(grid, o) {
      this.plusRate(o.item);
      grid.update();
    },
    onMouseDownMinus: function(grid, o) {
      var me = this;

      me.minusRate(o.item);
      grid.update();

      me.minusDown = true;
      me.timeoutChange(o);
    },
    onMouseDownPlus: function(grid, o) {
      var me = this;

      me.plusRate(o.item);
      grid.update();

      me.plusDown = true;
      me.timeoutChange(o);
    },
    timeoutChange: function(o) {
      var me = this;

      setTimeout(function() {
        if (me.plusDown || me.minusDown) {
          var intervalUpdate = 200,
            now = new Date(),
            interval;

          interval = setInterval(function() {
            if (!me.plusDown && !me.minusDown) {
              clearInterval(interval);
            }

            if (new Date - now > intervalUpdate) {
              if (me.plusDown) {
                me.plusRate(o.item);
              } else if (me.minusDown) {
                me.minusRate(o.item);
              }

              if (intervalUpdate > 50) {
                intervalUpdate -= 17;
              }

              me.update();
              now = new Date();
            }
          }, 7);
        }
      }, 500);
    }
  });

  FancyGrid.defineController('mycontrol2', {
    controls: [{
      event: 'docmouseup',
      handler: 'onMouseUp'
    }],
    onMouseUp: function() {
      var me = this;

      me.minusDown = false;
      me.plusDown = false;
    },
    minusRate: function(item) {
      var value = item.get('hour') - 1;

      if (value < 5) {
        value = 5;
      }

      item.set('hour', value);
    },
    plusRate: function(item) {
      var value = item.get('hour') + 1;

      if (value > 100) {
        value = 100;
      }

      item.set('hour', value);
    }
  });

  new FancyGrid({
    title: 'Employee',
    renderTo: 'container',
    width: 600,
    height: 500,
    data: data,
    selModel: 'row',
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
      index: 'hour',
      type: 'number',
      format: 'number',
      cellAlign: 'center',
      editable: false,
      render: function(o) {

        o.value = '<a class="sign-minus">&ndash;</a><span class="hour-value">$' + o.value + '</span><a class="sign-plus">+</a>';

        return o;
      },
      title: 'Hour rate',
      width: 80
    }],
    controller: ['mycontrol', 'mycontrol2']
  });

});
