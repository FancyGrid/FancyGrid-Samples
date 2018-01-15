$(function() {
	
var COLORS = [
  '#cd2a27',
  '#b34442',
  '#9c5554',
  '#85605f',
  '#6e6363',
  '#616661',
  '#537557',
  '#3d8244',
  '#23912e',
  '#009e0f'
];

function getColor(value, min, max) {
  var step = (parseFloat((max - min).toFixed(4))) / COLORS.length,
    cursor = min,
    i = 0;

	for (; cursor <= max; i++) {
	  if (value >= cursor && value <= parseFloat((cursor + step).toFixed(4))) {
		return COLORS[i];
	  }
	  cursor = parseFloat((cursor + step).toFixed(4))
	}
}

function numberFormat(value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

var gridMapData = [
  ['ISL','   ','   ','NOR','SWE','FIN','   ','   ','   ','   '],
  ['   ','   ','   ','   ','DNK','   ','EST','   ','   ','   '],
  ['IRL','GBR','   ','NLD','DEU','POL','LTU','LVA','   ','   '],
  ['   ','   ','   ','BEL','CHE','CZE','BLR','RUS','   ','   '],
  ['   ','   ','FRA','LUX','AUT','SVK','HGR','UKR','   ','   '],
  ['PRT','ESP','   ','ITA','SLO','HRV','ROU','   ','GEO','AZE'],
  ['   ','   ','   ','   ','   ','SRB','BGR','TUR','ARM','   '],
  ['   ','   ','MLT','   ','   ','GRC','   ','CYP','   ','   ']
];

var mapInfo = {
  EST: {
    group: 0,
    name: 'Estonia',
    capital: 'Tallinn',
	sales: 20349
  },
  POL: {
    group: 0,
    name: 'Poland',
    capital: 'Warsaw',
	sales: 354972
  },
  LTU: {
    group: 0,
    name: 'Lithuania',
	sales: 17085,
    capital: 'Vilnius'
  },
  LVA: {
    group: 0,
    name: 'Latvia',
	sales: 13765,
    capital: 'Riga'
  },
  BLR: {
    group: 0,
    name: 'Belarus',
	sales: 0,
    capital: 'Minsk'
  },
  RUS: {
    group: 0,
    name: 'Russia',
	sales: 0,
    capital: 'Moscow'
  },
  UKR: {
    group: 0,
    name: 'Ukraine',
	sales: 0,
    capital: 'Kiev'
  },
  CZE: {
    group: 0,
    name: 'Czech Republic',
	sales: 230857,
    capital: 'Praga'
  },
  HGR: {
    group: 0,
    name: 'Hungary',
	sales: 77174,
    capital: 'Budapest'
  },
  SLO: {
    group: 0,
    name: 'Slovenia',
	sales: 59450,
    capital: 'Ljubljana'
  },
  SVK: {
    group: 0,
    name: 'Slovakia',
	sales: 77968,
    capital: 'Bratislava'
  },
  HRV: {
    group: 0,
    name: 'Croatia',
	sales: 34821,
    capital: 'Zagreb'
  },
  SRB: {
    group: 0,
    name: 'Serbia',
	sales: 0,
    capital: 'Belgrade'
  },
  BGR: {
    group: 0,
    name: 'Bulgaria',
	sales: 24293,
    capital: 'Sofia'
  },
  ROU: {
    group: 0,
    name: 'Romania',
	sales: 81162,
    capital: 'Bucharest'
  },
  TUR: {
    group: 0,
    name: 'Turkey',
	sales: 0,
    capital: 'Ankara'
  },
  ARM: {
    group: 0,
    name: 'Armenia',
	sales: 0,
    capital: 'Yerevan'
  },
  GEO: {
    group: 0,
    name: 'Georgia',
	sales: 0,
    capital: 'Tbilisi'
  },
  AZE: {
    group: 0,
    name: 'Azerbaijan',
	sales: 0,
    capital: 'Baku'
  },

  ISL: {
    group: 1,
    name: 'Iceland',
	sales: 14029,
    capital: 'Reykjavik'
  },
  NOR: {
    group: 1,
    name: 'Norway',
	sales: 150686,
    capital: 'Oslo'
  },
  SWE: {
    group: 1,
    name: 'Sweden',
	sales: 345108,
    capital: 'Stockholm'
  },
  FIN: {
    group: 1,
    name: 'Finland',
	sales: 108807,
    capital: 'Helsinki'
  },
  DNK: {
    group: 1,
    name: 'Denmark',
	sales: 207548,
    capital: 'Copenhagen'
  },
  
  IRL: {
    group: 2,
    name: 'Ireland',
	sales: 124848,
    capital: 'Dublin'
  },
  GBR: {
    group: 2,
    name: 'United Kindom',
	sales: 2632503,
    capital: 'London'
  },
  BEL: {
    group: 2,
    name: 'Belgium',
	sales: 501066,
    capital: 'Brussels'
  },
  FRA: {
    group: 2,
    name: 'France',
	sales: 1917235,
    capital: 'Paris'
  },
  LUX: {
    group: 2,
    name: 'Luxembourg',
	sales: 46473,
    capital: 'Luxembourg'
  },
  NLD: {
    group: 2,
    name: 'Netherlands',
	sales: 449732,
    capital: 'Amsterdam'
  },
  DEU: {
    group: 2,
    name: 'Germany',
	sales: 3206042,
    capital: 'Berlin'
  },
  AUT: {
    group: 2,
    name: 'Austria',
	sales: 308555,
    capital: 'Vienna'
  },
  CHE: {
    group: 2,
    name: 'Switzerland',
	sales: 323783,
    capital: 'Bern'
  },
  
  PRT: {
    group: 3,
    name: 'Portugal',
	sales: 178455,
    capital: 'Lisbon'
  },
  ESP: {
    group: 3,
    name: 'Spain',
	sales: 1035232,
    capital: 'Madrid'
  },
  ITA: {
    group: 3,
    name: 'Italy',
	sales: 1574142,
    capital: 'Rome'
  },
  MLT: {
    group: 3,
    name: 'Malta',
	sales: 0,
    capital: 'Valletta'
  },
  GRC: {
    group: 3,
    name: 'Greece',
	sales: 75805,
    capital: 'Athens'
  },
  CYP: {
    group: 3,
    name: 'Cyprus',
	sales: 10344,
    capital: 'Nicosia'
  }
};
  

new FancyGrid({
  title: {
    text: 'Europe Car Sales for 2015',
	style: {
      'text-align': 'center'
    }
  },
  panelBodyBorders: [0, 0, 0, 0],
  cellHeight: 50,
  renderTo: 'container',
  width: 'fit',
  height: 'fit',
  header: false,
  columnLines: false,
  striped: false,
  data: {
    items: gridMapData,
    fields: ['c1', 'c2','c3','c4','c5','c6','c7','c8','c9','c10']
  },
  defaults: {
    type: 'string',
    width: 50,
    cellTip: function(o){
      if(o.value === '   '){
        return false;
      }
      
      var country = mapInfo[o.value];
      
      if(country){
	    var value = numberFormat(country.sales);
		if(value == 0){
		  value = 'No Data';
		}
	  
        return [
          'Country - ' + country.name + '',
          'Sold cars per year - ' + value + ''
        ].join("<br>");
      }
    },
    render: function(o){
      if(o.value === '   '){
        o.style = {
          //'background-color': '#F3F3F3'
          'background-color': '#f9f9f9'
        };
      
        return o;
      }
      
      var country = mapInfo[o.value];
	  var color = '';
      
      if(country){
	    if(country.sales === 0){
		  var color = 'grey';
		}
	    else{
          var color = getColor(country.sales, 10000, 3300000);
		}
      }
      
      o.style = {
        'background-color': color,
        border: color 
      };
      
      o.cls = 'data';
    
      return o;
    }
  },
  columns: [{
	index: 'c1'
  },{
    index: 'c2'
  },{
    index: 'c3'
  },{
    index: 'c4'
  },{
    index: 'c5'
  },{
    index: 'c6'
  },{
    index: 'c7'
  },{
    index: 'c8'
  },{
    index: 'c9'
  },{
    index: 'c10'
  }]
});
	
});