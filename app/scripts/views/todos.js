/*global backtut, Backbone, JST*/

backtut.Views = backtut.Views || {};

(function () {
    'use strict';

    backtut.Views.TodosView = Backbone.View.extend({
        el: '#todo-app',
        template: JST['app/scripts/templates/todos.hbs'],
        events: { /* ... */ },
        initialize: function () { /* ... */ },
        render: function () { /* ... */ },
        createTodo: function () { /* ... */ },
        addTodoItem: function () { /* ... */ },
        addAllTodoItems: function () { /* ... */ }
    });

})();
