/**
 * Created by artem on 2/23/16.
 */
window._setRipplePosition = function (e) {
    //console.log(e.clientX);
    e.currentTarget.getElementsByTagName('ripple-target')[0].style.left = -(parseInt(e.currentTarget.style.width) - e.layerX) + 'px';
    e.currentTarget.getElementsByTagName('ripple-target')[0].style.top = -(parseInt(e.currentTarget.style.height) - e.layerY) + 'px';
};