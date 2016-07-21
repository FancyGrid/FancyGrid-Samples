$(function() {
  
  var comboData = [{
    index: 0,
    country: 'USA'
  }, {
    index: 1,
    country: 'Canada'
  }];
  
  
  new FancyForm({
    renderTo: 'form',
    title: 'labelAlign - left(default)',
    width: 350,
    height: 400,
    defaults: {
      type: 'string'
    },
    items: [{
      label: 'Name',
      emptyText: 'Name',
      name: 'name'
    }, {
      label: 'SurName',
      emptyText: 'SurName',
      name: 'surname'
    }, {
      type: 'number',
      label: 'Age',
      name: 'age',
      min: 20,
      max: 100
    }, {
      type: 'combo',
      label: 'Country',
      name: 'country',
      data: comboData,
      displayKey: 'country',
      valueKey: 'index',
      value: 0
    }, {
      type: 'textarea',
      label: 'About',
      name: 'about'
    },{
      type: 'date',
      label: 'Birthday',
      name: 'birthday'
    }],
    buttons: ['side',{
      text: 'Values',
      handler: function() {
        console.log(this.get());
        console.log(this.get('name'));
      }
    }, {
      text: 'Clear',
      handler: function() {
        console.log('clear');
        this.clear();
      }
    }]
  });

  new FancyForm({
    renderTo: 'form1',
    title: 'labelAlign - right',
    width: 350,
    height: 400,
    defaults: {
      type: 'string',
      labelAlign: 'right'
    },
    items: [{
      label: 'Name',
      emptyText: 'Name',
      name: 'name'
    }, {
      label: 'SurName',
      emptyText: 'SurName',
      name: 'surname'
    }, {
      type: 'number',
      label: 'Age',
      name: 'age',
      min: 20,
      max: 100
    }, {
      type: 'combo',
      label: 'Country',
      name: 'country',
      data: comboData,
      displayKey: 'country',
      valueKey: 'index',
      value: 0
    }, {
      type: 'textarea',
      label: 'About',
      name: 'about'
    },{
      type: 'date',
      label: 'Birthday',
      name: 'birthday'
    }],
    buttons: ['side',{
      text: 'Values',
      handler: function() {
        console.log(this.get());
        console.log(this.get('name'));
      }
    }, {
      text: 'Clear',
      handler: function() {
        console.log('clear');
        this.clear();
      }
    }]
  });
  
  new FancyForm({
    renderTo: 'form2',
    title: 'labelAlign - top',
    width: 350,
    height: 400,
    defaults: {
      type: 'string',
      labelAlign: 'top'
    },
    items: [{
      label: 'Name',
      emptyText: 'Name',
      name: 'name'
    }, {
      label: 'SurName',
      emptyText: 'SurName',
      name: 'surname'
    }, {
      type: 'number',
      label: 'Age',
      name: 'age',
      min: 20,
      max: 100
    }, {
      type: 'combo',
      label: 'Country',
      name: 'country',
      data: comboData,
      displayKey: 'country',
      valueKey: 'index',
      value: 0
    }, {
      type: 'textarea',
      label: 'About',
      name: 'about'
    },{
      type: 'date',
      label: 'Birthday',
      name: 'birthday'
    }],
    buttons: ['side',{
      text: 'Values',
      handler: function() {
        console.log(this.get());
        console.log(this.get('name'));
      }
    }, {
      text: 'Clear',
      handler: function() {
        console.log('clear');
        this.clear();
      }
    }]
  }); 

});