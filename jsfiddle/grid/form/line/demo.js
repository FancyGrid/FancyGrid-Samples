document.addEventListener("DOMContentLoaded", function() {

  var cardData = [
    {index: 0, card: ''},
    {index: 1, card: 'Visa'},
    {index: 2, card: 'MasterCard'},
    {index: 3, card: 'Maestro'},
  ];
  
  var yearData = [
    {index: 0, year: ''},    
    {index: 1, year: 2016},
    {index: 2, year: 2017},
    {index: 3, year: 2018},
    {index: 4, year: 2019},
    {index: 5, year: 2020},
    {index: 6, year: 2021},
    {index: 7, year: 2022},
    {index: 8, year: 2023},
    {index: 9, year: 2024},
    {index: 10, year: 2025},
    {index: 11, year: 2026},
    {index: 12, year: 2027},
    {index: 13, year: 2028},
    {index: 14, year: 2029},
    {index: 15, year: 2030},
    {index: 16, year: 2031},
    {index: 17, year: 2032},
    {index: 18, year: 2033},
    {index: 19, year: 2034},
    {index: 20, year: 2035}
  ];
  
  var monthData = [
    {index: 0, month: ''},
    {index: 1, month: '01'},
    {index: 2, month: '02'},
    {index: 3, month: '03'},
    {index: 4, month: '04'},
    {index: 5, month: '05'},
    {index: 6, month: '06'},
    {index: 7, month: '07'},
    {index: 8, month: '08'},
    {index: 9, month: '09'},
    {index: 10, month: '10'},
    {index: 11, month: '11'},
    {index: 12, month: '12'}
  ];
  
  var comboMonth = [];
  
  new FancyForm({
    renderTo: 'container',
    title: 'Card',
    width: 350,
    height: 280,
    url: 'submit.php',
    method: 'POST',      
    items: [{
      type: 'line',
      defaults: {},
      items: [{
        type: 'string',
        labelAlign: 'top',
        label: 'Cardholder',
        emptyText: 'Name',
        name: 'name'
      },{
        type: 'string',
        labelAlign: 'top',
        emptyText: 'SurName',
        name: 'surname'
      }]
    },{
      type: 'line',
      defaults: {
        valid: {
          blank: false,
          blankText: 'Required'
        }
      },
      items: [{
        type: 'string',
        labelAlign: 'top',
        label: 'Card number',
        name: 'cardnumber'
      },{
        type: 'combo',
        labelAlign: 'top',
        label: 'Card type',
        name: 'cardtype',
        data: cardData,
        displayKey: 'card',
        valueKey: 'index',
        value: 0
      }]
    },{
      type: 'line',
      defaults: {
        valid: {
          blank: false,
          blankText: 'Required'
        }
      },
      items: [{
        type: 'combo',
        labelAlign: 'top',
        label: 'Expires',
        name: 'month',        
        data: monthData,
        displayKey: 'month',
        valueKey: 'index',
        value: 0
      },{
        type: 'combo',
        labelAlign: 'top',
        name: 'year',
        data: yearData,
        displayKey: 'year',
        valueKey: 'index',
        value: 0
      },{
        type: 'number',
        labelAlign: 'top',
        label: 'Code',
        name: 'code',
        min: 100,
        max: 999,
        valid: {
          type: 'code',
          blank: false,
          blankText: 'Required'
        }
      }]
    }],
    buttons: ['side', {
      text: 'Clear',
      handler: function(){
        this.clear();
      }
    },{
      text: 'Submit',
      handler: function(){
        this.submit({
          params: {
            param3: 'Some Values'
          },
          success: function(result, status, xhr){
            console.log('success');
            console.log(arguments);
          },
          error: function(xhr,status,error){
            console.log('error');
            console.log(arguments);
          }
        });
      }
    }]
  });

});