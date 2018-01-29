document.addEventListener("DOMContentLoaded", function() {

  function changeFn(){
    var values = form.get();
    
    if(values.login && values.password){
      form.buttons[1].enable();
    }
    else{
      form.buttons[1].disable();
    }
  }

  var form = new FancyForm({
    renderTo: 'container',
    title: 'Login',
    width: 290,
    height: 250,
    items: [{
      label: 'Login',
      type: 'string',
      name: 'login',
      emptyText: 'Username or email address',
      events: [{
        change: changeFn
      }]
    },{
      label: 'Password',
      type: 'password',
      emptyText: 'Password',
      name: 'password',
      events: [{
        change: changeFn
      }]
    },{
      inputLabel: 'Remember me?',
      type: 'checkbox',
      name: 'remember',
      value: true
    }],
    buttons: ['side', {
      text: 'Clear',
      handler: function(){
        this.clear();
      }
    },{
      text: 'Login',
      handler: function(){
        
      }
    }]
  });

});