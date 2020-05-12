Ext.define('MyApp.view.Strudents.StudentFormController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.studentFormController',


    OnSave: function (button) {
        var store = Ext.StoreManager.lookup('StudentStore');
        var form = button.up('form').getForm();
        var StudentGrid = Ext.getCmp("StudentGrid_list");
        var store = StudentGrid.ownerGrid.getStore();

        store.insert(store.getCount(), form.getValues());
        store.commitChanges();
    },


    Onclose: function (button) {
        button.up('window').close();
        Ext.Msg.alert('Alert box', 'Student form clossed sussesfully.');
    }
});