/*global backtut, $*/


window.backtut = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        console.log('Hello from Backbone!');
        new this.Views.TodosView({
            collection: new this.Collections.TodosCollection()
        });
    }
};

$(document).ready(function () {
    'use strict';
    backtut.init();
});
