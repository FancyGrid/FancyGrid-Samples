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
  "phone": "858-490-5000",
  "birthday": "1961.10.01"
}, {
  "position": "Sales Director",
  "name": "Peter",
  "surname": "West",
  "salary": 7000,
  "phone": "858-490-5001",
  "birthday": "1965.01.05"
}, {
  "position": "Tech Director",
  "name": "Alexander",
  "surname": "Brown",
  "salary": 6000,
  "phone": "858-490-5002",
  "birthday": "1966.08.21"
}, {
  "position": "Clients Manager",
  "name": "Nicholas",
  "surname": "Miller",
  "salary": 6000,
  "phone": "858-490-5003",
  "birthday": "1967.09.17"
}, {
  "position": "Staff Director",
  "name": "Sophia",
  "surname": "Smith",
  "salary": 5500,
  "phone": "858-490-5004",
  "birthday": "1970.02.01"
}, {
  "position": "Manager",
  "name": "Emma",
  "surname": "Walker",
  "salary": 5000,
  "phone": "858-490-5005",
  "birthday": "1965.01.07"
}, {
  "position": "Manager",
  "name": "Ted",
  "surname": "Smith",
  "salary": 5000,
  "phone": "858-490-5006",
  "birthday": "1970.08.11"
}, {
  "position": "Manager",
  "name": "Ryan",
  "surname": "Walker",
  "salary": 5000,
  "phone": "858-490-5007",
  "birthday": "1975.11.07"
}, {
  "position": "Manager",
  "name": "Lily",
  "surname": "Richardson",
  "salary": 5000,
  "phone": "858-490-5008",
  "birthday": "1977.10.01"
}, {
  "position": "Manager",
  "name": "Mia",
  "surname": "Grant",
  "salary": 5000,
  "phone": "858-490-5009",
  "birthday": "1978.08.03"
}, {
  "position": "Manager",
  "name": "Olivia",
  "surname": "Edwards",
  "salary": 5000,
  "phone": "858-490-5020",
  "birthday": "1979.09.08"
}, {
  "position": "Manager",
  "name": "Katie",
  "surname": "Gardner",
  "salary": 5000,
  "phone": "858-490-5021",
  "birthday": "1988.07.07"
}, {
  "position": "Manager",
  "name": "Ivan",
  "surname": "Woods",
  "salary": 5000,
  "phone": "858-490-5022",
  "birthday": "1990.01.01"
}, {
  "position": "Junior Manager",
  "name": "Lorenzo",
  "surname": "Simpson",
  "salary": 2000,
  "phone": "858-490-5023",
  "birthday": "1995.02.05"
}];

$(function() {

  new FancyGrid({
    resizable: true,
    renderTo: 'container',
    title: 'KIA MOTORS Dealer Staff',
    width: 550,
    height: 450,
    trackOver: true,
    selModel: 'rows',
    data: data,
    tbar: [{
      text: 'Add',
      action: 'add'
    }, {
      text: 'Remove',
      action: 'remove'
    }],
    defaults: {
      type: 'string',
      width: 75,
      resizable: true,
      sortable: true,
      editable: true
    },
    clicksToEdit: 1,
    columnLines: false,
    columnClickData: true,
    columns: [{
      title: 'Name',
      index: 'name',
      width: 70
    }, {
      title: 'SurName',
      index: 'surname',
      width: 70
    }, {
      title: 'Position',
      index: 'position',
      width: 80
    }, {
      title: 'Salary',
      index: 'salary',
      type: 'number',
      spin: true,
      step: 1000,
      min: 0,
      max: 150000,
      format: {
        inputFn: salaryInputFn
      }
    }, {
      title: 'Phone',
      index: 'phone',
      width: 120,
      format: {
        inputFn: phoneInputFn
      }
    }, {
      title: 'Birthday',
      index: 'birthday',
      type: 'date',
      width: 90,
      format: {
        read: 'Y.m.d',
        write: 'm/d/Y',
        edit: 'm/d/Y'
      }
    }]
  });

});