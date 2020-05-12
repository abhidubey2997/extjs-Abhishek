Ext.define('MyApp.store.users.user', {
    extend: 'Ext.data.Store',
    model: 'MyApp.model.users.user',
    storeid: 'userStore',
    alias: 'store.users.user',
    data: [{
            id: '11',
            firstname: 'abhi',
            middlename: 'jeet',
            lastname: 'kumar',
            age: '21',
            gender: 'male'
        },
        {
            id: '12',
            firstname: 'priya',
            middlename: 'jeet',
            lastname: 'kaur',
            age: '62',
            gender: 'female'
        },
        {
            id: '13',
            firstname: 'ravi',
            middlename: 'shankar',
            lastname: 'tiwari',
            age: '25',
            gender: 'male'
        },
        {
            id: '14',
            firstname: 'sonu',
            middlename: 'kumar',
            lastname: 'yadav',
            age: '75',
            gender: 'male'
        }]
    // data: { items: [] },
    /*proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }*/
}); 
