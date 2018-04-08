'use strict';
(function ($) {
    $.fn.extend({
        SplitMoney : function (options, arg) {
            if (options && typeof (options) == 'object') {
                options = $.extend({}, $.SplitMoney.defaults, options);
            }
            this.each(function () {
                new $.SplitMoney(this, options, arg);
            });
            return;
        }
    });
    $.SplitMoney = function (elem, options, arg) {
        $(elem).on("keyup",function (event){
            if(event.which >=37 && event.which <= 40) return;
            $(elem).val(function (index,value){
                return value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            });
        })
    };
}(jQuery));

/*
module.exports.SpliterFunction = function(number) {
    return number.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
*/