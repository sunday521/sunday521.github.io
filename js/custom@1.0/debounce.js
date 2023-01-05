// 1.防抖全局计时器|靠前引入，在引入需要防抖的js函数前
// 防抖：保证长按时不重复触发
// 防抖函数:fn->逻辑 time->防抖时间
let TT = null;    //time用来控制事件的触发
function debounce(fn, time) {
    if (TT !== null) clearTimeout(TT);
    TT = setTimeout(fn, time);
}

// 2. 复制提醒+防抖
document.addEventListener("copy", function () {
    debounce(function () {
        new Vue({
            data: function () {
                this.$notify({
                    title: "哎嘿！复制成功🍬🍬",
                    message: "若要转载最好保留原文链接哦，给你一个大大的赞！",
                    position: 'top-left',
                    offset: 50,
                    showClose: true,
                    type: "success",
                    duration: 3000
                });
            }
        })
    }, 300);
})
