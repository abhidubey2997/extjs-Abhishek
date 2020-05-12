
Ext.define('MyApp.view.users.userGridModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.userGrid',

    stores: {
        userstore: {
            type:'users.user'
            
        }
    }
});

