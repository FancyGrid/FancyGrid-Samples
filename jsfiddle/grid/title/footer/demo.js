var data = [{
  rank: 1,
  flag: 'http://fancygrid.com/dashboards/iots/img/SouthKorea.png',
  country: 'South Korea',
  online: 37.9
}, {
  rank: 2,
  flag: 'http://fancygrid.com/dashboards/iots/img/Denmark.png',
  country: 'Denmark',
  online: 32.7
}, {
  rank: 3,
  flag: 'http://fancygrid.com/dashboards/iots/img/Switzerland.png',
  country: 'Switzerland',
  online: 29.0
}, {
  rank: 4,
  flag: 'http://fancygrid.com/dashboards/iots/img/USA.png',
  country: 'United States',
  online: 24.9
}, {
  rank: 5,
  flag: 'http://fancygrid.com/dashboards/iots/img/Netherlands.png',
  country: 'Netherlands',
  online: 24.7
}, {
  rank: 6,
  flag: 'http://fancygrid.com/dashboards/iots/img/Germany.png',
  country: 'Germany',
  online: 22.4
}, {
  rank: 7,
  flag: 'http://fancygrid.com/dashboards/iots/img/Sweden.png',
  country: 'Sweden',
  online: 21.9
}, {
  rank: 8,
  flag: 'http://fancygrid.com/dashboards/iots/img/Spain.png',
  country: 'Spain',
  online: 19.9
}, {
  rank: 9,
  flag: 'http://fancygrid.com/dashboards/iots/img/France.png',
  country: 'France',
  online: 17.6
}, {
  rank: 10,
  flag: 'http://fancygrid.com/dashboards/iots/img/Portugal.png',
  country: 'Portugal',
  online: 16.2
}, {
  rank: 11,
  flag: 'http://fancygrid.com/dashboards/iots/img/Belgium.png',
  country: 'Belgium',
  online: 15.6
}, {
  rank: 12,
  flag: 'http://fancygrid.com/dashboards/iots/img/UK.png',
  country: 'United Kingdom',
  online: 13.0
}, {
  rank: 13,
  flag: 'http://fancygrid.com/dashboards/iots/img/Canada.png',
  country: 'Canada',
  online: 11.6
}, {
  rank: 14,
  flag: 'http://fancygrid.com/dashboards/iots/img/Italy.png',
  country: 'Italy',
  online: 10.2
}, {
  rank: 15,
  flag: 'http://fancygrid.com/dashboards/iots/img/Brazil.png',
  country: 'Brazil',
  online: 9.2
}, {
  rank: 16,
  flag: 'http://fancygrid.com/dashboards/iots/img/Japan.png',
  country: 'Japan',
  online: 8.2
}, {
  rank: 17,
  flag: 'http://fancygrid.com/dashboards/iots/img/Australia.png',
  country: 'Australia',
  online: 7.9
}, {
  rank: 18,
  flag: 'http://fancygrid.com/dashboards/iots/img/Mexico.png',
  country: 'Mexico',
  online: 6.8
}, {
  rank: 19,
  flag: 'http://fancygrid.com/dashboards/iots/img/Poland.png',
  country: 'Poland',
  online: 6.3
}, {
  rank: 20,
  flag: 'http://fancygrid.com/dashboards/iots/img/Colombia.png',
  country: 'Colombia',
  online: 6.1
}, {
  rank: 21,
  flag: 'http://fancygrid.com/dashboards/iots/img/Russia.png',
  country: 'Russia',
  online: 4.9
}, {
  rank: 22,
  flag: 'http://fancygrid.com/dashboards/iots/img/Turkey.png',
  country: 'Turkey',
  online: 2.3
}, {
  rank: 23,
  flag: 'http://fancygrid.com/dashboards/iots/img/India.png',
  country: 'India',
  online: 0.6
}];

$(function() {

  new FancyGrid({
    renderTo: 'container',
    title: 'List of countries by IoT devices online',
    width: 590,
    height: 400,
    data: data,
    trackOver: true,
    selModel: 'row',
    titleHeight: 33,
    footer: {
      status: '<span style="position: relative;top: 3px;">*</span> - Devices online per 100 inhabitants in 2015',
      source: {
        text: 'OECD',
        link: 'oecd.org'
      }
    },
    defaults: {
      type: 'string',
      width: 100,
      sortable: true,
      resizable: true
    },
    columns: [{
      index: 'rank',
      title: 'Rank',
      locked: true,
      align: 'center',
      cellAlign: 'center',
      cls: 'rank-cls',
      width: 55,
      type: 'number'
    }, {
      index: 'flag',
      width: 40,
      type: 'image',
      cls: 'flag'
    }, {
      index: 'country',
      title: 'Country'
    }, {
      index: 'online',
      title: 'Online *',
      type: 'number'
    }, {
      index: 'online',
      type: 'progressbar',
      width: 290,
      title: 'Relative size',
      sparkConfig: {
        percents: false
      }
    }]
  });

});
