/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'MyApp.view.main.MainController',
        'MyApp.view.main.MainModel',
        'MyApp.view.main.List',


        'MyApp.view.users.userFormController',
        'MyApp.view.users.usersFormWindow',
        'MyApp.view.users.userGridController',
        'MyApp.view.users.userGridModel',
        'MyApp.view.users.userGrid',


        'MyApp.view.Students.StudentGrid',
        'MyApp.view.Students.StudentForm'
    ],

    //controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title: 'Home',
        iconCls: 'fa-home',
        // The following grid shares a store with the classic version's grid as well!
        items: [{
            xtype: 'mainlist'
        }]
    }, {
        title: 'Users',
        iconCls: 'fa-user',
        items: [{
            xtype: 'button',
            x: 1000,
            //y: 10,
            //html: 'Positioned at x:1000, y:10',
            text: 'Create User',

            handler: function () {
                main = Ext.create('MyApp.view.users.usersFormWindow');
                main.show()
            }
        },

            {
                xtype: 'userGrid'

            }
        ]

    },
    {
        title: 'Student',
        iconCls: 'fa-user',
        // The following grid shares a store with the classic version's grid as well!
        items: [{
            xtype: 'button',
            text: 'addStudent',
            x: 1000,
            handler: function () {
                main = Ext.create('MyApp.view.Students.StudentForm');
                main.show()
            }
        },
        {
            xtype: 'StudentGrid'
        }]
    }]
});
