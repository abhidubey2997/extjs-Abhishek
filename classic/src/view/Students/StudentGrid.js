Ext.define('MyApp.view.Students.StudentGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'StudentGrid',
    title: 'StudentDetails',
    //controller: 'studentController',
    id: 'StudentGrid_list',
    /*
    
    viewModel: {
        type: 'userGrid'
    },
    */

    store: {
        type: 'studentStore'
    },

    /*listeners: {
        itemclick: 'onGridItemClick'
    },*/
    columns: [{
        xtype: 'rownumberer',
    },
    {
        text: 'Id',
        dataIndex: 'id',
        editor: {
            xtype: 'numberfield',
            hideTrigger: true,
            allowBlank: false
        },
        flex: 1

    },
    {
        text: 'FirstName',
        dataIndex: 'firstname',
        editor: {
            xtype: 'textfield',
            allowBlank: false
        },
        flex: 1

    },
    {
        text: 'LastName',
        dataIndex: 'lastname',
        editor: {
            xtype: 'textfield',
            allowBlank: false
        },
        flex: 1
    },
    {
        text: 'Gender',
        dataIndex: 'gender',
        editor: {
            xtype: 'textfield',
            allowBlank: false
        },
        flex: 1
    },
    {
        text: 'Class',
        dataIndex: 'class',
        editor: {
            xtype: 'numberfield',
            hideTrigger: true,
            allowBlank: false
        },
        flex: 1
    },
    {
        text: 'Marks',
        dataIndex: 'marks',
        editor: {
            xtype: 'numberfield',
            hideTrigger: true,
            allowBlank: false
        },
        flex: 1
    }
    ],



    features: [{ ftype: 'grouping' }],
    selModel: 'rowmodel',
    plugins: {
        ptype: 'rowediting',
        clicksToEdit: 2
    },

    selModel: {
        checkOnly: false,
        injectCheckbox: 'last',
        mode: 'SIMPLE'
    },
    selType: 'checkboxmodel',



});

