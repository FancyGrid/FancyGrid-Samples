document.addEventListener("DOMContentLoaded", function() {

new FancyForm({
  renderTo: 'container',
  title: 'Combo MultiSelect',
  width: 285,
  height: 300,
  items: [{
    type: 'combo',
    multiSelect: true,
    label: 'MultiSelect',
    data: [
      {index: 'us', country: 'USA'},
      {index: 'ca', country: 'Canada'},
      {index: 'br', country: 'Brazil'}
    ],
    displayKey: 'country',
    valueKey: 'index',
    value: ['us', 'br']
  },{
    type: 'combo',
    multiSelect: true,
    itemCheckBox: true,
    label: 'CheckBoxes',
    data: [
      {index: 'us', country: 'USA'},
      {index: 'ca', country: 'Canada'},
      {index: 'br', country: 'Brazil'}
    ],
    displayKey: 'country',
    valueKey: 'index',
    value: ['us', 'br']
  }]
});

});