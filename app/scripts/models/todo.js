/*global backtut, Backbone*/

backtut.Models = backtut.Models || {};

(function () {
    'use strict';

    backtut.Models.TodoModel = Backbone.Model.extend({

        defaults: {
            title: '',
            completed: false
        },

        toggle: function () {
            this.save({
                completed: !this.get('completed')
            });
        }
    });

})();
