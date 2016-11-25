/*
  This sample does not work in jsfiddle because server data.
*/

$(function() {
 new FancyGrid({
  title: 'Paging',
  renderTo: 'container',
  width: 700,
  height: 400,
  data: {
    proxy: {
      url: '/ajax/paging.php',
      reader: {
        root: 'items'
      }
    }
  },
  defaults: {
    type: 'string',
    width: 100,
    resizable: true,
    sortable: true
  },
  paging: true,
  columns: [{
    index: 'company',
    locked: true,
    title: 'Company'
  },{
    index: 'name',
    title: 'Name'
  },{
    index: 'surname',
    title: 'Sur Name'
  },{
    index: 'age',
	width: 60,
    title: 'Age',
    type: 'number'
  },{
    index: 'position',
	ellipsis: true,
    locked: true,
    title: 'Position',
    width: 150
  }]
});

});
