
var gridUsers;

function renderUsersGrid(title, i18n){

  if( gridUsers ){
    gridUsers.destroy();
  }

  var data = [{
    name: 'Ted',
    surname: 'Smith',
    company: 'Electrical Systems',
    birthday: '6/22/1953'
  }, {
    name: 'Ed',
    surname: 'Johnson',
    company: 'Energy and Oil',
    birthday: '9/12/1971'
  }, {
    name: 'Sam',
    surname: 'Williams',
    company: 'Airbus',
    birthday: '9/2/1973'
  }, {
    name: 'Alexander',
    surname: 'Brown',
    company: 'Renault',
    birthday: '8/18/1978'
  }, {
    name: 'Nicholas',
    surname: 'Miller',
    company: 'Adobe',
    birthday: '4/2/1981'
  }, {
    name: 'Andrew',
    surname: 'Thompson',
    company: 'Google',
    birthday: '2/14/1960'
  }, {
    name: 'Ryan',
    surname: 'Walker',
    company: 'Siemens',
    birthday: '7/22/1987'
  }, {
    name: 'John',
    surname: 'Scott',
    company: 'Cargo',
    birthday: '6/19/1969'
  }, {
    name: 'James',
    surname: 'Phillips',
    company: 'Pro bugs',
    birthday: '6/7/1985'
  }, {
    name: 'Brian',
    surname: 'Edwards',
    company: 'IT Consultant',
    birthday: '6/23/1981'
  }, {
    name: 'Jack',
    surname: 'Richardson',
    company: 'Europe IT',
    birthday: '8/3/1967'
  }, {
    name: 'Alex',
    surname: 'Howard',
    company: 'Cisco',
    birthday: '1/6/1972'
  }, {
    name: 'Carlos',
    surname: 'Wood',
    company: 'HP',
    birthday: '10/7/1954'
  }, {
    name: 'Adrian',
    surname: 'Russell',
    company: 'Micro Systems',
    birthday: '1/3/1987'
  }, {
    name: 'Jeremy',
    surname: 'Hamilton',
    company: 'Big Machines',
    birthday: '3/27/1982'
  }, {
    name: 'Ivan',
    surname: 'Woods',
    company: '',
    birthday: '10/19/1970'
  }, {
    name: 'Peter',
    surname: 'West',
    company: 'Adobe',
    birthday: '3/19/1991'
  }, {
    name: 'Scott',
    surname: 'Simpson',
    company: 'IBM',
    birthday: '6/19/1993'
  }, {
    name: 'Lorenzo',
    surname: 'Tucker',
    company: 'Intel',
    birthday: '1/15/1957'
  }, {
    name: 'Randy',
    surname: 'Grant',
    company: 'Bridges',
    birthday: '11/1/1974'
  }, {
    name: 'Arthur',
    surname: 'Gardner',
    company: 'Google',
    birthday: '5/5/1978'
  }, {
    name: 'Orlando',
    surname: 'Ruiz',
    company: 'Apple',
    birthday: '5/1/1973'
  }];

  gridUsers = new FancyGrid({
    title: title,
    renderTo: 'container',
    width: 570,
    height: 400,
    data: data,
    clicksToEdit: 1,
    i18n: i18n,
    defaults: {
      type: 'string',
      width: 100,
      editable: true,
      resizable: true
    },
    paging: true,
    columns: [{
      index: 'company',
      title: 'Company'
    },{
      index: 'name',
      title: 'Name'
    },{
      index: 'surname',
      title: 'Sur Name'   
    },{
      index: 'birthday',
      title: 'Birthday',
      type: 'date',
      format: {
        read: 'm/d/Y'
      }
    }]
  });

};

renderUsersGrid('Deutsch', 'de');

(function(){

  FancyGrid.defineTheme('i18n', {
    extend: 'default',
    config: {
      panelBorderWidth: 0
    }
  });

  var data = [
    {c1: 'Czech', c2: 'Danish', c3: 'German', c4: 'English' },
    {c1: 'English Australia', c2: 'English UK', c3: 'Swedish', c4: 'Spanish' },
    {c1: 'Finnish', c2: 'French', c3: 'French Canada', c4: 'Indonesian'},
    {c1: 'Japanese', c2: 'Korean', c3: 'Norwegian Bokmal', c4: 'Norwegian Nynorsk' },
    {c1: 'Polish', c2: 'Portuguese Brazil', c3: 'Portuguese Portugal', c4: 'Russian' },
    {c1: 'Turkish', c2: 'Simplified Chinese', c3: 'Traditional Chinese',  c4: 'Italian' }
  ];
  
  var i18nMap = {
    'Czech': 'cs',
    'Danish': 'da',
    'German': 'de',
    'English': 'en-US',
    'English Australia': 'en-AU',
    'English UK': 'en-UK',
    'Spanish': 'es',
    'Finnish': 'fi',
    'French': 'fr',
    'French Canada': 'fr-CA',
    'Indonesian': 'id',
    'Italian': 'it',
    'Japanese': 'ja',
    'Korean': 'ko',
    'Norwegian Bokmal': 'no-NB',
    'Norwegian Nynorsk': 'no-NN',
    'Polish': 'pl',
    'Portuguese Brazil': 'pt-BR',
    'Portuguese Portugal': 'pt-PT',
    'Russian': 'ru',
    'Swedish': 'sv',
    'Turkish': 'tr',
    'Simplified Chinese': 'zh-CN',
    'Traditional Chinese': 'zh-TW'
  };
    
  new FancyGrid({
    title: 'Choose your language',
    theme: 'i18n',
    renderTo: 'grid-i18n',
    width: 570,
    height: 235,
    data: data,
    header: false,
    cellTrackOver: true,
    selModel: 'cell',
    defaults: {
      type: 'string',
      width: 142
    },
    events: [{
      cellclick: function(grid, o){
        renderUsersGrid(o.value, i18nMap[o.value]);
      }
    }],
    columns: [{
      index: 'c1'
    },{
      index: 'c2'
    },{
      index: 'c3'
    },{
      index: 'c4',
      width: 143
    }]
  });

})();