function salaryInputFn(value) {
  value = value.toString().replace('$', '').replace(/\,/g, '').replace('-', '').replace('.', '');

  if (value.length === 0) {
    value = '';
  } else if (value.length > 6) {
    value = value.substr(0, 6);
    value = '$' + value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  } else {
    value = '$' + value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  return value;
}

function phoneInputFn(value) {
  value = parseInt(value.replace(/\-/g, ''));

  if (isNaN(value)) {
    value = '';
  } else {
    value = String(value);
  }

  switch (value.length) {
    case 0:
    case 1:
    case 2:
      break;
    case 4:
    case 5:
    case 6:
      value = value.replace(/^(\d{3})/, "$1-");
      break;
    case 7:
    case 8:
    case 9:
      value = value.replace(/^(\d{3})(\d{3})/, "$1-$2-");
      break;
    case 10:
      value = value.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
      break;
    default:
      value = value.substr(0, 10);
      value = value.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
  }

  return value;
}

var data = [{
  "position": "CEO",
  "name": "Nick",
  "surname": "Thomson",
  "salary": 10000,
  "image": "http://fancygrid.com/images/staff/boy-4.png",
  "phone": "858-490-5000",
  "sales": [4, 7, 15, 4, 7, 8, 0],
  "birthday": "1961.10.01"
}, {
  "position": "Sales Director",
  "name": "Peter",
  "surname": "West",
  "salary": 7000,
  "image": "http://fancygrid.com/images/staff/boy-2.png",
  "phone": "858-490-5001",
  "sales": [8, 9, 7, 9, 7, 5, 0],
  "birthday": "1965.1.5"
}, {
  "position": "Tech Director",
  "name": "Alexander",
  "surname": "Brown",
  "salary": 6000,
  "image": "http://fancygrid.com/images/staff/boy-3.png",
  "phone": "858-490-5002",
  "sales": [2, 2, 3, 1, 1, 2, 0],
  "birthday": "1966.8.21"
}, {
  "position": "Clients Manager",
  "name": "Nicholas",
  "surname": "Miller",
  "salary": 6000,
  "image": "http://fancygrid.com/images/staff/boy-5.png",
  "phone": "858-490-5003",
  "sales": [3, 3, 4, 2, 3, 3, 0],
  "birthday": "1967.9.17"
}, {
  "position": "Staff Director",
  "name": "Sophia",
  "surname": "Smith",
  "salary": 5500,
  "image": "http://fancygrid.com/images/staff/girl.png",
  "phone": "858-490-5004",
  "sales": [0, 0, 0, 0, 0, 0, 0],
  "birthday": "1970.2.1"
}, {
  "position": "Manager",
  "name": "Emma",
  "surname": "Walker",
  "salary": 5000,
  "image": "http://fancygrid.com/images/staff/girl-1.png",
  "phone": "858-490-5005",
  "sales": [5, 4, 3, 5, 5, 8, 0],
  "birthday": "1965.1.7"
}, {
  "position": "Manager",
  "name": "Ted",
  "surname": "Smith",
  "salary": 5000,
  "image": "http://fancygrid.com/images/staff/boy.png",
  "phone": "858-490-5006",
  "sales": [1, 3, 4, 5, 2, 2, 0],
  "birthday": "1970.8.11"
}, {
  "position": "Manager",
  "name": "Ryan",
  "surname": "Walker",
  "salary": 5000,
  "image": "http://fancygrid.com/images/staff/boy-1.png",
  "phone": "858-490-5007",
  "sales": [1, 2, 3, 4, 4, 3, 0],
  "birthday": "1975.11.7"
}, {
  "position": "Manager",
  "name": "Lily",
  "surname": "Richardson",
  "salary": 5000,
  "image": "http://fancygrid.com/images/staff/girl-2.png",
  "phone": "858-490-5008",
  "sales": [2, 2, 3, 3, 3, 1, 0],
  "birthday": "1977.10.1"
}, {
  "position": "Manager",
  "name": "Mia",
  "surname": "Grant",
  "salary": 5000,
  "image": "http://fancygrid.com/images/staff/girl-3.png",
  "phone": "858-490-5009",
  "sales": [2, 3, 4, 4, 5, 6, 0],
  "birthday": "1978.8.3"
}, {
  "position": "Manager",
  "name": "Olivia",
  "surname": "Edwards",
  "salary": 5000,
  "image": "http://fancygrid.com/images/staff/girl-4.png",
  "phone": "858-490-5020",
  "sales": [2, 1, 3, 4, 5, 1, 0],
  "birthday": "1979.9.8"
}, {
  "position": "Manager",
  "name": "Katie",
  "surname": "Gardner",
  "salary": 5000,
  "image": "http://fancygrid.com/images/staff/girl-5.png",
  "phone": "858-490-5021",
  "sales": [2, 3, 4, 5, 1, 2, 0],
  "birthday": "1988.7.7"
}, {
  "position": "Manager",
  "name": "Ivan",
  "surname": "Woods",
  "salary": 5000,
  "image": "http://fancygrid.com/images/staff/man-1.png",
  "phone": "858-490-5022",
  "sales": [1, 2, 3, 4, 1, 1, 0],
  "birthday": "1990.1.1"
}, {
  "position": "Junior Manager",
  "name": "Lorenzo",
  "surname": "Simpson",
  "salary": 2000,
  "image": "http://fancygrid.com/images/staff/man.png",
  "phone": "858-490-5023",
  "sales": [1, 0, 1, 1, 2, 1, 0],
  "birthday": "1995.2.5"
}];


Fancy.defineTheme('staff', {
  config: {
    cellHeight: 60
  }
});

Fancy.defineController('staffGridConrol', {
  onSelect: function(grid) {
    var selection = grid.getSelection(),
      editButton = grid.tbar[2];

    if (selection.length === 1) {
      editButton.enable();
    } else {
      editButton.disable();
    }
  },
  onClearSelect: function(grid) {
    grid.tbar[1].disable();
  },
  onRowDBLClick: function(grid, o) {
    grid.editUser(o.data);
  },
  editUser: function(item) {
    var me = this,
      staffEditForm = me.staffEditForm;

    if (staffEditForm) {
      staffEditForm.set(item);
      staffEditForm.setTitle(item.name + ' ' + item.surname);

      staffEditForm.show();
    } else {
      staffEditForm = new FancyForm({
        title: {
          text: item.name + ' ' + item.surname,
          tools: [{
            text: 'Close',
            handler: function() {
              this.hide();
            }
          }]
        },
        window: true,
        draggable: true,
        width: 300,
        height: 370,
        defaults: {
          type: 'string'
        },
        items: [{
          label: 'Name',
          name: 'name',
          value: item.name
        }, {
          label: 'Sur Name',
          name: 'surname',
          value: item.surname
        }, {
          label: 'Position',
          name: 'position',
          value: item.position
        }, {
          label: 'Salary',
          name: 'salary',
          value: item.salary,
          spin: true,
          step: 1000,
          type: 'number',
          min: 0,
          max: 150000,
          format: {
            inputFn: salaryInputFn
          }
        }, {
          label: 'Phone',
          name: 'phone',
          value: item.phone,
          emptyText: 'xxx-xxx-xxxx',
          vtype: 'notempty',
          emptyText: 'xxx-xxx-xxxx',
          format: {
            inputFn: phoneInputFn
          }
        }, {
          label: 'Birthday',
          name: 'birthday',
          value: item.birthday,
          format: {
            read: 'Y.m.d',
            write: 'Y.m.d',
            edit: 'd.m.Y'
          },
          type: 'date'
        }, {
          label: 'Image url',
          name: 'image',
          value: item.image
        }, {
          name: 'id',
          value: item.id,
          type: 'hidden'
        }],
        buttons: ['side', {
          text: 'Close',
          handler: function() {
            this.hide();
          }
        }, {
          text: 'Save',
          handler: function() {
            me.getById(this.get('id')).set(this.get());
            me.update();
          }
        }],
        events: [{
          init: function() {
            this.show();
          }
        }]
      });

      me.staffEditForm = staffEditForm;
    }
  }
});


$(function() {


  new FancyGrid({
    resizable: true,
    renderTo: 'container',
    title: 'KIA MOTORS Dealer Staff',
    theme: 'staff',
    width: 750,
    height: 450,
    trackOver: true,
    selModel: 'rows',
    data: data,
    tbar: [{
      text: 'Add',
      action: 'add'
    }, {
      text: 'Remove',
      action: 'remove',
      tip: 'Select one or more rows to remove.'
    }, {
      text: 'Edit',
      disabled: true,
      tip: 'Select one row to start edit. <br> Or double click on row.',
      handler: function() {
        var me = this,
          selection = me.getSelection(),
          item = selection[0];

        this.editUser(item);
      }
    }],
    events: [{
      select: 'onSelect'
    }, {
      clearselect: 'onClearSelect'
    }, {
      rowdblclick: 'onRowDBLClick'
    }],
    controllers: ['staffGridConrol'],
    defaults: {
      type: 'string',
      width: 75,
      resizable: true,
      sortable: true
    },
    clicksToEdit: 1,
    columnLines: false,
    columnClickData: true,
    columns: [{
      type: 'image',
      index: 'image',
      title: 'Photo',
      cls: 'image-staff',
      width: 100
    }, {
      text: 'Base Info',
      columns: [{
        title: 'Name',
        index: 'name',
        width: 100
      }, {
        title: 'SurName',
        index: 'surname',
        width: 100
      }, {
        title: 'Position',
        index: 'position',
        width: 100
      }]
    }, {
      title: 'Salary',
      index: 'salary',
      type: 'currency'
    }, {
      title: 'Phone',
      index: 'phone',
      width: 120
    }, {
      title: 'Birthday',
      index: 'birthday',
      type: 'date',
      width: 100,
      format: {
        read: 'Y.m.d',
        write: 'm/d/Y',
        edit: 'm/d/Y'
      }
    }]
  });

});