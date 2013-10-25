/*global backtut, Backbone*/

backtut.Collections = backtut.Collections || {};

(function () {
    'use strict';

    backtut.Collections.TodosCollection = Backbone.Collection.extend({

        localStorage: new Backbone.LocalStorage('backbone-generator-todos'),

        initialize: function (){
            this.model = backtut.Models.TodoModel;
        }

    });

})();
