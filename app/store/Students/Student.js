Ext.define('MyApp.store.Students.Student', {
    extend: 'Ext.data.Store',
    model: 'MyApp.model.Students.Student',
    storeid: 'StudentStore',
    alias: 'store.studentStore',
    groupField: 'class',
    data: [{
        id: '11',
        firstname: 'abhinav',
        lastname: 'kumar',
        gender: 'male',
        class: '2',
        marks: '19'
    },
    {
        id: '12',
        firstname: 'preet',
        lastname: 'kaur',
        gender: 'female',
        class: '5',
        marks: '21'

    },
    {
        id: '13',
        firstname: 'ravi',
        lastname: 'tiwari',
        gender: 'male',
        class: '5',
        marks: '24'
    },
    {
        id: '14',
        firstname: 'sonu',
        lastname: 'yadav',
        gender: 'male',
        class: '2',
        marks: '20'
    },
    {
        id: '15',
        firstname: 'riya',
        lastname: 'mishra',
        gender: 'female',
        class: '1',
        marks: '15'
    },
    {
        id: '16',
        firstname: 'rishabh',
        lastname: 'tyagi',
        gender: 'male',
        class: '4',
        marks: '21'
    },
    {
        id: '17',
        firstname: 'soni',
        lastname: 'kumari',
        gender: 'female',
        class: '4',
        marks: '18'
    },
    {
        id: '18',
        firstname: 'arnav',
        lastname: 'pandit',
        gender: 'male',
        class: '1',
        marks: '20'
    }]
}); 
