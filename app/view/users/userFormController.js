Ext.define('MyApp.view.users.userFormController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.usersForm',

    /*OnSubmit: function () {
        var store = this.getStore('users.user');
        //store = this.getStore();
        console.log(store);
    //console.log(store.getAt(0).get('id'));
        alert(store);
    },*/

    /*OnSubmit: function(sender,record, ){
        //var form = this.up('form').getForm();
 
        var data= this.getView().getValues();
        console.log(data);
        var store = this.getView().getStore('users.user'); 
        console.log(store);
 
        store.add(data);
       
    },*/

    OnSubmit: function (button) {
        //var form = this.up('form').getForm();
        var store = Ext.StoreManager.lookup('userStore');
        //var form = button.up('form').getForm();

        var form = button.up('form').getForm();
        var userGrid = Ext.getCmp("userGrid_list");
        var store = userGrid.ownerGrid.getStore();

        store.insert(store.getCount(), form.getValues());
        store.commitChanges();



        // var data=JSON.parse()
        // console.log(data);
        // var store = this.getView().getStore('users.user'); 
        // console.log(store);

        //store.add(form.getValues());

        //alert(form.getValues('users.user'))

    },


    closeWindow: function (button) {
        button.up('window').close();
        Ext.Msg.alert('Alert box', 'User form clossed sussesfully.');
        //alert("window Closed");
    }
});

