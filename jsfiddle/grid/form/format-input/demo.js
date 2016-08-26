function upInputFn(value) {
  value = value.toString().toLocaleUpperCase();

  return value;
}

function upFirstInputFn(value) {
  var splitted = value.split(' ');

  if (splitted[0].length) {
    value = splitted[0][0].toLocaleUpperCase() + splitted[0].substr(1, splitted[0].length);

    if (splitted.length !== 1) {
      value += ' ';
    }

    if (splitted[1]) {
      value += splitted[1][0].toLocaleUpperCase() + splitted[1].substr(1, splitted[1].length);
    }
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

function phoneBracketsInputFn(value) {
  value = parseInt(value.replace(/\-/g, '').replace(/\(/g, '').replace(/\)/g, ''));

  if (isNaN(value)) {
    value = '';
  } else {
    value = String(value);
  }

  switch (value.length) {
    case 0:
      break;
    case 1:
    case 2:
      value = '(' + value;
      break;
    case 3:
      value = '(' + value;
      break;
    case 4:
    case 5:
    case 6:
      value = value.replace(/^(\d{3})/, "($1)-");
      break;
    case 7:
    case 8:
    case 9:
      value = value.replace(/^(\d{3})(\d{3})/, "($1)-$2-");
      break;
    case 10:
      value = value.replace(/(\d{3})(\d{3})(\d{4})/, "($1)-$2-$3");
      break;
    default:
      value = value.substr(0, 10);
      value = value.replace(/(\d{3})(\d{3})(\d{4})/, "($1)-$2-$3");
  }

  return value;
}

function dateInputFn(value) {
  var splitted = value.split('.');

  switch (splitted.length) {
    case 1:
      if (splitted[0].length > 2) {
        splitted[1] = splitted[0].substr(2, 1);
        splitted[0] = splitted[0].substr(0, 2);
      }
      break;
    case 2:
      if (splitted[1].length > 2) {
        splitted[2] = splitted[1].substr(2, 4);
        splitted[1] = splitted[1].substr(0, 2);
      }
      break;
    case 3:
      if (splitted[2].length > 4) {
        splitted[2] = splitted[2].substr(0, 4);
      }
  }

  value = splitted[0];

  if (splitted[1]) {
    value += '.' + splitted[1];

    if (splitted[2]) {
      if (splitted[1].length === 1) {
        splitted[1] = '0' + splitted[1];
      }

      value += '.' + splitted[2];
    }
  }

  return value;
}

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

function zipInputFn(value) {
  value = value.toString().substr(0, 6);

  return value;
}

$(function() {

  new FancyForm({
    renderTo: 'container',
    title: 'Format input',
    width: 300,
    height: 400,
    labelWidth: 80,
    defaults: {
      type: 'string'
    },
    items: [{
      label: 'Name',
      emptyText: 'UPPERCASE',
      format: {
        inputFn: upInputFn
      },
      name: 'name'
    }, {
      label: 'Full Name',
      emptyText: 'Name Surname',
      format: {
        inputFn: upFirstInputFn
      },
      name: 'name'
    }, {
      type: 'date',
      label: 'Birthday',
      name: 'birthday',
      emptyText: 'm.d.Y',
      format: {
        read: 'm.d.Y',
        write: 'm.d.Y',
        edit: 'm.d.Y',
        inputFn: dateInputFn
      }
    }, {
      type: 'number',
      label: 'Salary',
      name: 'salary',
      emptyText: '$80,000',
      format: {
        inputFn: salaryInputFn
      }
    }, {
      label: 'Phone',
      name: 'phone',
      emptyText: 'xxx-xxx-xxxx',
      format: {
        inputFn: phoneInputFn
      }
    }, {
      label: 'Phone2',
      name: 'phone2',
      emptyText: '(xxx)-xxx-xxxx',
      format: {
        inputFn: phoneBracketsInputFn
      }
    }, {
      label: 'Zip Code',
      name: 'zip',
      emptyText: 'xxxxxx',
      format: {
        inputFn: zipInputFn
      }
    }]
  });

});
