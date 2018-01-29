/*
  This sample will not work on jsfiddle because server data.
*/

document.addEventListener("DOMContentLoaded", function() {

new FancyGrid({
  renderTo: 'container',
  title: 'CRUD',
  width: 700,
  height: 400,
  theme: 'blue',
  trackOver: true,
  selModel: 'rows',
  data: {
    proxy: {
      api: {
        create: '/ajax/new.php',
        read: '/ajax/load.php',
        update: '/ajax/update.php',
        destroy: '/ajax/destroy_action.php'
      }
    }
  },
  defaults: {
    type: 'string',
    width: 100,
    editable: true,
    sortable: true,
    resizable: true,
	ellipsis: true
  },
  paging: true,
  clicksToEdit: 1,
  tbar: [{
    type: 'button',
    text: 'Add',
    action: 'add',
    
  },{
    type: 'button',
    text: 'Delete',
    action: 'remove'
  }],
  columns: [{
    index: 'id',
    locked: true,
    title: 'ID',
    type: 'number',
    width: 40,
    editable: false,
    resizable: false
  },{
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
    type: 'action',
    width: 65,
    items: [{
      text: 'Delete',
      cls: 'action-column-remove',
      action: 'remove'
    }]
  },{
    index: 'position',
    locked: true,
    title: 'Position',
    width: 150
  }]
});

});
