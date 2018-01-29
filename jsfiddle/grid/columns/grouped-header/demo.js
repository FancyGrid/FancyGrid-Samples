document.addEventListener("DOMContentLoaded", function() {
var data = [
  ["3m Co", 71.72, 0.02, 0.03, "9/1 12:01am"],
  ["Alcoa Inc", 29.01, 0.42, 1.47, "9/1 12:02am"],
  ["Altria Group Inc", 83.81, 0.28, 0.34, "9/1 12:03am"],
  ["American Express Company", 52.55, 0.01, 0.02, "9/1 12:01am"],
  ["American International Group, Inc.", 64.13, 0.31, 0.49, "9/1 12:00am"],
  ["AT&T Inc.", 31.61, -0.48, -1.54, "9/1 12:03am"],
  ["Boeing Co.", 75.43, 0.53, 0.71, "9/1 12:05am"],
  ["Caterpillar Inc.", 67.27, 0.92, 1.39, "9/1 12:01am"],
  ["Citigroup, Inc.", 49.37, 0.02, 0.04, "9/1 12:00am"],
  ["E.I. du Pont de Nemours and Company", 40.48, 0.51, 1.28, "9/1 12:00am"],
  ["Exxon Mobil Corp", 68.1, -0.43, -0.64, "9/1 12:00am"],
  ["General Electric Company", 34.14, -0.08, -0.23, "9/1 12:00am"],
  ["General Motors Corporation", 30.27, 1.09, 3.74, "9/1 12:00am"],
  ["Hewlett-Packard Co.", 36.53, -0.03, -0.08, "9/1 12:00am"],
  ["Honeywell Intl Inc", 38.77, 0.05, 0.13, "9/1 12:00am"],
  ["Intel Corporation", 19.88, 0.31, 1.58, "9/1 12:00am"],
  ["International Business Machines", 81.41, 0.44, 0.54, "9/1 12:00am"],
  ["Johnson & Johnson", 64.72, 0.06, 0.09, "9/1 12:00am"],
  ["JP Morgan & Chase & Co", 45.73, 0.07, 0.15, "9/1 12:00am"],
  ["McDonald's Corporation", 36.76, 0.86, 2.4, "9/1 12:00am"],
  ["Merck & Co., Inc.", 40.96, 0.41, 1.01, "9/1 12:00am"],
  ["Microsoft Corporation", 25.84, 0.14, 0.54, "9/1 12:00am"],
  ["Pfizer Inc", 27.96, 0.4, 1.45, "9/1 12:00am"],
  ["The Coca-Cola Company", 45.07, 0.26, 0.58, "9/1 12:00am"],
  ["The Home Depot, Inc.", 34.64, 0.35, 1.02, "9/1 12:00am"],
  ["The Procter & Gamble Company", 61.91, 0.01, 0.02, "9/1 12:00am"],
  ["United Technologies Corporation", 63.26, 0.55, 0.88, "9/1 12:00am"],
  ["Verizon Communications", 35.57, 0.39, 1.11, "9/1 12:00am"],
  ["Wal-Mart Stores, Inc.", 45.45, 0.73, 1.63, "9/1 12:00am"]
];

var renderChangesFn = function(o) {
  if (o.value < 0) {
    o.style = {
      color: '#E46B67'
    };
  } else {
    o.style = {
      color: '#65AE6E'
    };
  }

  o.value = o.value + '%';

  return o;
};

new FancyGrid({
  title: {
    text: 'Grouped Header Grid',
    style: {
      'text-align': 'center'
    }
  },
  renderTo: 'container',
  width: 610,
  height: 450,
  trackOver: true,
  selModel: 'row',
  textSelection: true,
  data: {
    items: data,
    fields: ['name', 'price', 'change', 'pctChange', 'lastChange']
  },
  defaults: {
    type: 'number',
    width: 100,
    resizable: true,
    sortable: true
  },
  clicksToEdit: 1,
  columnLines: false,
  columns: [{
    title: 'Company',
    index: 'name',
    type: 'string',
    width: 200,
  }, {
    text: 'Stock Price',
    columns: [{
      title: 'Price',
      index: 'price'
    }, {
      title: 'Change',
      index: 'change',
      render: renderChangesFn
    }, {
      title: '% Change',
      index: 'pctChange',
      render: renderChangesFn
    }]
  }, {
    title: 'Last Updated',
    index: 'lastChange',
    type: 'string',
    width: 97
  }]
});

  
});
