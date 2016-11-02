Ext.onReady(function() {
    MODx.load({ xtype: 'doodles-page-home'});
    Ext.MessageBox.alert('Мой заголовок','Модель DOM готова...');
});
Doodles.page.Home = function(config) {
    config = config || {};
    Ext.applyIf(config,{
        components: [{
            xtype: 'doodles-panel-home'
            ,renderTo: 'doodles-panel-home-div'
        }]
    });
    Doodles.page.Home.superclass.constructor.call(this,config);
};
Ext.extend(Doodles.page.Home,MODx.Component);
Ext.reg('doodles-page-home',Doodles.page.Home);