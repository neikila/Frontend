define([
    'backbone',
    'tmpl/login'
], function(
    Backbone,
    tmpl
){

    var Login = Backbone.View.extend({
        el: $("#page"),
        template: tmpl,
        events: { 
                  "change input:password": "chekLogin",
                  "change input:text": "chekLogin",                    
        },
        initialize: function () {
            // this.listenTo(this.collection, "change", this.render);
        },
        render: function () {
            this.$el.html(this.template(this.attributes));
            return this;
        },
        show: function () {
            // TODO
        },
        hide: function () {
            // TODO
        },
        chekLogin: function () {

            var mail = $(this.el).find("#email").val()
            var mail_pattern=/[0-9a-z_]+@[0-9a-z_]+\.[a-z]{2,5}/i; 
            var isItCorrectlyMail=mail_pattern.test(mail);

            var password = $(this.el).find("input:password").val();
            var password_pattern = /[0-9a-z]+/i;
            var isItCorrectlyPassword = password_pattern.test(password);

            var myLogin = $(this.el).find("#login").val()
            var myLogin_pattern=/[0-9a-z]+/i; 
            var isItCorrectlyLogin=myLogin_pattern.test(myLogin);


            if (isItCorrectlyPassword && isItCorrectlyMail && isItCorrectlyLogin) {
                $(this.el).find('input[type=submit]').prop('disabled', false); 
            } 
            else {
                $(this.el).find('input[type=submit]').prop('disabled', true);
            } 
            
            if (isItCorrectlyPassword) {
                $(this.el).find(".label__password").css({'color' : "#FFF"});
            }
            else {
                $(this.el).find(".label__password").css({'color' : "#FF0000"});
            }

            if (isItCorrectlyLogin) {
                $(this.el).find(".label__login").css({'color' : "#FFF"});
            }
            else {
                $(this.el).find(".label__login").css({'color' : "#FF0000"});
            }

            if (isItCorrectlyMail) {
                $(this.el).find(".label__email").css({'color' : "#FFF"});
            }
            else {
                $(this.el).find(".label__email").css({'color' : "#FF0000"});
            }
        }

    });

    return new Login();
});