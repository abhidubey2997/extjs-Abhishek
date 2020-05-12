Ext.define('MyApp.view.users.recordForm', {
    extend: 'Ext.window.Window',
    closable: true,
    width: 320,
    //Define xtype
    // xtype: 'userform',
    alias: 'widget.recordform',
    model: true,
    autoDestroy: true,
    floating: true,
    viewModel: {
        type: 'recordFormvm'
    },

title: 'Record Form',

    layout: {
        align: 'stretch',
        type: 'vbox'
    },


    defaults: {
        xtype: 'textfield',
        margin: 10,
        labelAlign: 'top'
    },


    items: [{
        fieldLabel: 'Id',
        bind: {
            value: '{userData.id}'
        },
        name: 'id'
    }, {
        fieldLabel: 'FirstName',
        bind: {
            value: '{userData.firstname}'
        },
        name: 'firstname'

    }, {
        fieldLabel: 'MiddleName',
        bind: {
            value: '{userData.middlename}'
        },
        name: 'middlename'

    }, {
        fieldLabel: 'LastName',
        bind: {
            value: '{userData.lastname}'
        },
        name: 'lastname'

    }, {
        fieldLabel: 'Age',
        bind: {
            value: '{userData.age}'
        },
        name: 'age'

    }, {
        fieldLabel: 'Gender',
        bind: {
            value: '{userData.gender}'
        },
        name: 'gender'

    }],
});