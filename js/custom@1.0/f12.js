
// 注意：禁用f12需要同时引入该js和修改/themes/butterfly/layout/includes/layout.pug
document.onkeydown = function (e) {

    // 包裹在防抖函数中,防止长按频繁触发
    debounce(function () {
        // F12:123   i:73 j:74 c:67    u:85
        if (123 == e.keyCode || (e.ctrlKey && e.shiftKey && (74 === e.keyCode || 73 === e.keyCode || 67 === e.keyCode)) || (e.ctrlKey && 85 === e.keyCode)) 
        new Vue({
            data: function () {
                this.$notify({
                    // title: "",
                    message: "你真坏！居然想扒人家裤子（拽紧）",
                    position: 'top-left',
                    offset: 50,
                    showClose: true,
                    type: "error",
                    duration: 3000
                });
            }
        })
    },300);
    // 默认弹窗 return btf.snackbarShow("你真坏！居然想扒人家裤子（拽紧）"), event.keyCode = 0, event.returnValue = !1, !1
    return  event.keyCode = 0, event.returnValue = !1, !1
};