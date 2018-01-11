
var data = [{
  name: 'North America',
  type: 'Territory',
  expanded: true,
  child: [{
    name: 'USA',
	type: 'Country',
	population: 325365189,
	child: [{
	  type: 'City',
      name: 'New York',
	  population: 8175133,
      leaf: true
	},{
	  type: 'City',
      name: 'Washington',
	  population: 681170,
      leaf: true
	}]
  },{
    name: 'Canada',
	type: 'Country',
	population: 35151728,
	child: [{
	  type: 'City',
      name: 'Ottawa',
	  population: 934243,
      leaf: true
	},{
	  type: 'City',
      name: 'Toronto',
	  population: 2731571,
      leaf: true
	}]
  },{
    name: 'Mexico',
	type: 'Country',
	population: 123675325,
	child: [{
	  type: 'City',
	  population: 8918653,
	  leaf: true,
	  name: 'Mexico'
	}]
  }]
},{
  name: 'South America',
  type: 'Territory',
  expanded: true,
  child: [{
    name: 'Brazil',
	type: 'Country',
    population: 208385000,
	child: [{
	  name: 'Brasilia',
	  type: 'City',
	  population: 2977216,
	  leaf: true
	},{
	  name: 'Sao Paulo',
	  type: 'City',
	  population: 12038175,
	  leaf: true
	}]
  },{
    name: 'Argentina',
	type: 'Country',
    population: 43847430,
	child: [{
	  name: 'Buenos Aires',
	  type: 'City',
	  population: 2890151,
	  leaf: true
	}]
  },{
    name: 'Chile',
	type: 'Country',
    population: 18006407,
	child: [{
	  name: 'Santiago',
	  type: 'City',
	  population: 7314176,
	  leaf: true
	}]
  }]
},{
  name: 'Europe',
  type: 'Territory',
  expanded: true,
  child: [{
     name: 'UK',
	 population: 65648000,
	 type: 'Country',
	 child: [{
	   type: 'City',
	   leaf: true,
	   population: 8787892,
	   name: 'London'
	 }]
  },{
     name: 'Germany',
	 population: 82349400,
	 type: 'Country',
	 child: [{
	   name: 'Berlin',
	   population: 3671000,
	   type: 'City',
	   leaf: true
	 }]
  },{
     name: 'France',
	 population:  67158000,
	 type: 'Country',
	 child: [{
	   name: 'Paris',
	   population: 2229621,
	   type: 'City',
	   leaf: true
	 }]
  },{
     name: 'Spain',
	 population:  46354321,
	 type: 'Country',
	 child: [{
	   name: 'Madrid',
	   population: 3141991,
	   type: 'City',
	   leaf: true
	 }]
  }]
}];

$(function() {

  new FancyGrid({
	title: 'Tree Grid: Region - Country - City',
	renderTo: 'container',
	width: 600,
	height: 600,
	data: {
	  items: data,
	  fields: ['name', 'type', 'population']
	},
	selModel: 'rows',
	trackOver: true,
	theme: 'gray',
	defaults: {
	  type: 'string',
	  sortable: true,
	  resizable: true
	},
	columns: [{
	  type: 'tree',
	  title: 'Name',
	  width: 200,
	  index: 'name'
	},{
	  index: 'type',
	  title: 'Territory',
	  width: 100
	},{
	  index: 'population',
	  title: 'Population(mlns)',
	  format: 'number',
	  type: 'number',
	  width: 120
	}]
  });

});