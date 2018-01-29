document.addEventListener("DOMContentLoaded", function() {

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

new FancyForm({
  renderTo: 'container',
  title: 'User Data',
  width: 330,
  height: 730,
  labelWidth: 80,
  defaults: {
    type: 'string'
  },
  items: [{
    name: 'id',
    type: 'hidden'
  }, {
    label: 'Name',
    emptyText: 'Name',
    name: 'name'
  }, {
    label: 'SurName',
    emptyText: 'SurName',
    name: 'surname'
  }, {
    label: 'E-mail',
    emptyText: 'E-mail',
    name: 'email',
    vtype: 'email'
  }, {
    type: 'date',
    label: 'Birthday',
    name: 'birthday'
  }, {
    label: 'Phone',
    name: 'phone',
    emptyText: 'xxx-xxx-xxxx',
    format: {
      inputFn: phoneInputFn
    }
  }, {
    type: 'checkbox',
    label: 'Married',
    name: 'married',
    value: true
  }, {
    type: 'switcher',
    label: 'Active',
    name: 'active',
    value: true
  }, {
    type: 'number',
    label: 'Childs',
    name: 'childs',
    min: 0,
    value: 2
  }, {
    type: 'number',
    label: 'Salary',
    name: 'salary',
    emptyText: '$80,000',
    spin: true,
    step: 1000,
    min: 20000,
    max: 150000,
    value: 75000,
    format: {
      inputFn: salaryInputFn
    }
  }, {
    type: 'string',
    label: 'Position',
    name: 'position'
  }, {
    type: 'textarea',
    label: 'About',
    name: 'about'
  }, {
    type: 'combo',
    label: 'Country',
    name: 'country',
    data: [{
      index: 0,
      country: 'USA'
    }, {
      index: 1,
      country: 'Canada'
    }],
    displayKey: 'country',
    valueKey: 'index',
    value: 0,
    events: [{
      change: function(field, value) {
        console.log(arguments);
      }
    }]
  }, {
    type: 'radio',
    label: 'Car brand',
    name: 'brand',
    value: 'none',
    items: [{
      text: 'None',
      value: 'none'
    }, {
       text: 'KIA',
        value: 'kia'
    }, {
       text: 'Honda',
       value: 'honda'
    }, {
       text: 'Land Rover',
       value: 'lr'
	}, {
       text: 'Toyota',
       value: 'toyota'
	}, {
       text: 'BMW',
       value: 'bmw'
    }]
  }, {
    label: 'Military',
    type: 'segbutton',
    items: [{
      text: 'Yes'
    }, {
      text: 'No',
      pressed: true
    }]
  }, {
    label: 'Education',
    type: 'segbutton',
    multiToggle: true,
    items: [{
      text: 'Bachelor'
    }, {
      text: 'Master',
      pressed: true
    }, {
      text: 'PhD',
      pressed: true
    }, {
      text: 'Doctor'
    }]
  }],
  buttons: ['side', {
    text: 'Clear',
    handler: function() {
      this.clear();
    }
  }, {
    text: 'Save',
    handler: function() {

    }
  }]
});

});