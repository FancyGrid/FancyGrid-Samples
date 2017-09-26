$(function() {
  
  new FancyForm({
    renderTo: 'container',
    title: 'Radio Fields',
    width: 370,
    height: 250,
    labelWidth: 80,
    items: [{
      type: 'radio',
      label: 'Favorite car brand?',
      name: 'brand',
      value: 'kia',
      items: [{
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
      type: 'radio',
      label: 'Favorite SUV?',
      name: 'suv',
      column: true,
      items: [{
        text: 'KIA Sportage',
        value: 'sportage'
      }, {
        text: 'Toyota Land Cruiser',
        value: 'landcruiser'
      }, {
        text: 'Honda CR-V',
        value: 'crv'
      }, {
        text: 'Range Rover Sport',
        value: 'rrs'
      }]
    }],
    buttons: ['side', {
      text: 'Values',
      handler: function() {
        console.log(this.get());
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