Ext.define('MyApp.view.Students.StudentForm', {
    extend: 'Ext.window.Window',

    //alias: 'Students.StudentForm',


    controller: 'studentFormController',
    title: 'StudentForm',
    height: 450,
    width: 300,
    bodyPadding: 10,
    defaultType: 'textfield',
    items: {
        xtype: 'form',

        items: [{
            xtype: 'numberfield',
            anchor: '100%',
            name: 'id',
            fieldLabel: 'Id',
            allowBlank: false,
            minLength: '2',
        },
        {
            xtype: 'textfield',
            fieldLabel: 'FirstName',
            name: 'firstname',
            allowBlank: false,
            minLength: '3'

        },
        {
            xtype: 'textfield',
            fieldLabel: 'LastName',
            name: 'lastname',
            allowBlank: false,
            minLength: '3'

        },
        {
            xtype: 'radiogroup',
            fieldLabel: 'Gender',
            name: 'gender',
            defaultType: 'radiofield',
            columns: 1,
            verticale: false,
            allowBlank: false,
            items: [
                {
                    boxLabel: 'Male',
                    inputValue: 'male',
                    id: 'male'
                },
                {
                    boxLabel: 'Female',
                    inputValue: 'female',
                    id: 'female'
                },
                {
                    boxLabel: 'Others',
                    inputValue: 'others',
                    id: 'others'
                }
            ]
        },
        {
            xtype: 'combo',
            fieldLabel: 'Class',
            name: 'class',
            //valueField: 'StudentClass',
            queryMode: 'local',
            store: ['1st', '2nd', '3rd', '4th', '5th'],
            // displayField: 'class',
            autoSelect: true,
            forceSelection: true,
            allowBlank: false,

        },
        {
            xtype: 'numberfield',
            fieldLabel: 'Marks',
            name: 'marks',
            allowBlank: false,
            hideTrigger: true,
            keyNavEnabled: false,
            mouseWheelEnabled: true,
            minValue: '0'
        }

        ],

        //xtype: 'button', 
        buttons: [

            {
                text: 'save',
                handler: 'OnSave'
            },

            {

                text: 'Close',
                handler: 'Onclose'


            }
        ]
    }



});