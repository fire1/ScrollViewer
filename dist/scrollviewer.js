/**
 *
 */

(function ($) {

    $.fn.scrollViewer = function (options) {

        // This is the easiest way to have default options.
        var opt = $.extend({
            // These are the defaults.
            animationSpeed: 800,
            delayTime: 2600,

        }, options);

        var hashNavigation = function (url) {
            var match = url.match(/#.*[?&]locale=([^&]+)(&|$)/);
            return (match ? match[1] : "");
        };

        var th_ = this;
        var $locate = hashNavigation(window.location.href);
        if ($locate) {
            var $viewThis = $('#' + $locate);
            $('html,body').animate({
                scrollTop: $viewThis.offset().top
            }, opt.animationSpeed / 2);

            $viewThis.animate({opacity: 1}, 400);
            // Support fro tw bootstrap js
            $viewThis.find('.collapse').addClass('in');

        }


        return th_.css({opacity: 0.1}).delay(2600).animate({opacity: 1}, opt.animationSpeed / 2);

    };

}(jQuery));