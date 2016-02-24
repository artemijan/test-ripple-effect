/**
 * Created by artem on 2/23/16.
 */
window._setRipplePosition = function (e) {
    //console.log(e.clientX);
    e.currentTarget.children[0].style.left = -(parseInt(e.currentTarget.style.width) - e.layerX) + 'px';
    e.currentTarget.children[0].style.top = -(parseInt(e.currentTarget.style.height) - e.layerY) + 'px';
};