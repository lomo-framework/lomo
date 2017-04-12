/**
 * Created by Administrator on 2017/4/12.
 */
module.exports = function (embed) {
    return function (ComponentClass) {
        ComponentClass.embed = embed;
        return ComponentClass;
    };
};