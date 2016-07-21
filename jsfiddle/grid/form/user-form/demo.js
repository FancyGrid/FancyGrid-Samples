$(function() {

  new FancyForm({
    renderTo: 'container',
    title: 'User Data',
    width: 300,
    height: 535,
    labelWidth: 80,
    defaults: {
      type: 'string'
    },
    items: [{
      name: 'id',
      type: 'hidden'
    },{
      label: 'Name',
      emptyText: 'Name',
      name: 'name'
    },{
      label: 'SurName',
      emptyText: 'SurName',
      name: 'surname'
    },{
      label: 'E-mail',
      emptyText: 'E-mail',
      name: 'email'
    },{
      type: 'date',
      label: 'Birthday',
      name: 'birthday'
    },{
      type: 'checkbox',
      label: 'Active',
      name: 'active',
      value: true
    },{
      type: 'number',
      label: 'Hour rate',
      name: 'hour',
      min: 0
    },{
      type: 'string',
      label: 'Position',
      name: 'position'
    },{
      type: 'textarea',
      label: 'About',
      name: 'about'
    },{
      type: 'combo',
      label: 'Country',
      name: 'country',
      data: [
        {index: 0, country: 'USA'},
        {index: 1, country: 'Canada'}
      ],
      displayKey: 'country',
      valueKey: 'index',
      value: 0,
      events: [{
        change: function(field, value){
          console.log(arguments);
        }
      }]
    },{
      type: 'radio',
      label: 'Car brand',
      name: 'brand',
      value: 'none',
      items: [{
        text: 'None',
        value: 'none'
      },{
        text: 'Honda',
        value: 'honda'
      },{
        text: 'Land Rover',
        value: 'lr'
      }]
    }],
    buttons: ['side', {
      text: 'Clear',
      handler: function(){
        this.clear();
      }
    },{
      text: 'Save',
      handler: function(){
        
      }
    }]
  });

});