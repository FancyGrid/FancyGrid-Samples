/*
  This sample will not work on jsfiddle because server data.
*/

$(function() {
  new FancyGrid({
    width: 700,
    height: 500,
    renderTo: 'container',
    data: {
      remoteSort: true,
      remoteFilter: true,
      proxy: {
        url: '/ajax/filter.php'
      }
    },
    selModel: 'row',
    trackOver: true,
    defaults: {
      type: 'string',
      width: 100,
      sortable: true,
      resizable: true
    },
    columns: [{
      index: 'id',
      title: 'Id',
      locked: true,
      width: 50,
      type: 'number'
    }, {
      index: 'company',
      title: 'Company',
      locked: true,
      filter: {
        header: true,
        headerNote: true
      }
    }, {
      index: 'name',
      title: 'Name',
      filter: {
        header: true,
        headerNote: true
      }
    }, {
      index: 'surname',
      title: 'Sur Name',
      filter: {
        header: true,
        headerNote: true
      }
    }, {
      index: 'age',
	  width: 60,
      title: 'Age',
      type: 'number',
      filter: {
        header: true,
        headerNote: true
      }
    }, {
      index: 'knownledge',
      title: 'Knownledge',
      rightLocked: true,
      width: 100,
      filter: {
        header: true,
        headerNote: true
      }
    }, {
      index: 'position',
      title: 'Position',
      rightLocked: true,
      width: 120
    }]
  });
});