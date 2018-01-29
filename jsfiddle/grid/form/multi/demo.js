document.addEventListener("DOMContentLoaded", function() {
  
new FancyForm({
  renderTo: 'container',
  title: 'Multi forms',
  width: 285,
  height: 300,
  activeTab: 0,
  url: 'submit.php',
  items: [{
    type: 'tab',
    items: [{
      type: 'string',
      label: 'Name',
      emptyText: 'Name',
      name: 'name'
    },{
      type: 'string',
      label: 'SurName',
      emptyText: 'SurName',
      name: 'surname'
    }, {
      type: 'password',
      label: 'Pass',
      emptyText: 'Pass',
      name: 'pass'
    }]
  }, {
    type: 'tab',
    items: [{
      type: 'number',
      label: 'Age',
      name: 'age',
       min: 20,
       max: 100
     }, {
       type: 'checkbox',
       label: 'Married',
       name: 'married'
     }]
  },{
    type: 'tab',
    items: [{
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
      value: 0
    },{
      type: 'textarea',
      inputWidth: 250,
      height: 110,
      emptyText: 'About',
      label: false,
      name: 'about'
    }]
  }],
  buttons: ['side', {
    text: 'Prev',
    disabled: true,
    handler: function(button) {
      this.prevTab();
      if (this.activeTab === 0) {
        button.disable();
      }
      this.buttons[1].enable();
    }
  },{
    text: 'Next',
    handler: function(button) {
      this.nextTab();
      if (this.activeTab === 2) {
        button.disable();
      }
      this.buttons[0].enable();
    }
  }]
});

});