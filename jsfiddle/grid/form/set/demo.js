$(function() {

  var stateData = [{
    index: 0,
    key: "AL",
    state: "Alabama"
  }, {
    index: 1,
    key: "AK",
    state: "Alaska"
  }, {
    index: 2,
    key: "AZ",
    state: "Arizona"
  }, {
    index: 3,
    key: "AR",
    state: "Arkansas"
  }, {
    index: 4,
    key: "CA",
    state: "California"
  }, {
    index: 5,
    key: "CO",
    state: "Colorado"
  }, {
    index: 6,
    key: "CT",
    state: "Connecticut"
  }, {
    index: 7,
    key: "DE",
    state: "Delaware"
  }, {
    index: 8,
    key: "DC",
    state: "District of Columbia"
  }, {
    index: 9,
    key: "FL",
    state: "Florida"
  }, {
    index: 10,
    key: "GA",
    state: "Georgia"
  }, {
    index: 11,
    key: "HI",
    state: "Hawaii"
  }, {
    index: 12,
    key: "ID",
    state: "Idaho"
  }, {
    index: 13,
    key: "IL",
    state: "Illinois"
  }, {
    index: 14,
    key: "IN",
    state: "Indiana"
  }, {
    index: 15,
    key: "IA",
    state: "Iowa"
  }, {
    index: 16,
    key: "KS",
    state: "Kansas"
  }, {
    index: 17,
    key: "KY",
    state: "Kentucky"
  }, {
    index: 18,
    key: "LA",
    state: "Louisiana"
  }, {
    index: 19,
    key: "ME",
    state: "Maine"
  }, {
    index: 20,
    key: "MD",
    state: "Maryland"
  }, {
    index: 21,
    key: "MA",
    state: "Massachusetts"
  }, {
    index: 22,
    key: "MI",
    state: "Michigan"
  }, {
    index: 23,
    key: "MN",
    state: "Minnesota"
  }, {
    index: 24,
    key: "MS",
    state: "Mississippi"
  }, {
    index: 25,
    key: "MO",
    state: "Missouri"
  }, {
    index: 26,
    key: "MT",
    state: "Montana"
  }, {
    index: 27,
    key: "NE",
    state: "Nebraska"
  }, {
    index: 28,
    key: "NV",
    state: "Nevada"
  }, {
    index: 29,
    key: "NH",
    state: "New Hampshire"
  }, {
    index: 30,
    key: "NJ",
    state: "New Jersey"
  }, {
    index: 31,
    key: "NM",
    state: "New Mexico"
  }, {
    index: 32,
    key: "NY",
    state: "New York"
  }, {
    index: 33,
    key: "NC",
    state: "North Carolina"
  }, {
    index: 34,
    key: "ND",
    state: "North Dakota"
  }, {
    index: 35,
    key: "OH",
    state: "Ohio"
  }, {
    index: 36,
    key: "OK",
    state: "Oklahoma"
  }, {
    index: 37,
    key: "OR",
    state: "Oregon"
  }, {
    index: 38,
    key: "PA",
    state: "Pennsylvania"
  }, {
    index: 39,
    key: "RI",
    state: "Rhode Island"
  }, {
    index: 40,
    key: "SC",
    state: "South Carolina"
  }, {
    index: 41,
    key: "SD",
    state: "South Dakota"
  }, {
    index: 42,
    key: "TN",
    state: "Tennessee"
  }, {
    index: 43,
    key: "TX",
    state: "Texas"
  }, {
    index: 44,
    key: "UT",
    state: "Utah"
  }, {
    index: 45,
    key: "VT",
    state: "Vermont"
  }, {
    index: 46,
    key: "VA",
    state: "Virginia"
  }, {
    index: 47,
    key: "WA",
    state: "Washington"
  }, {
    index: 48,
    key: "WV",
    state: "West Virginia"
  }, {
    index: 49,
    key: "WI",
    state: "Wisconsin"
  }, {
    index: 50,
    key: "WY",
    state: "Wyoming"
  }];

  new FancyForm({
    renderTo: 'container',
    title: 'Register',
    width: 420,
    height: 500,
    items: [{
      type: 'set',
      label: 'User Info',
      checkbox: true,
      items: [{
        type: 'string',
        label: 'Login',
        emptyText: 'Login',
        name: 'login'
      }, {
        type: 'password',
        label: 'Password',
        emptyText: 'Password',
        name: 'password'
      }]
    }, {
      type: 'set',
      label: 'Contact Information',
      items: [{
        type: 'string',
        label: 'First Name',
        emptyText: 'First Name',
        name: 'name'
      }, {
        type: 'string',
        label: 'Last Name',
        emptyText: 'Last Name',
        name: 'surname'
      }, {
        type: 'string',
        label: 'Company',
        emptyText: '',
        name: 'company'
      }, {
        type: 'string',
        label: 'Email',
        emptyText: '',
        name: 'email'
      }, {
        type: 'combo',
        label: 'State',
        emptyText: '',
        name: 'state',
        data: stateData,
        displayKey: 'state',
        valueKey: 'key'
      }, {
        type: 'date',
        label: 'Birthday',      
        name: 'birthday'
      }]
    }],
    buttons: ['side', {
      text: 'Clear',
      handler: function() {
        this.clear();
      }
    }, {
      text: 'Register',
      handler: function() {
        this.get();
      }
    }]
  });

});