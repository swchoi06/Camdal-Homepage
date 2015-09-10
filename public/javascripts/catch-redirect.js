/**
 * Created by youngkim on 2015. 9. 9..
 */

//catch mobile device and redirect to mobile page
(function () {
    if (navigator.userAgent.match(/Android|Mobile|iP(hone|od|ad)|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/)) {
        window.location.replace(window.location.protocol + '//' + window.location.host + '/mobile');
    }
})();
