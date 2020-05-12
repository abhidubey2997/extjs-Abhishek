/**
 * This view is an example list of people.
 */
Ext.define('MyApp.view.users.userGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'userGrid',
    title: 'UserDetails',
    controller: 'Grid',
    id:'userGrid_list',
    /*requires: [
        'MyApp.store.users.user',
    ],*/
    
    viewModel: {
        type: 'userGrid'
    },
    /*bind: {
            store: '{users.user}'
        },*/

    store: {
        type: 'users.user'
    },

    listeners: {
        itemclick: 'onGridItemClick'
    },
    
    columns: [{
        xtype: 'rownumberer',
    },
    {
        text: 'Id',
        dataIndex: 'id',
        flex: 1
    },
    {
        text: 'FirstName',
        dataIndex: 'firstname',
        flex: 1

    },
    {
        text: 'MiddleName',
        dataIndex: 'middlename',
        flex: 1
    },
    {
        text: 'LastName',
        dataIndex: 'lastname',
        flex: 1
    },
    {
        text: 'Age',
        dataIndex: 'age',
        flex: 1
    },
    {
        text: 'Gender',
        dataIndex: 'gender',
        flex: 1
    }
    ],

    viewConfig: {
        stripeRows: false,
        getRowClass: function (record) {
            return record.get('age') > 50 ? 'senior-row' : 'young-row';
        }
    },



});

