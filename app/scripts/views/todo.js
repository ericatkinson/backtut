/*global backtut, Backbone, JST*/

backtut.Views = backtut.Views || {};

(function () {
    'use strict';

    backtut.Views.TodoView = Backbone.View.extend({

        tagName: 'li',
        template: JST['app/scripts/templates/todo.hbs'],
        events: {
            'click input[type="checkbox"]': 'toggle',
            'dblclick span': 'toggleEdit',
            'submit form': 'toggleEdit'
        },
        initialize: function () { /* ... */ },
        render: function () { /* ... */ },
        toggle: function () { /* ... */ },
        toggleEdit: function () { /* ... */ }

    });

})();
