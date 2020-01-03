<template>
    <div id="headed">
        <ul class="tab">
            <li>
                <!-- @click="jump(index) index: 切换颜色   代表切换的路由文件:class="{'active_color': index==0}当index等于0的时候显示第一个，index：1 切换订阅                 
                -->
                <div class="nav" @click="jump(0)" :class="{'active_color': index==0}">关注</div>
            </li>
            <li>
                <div class="nav" @click="jump(1)" :class="{'active_color': index==1}">订阅</div>
            </li>
        </ul>
        <div class="line"></div>
        <!-- 是否滑动boxNum：代表有几个路由组件marginLeft：偏移量 -->
        <div :class="{shift: isMove}" :style="{width: boxNum*375 + 'px', marginLeft: marginLeft + 'px'}"
            @touchstart="start($event)" @touchmove="move($event)" @touchend="end($event)">
            <Attention></Attention>
            <Subscription></Subscription>
        </div>
    </div>
</template>
<script>
    import Attention from '../../pages/Attention/Attention'
    import Subscription from '../../pages/Subscription/Subscription'
    export default{
        data(){
            return {
                tabNum: 1, // tab 切换的页面宽度 ( 通过接口的数据计算 )
                index: 0, // 选中了第几个选项卡
                boxNum: 1, // 容器宽度
                marginLeft: 0, // 偏移量
                isMove: true, // 是否在滑动
                startX: 0,  //开始的x
                startY: 0, //开始的y
                moveX: 0, //移动的x
                movrY: 0, // 移动的y
                endX: 0, //结束的xx
                endY: 0,//结束的x
                m_sX: 0, //移动的距离x
                m_sY: 0, //移动的距离x
                e_sX: 0, 
                e_xY: 0, 
                sML: 0 //开始的偏移量
            }
        },
        methods: {
            jump(index){
                this.index = index;
            },
            start (ev) {
                ev.stopPropagation();
                this.isMove = false;
                this.startX = ev.changedTouches[0].clientX;
                this.startY = ev.changedTouches[0].clientY;
                this.sML = this.marginLeft;
            },
            move (ev) {
                ev.stopPropagation();
                this.moveX = ev.changedTouches[0].clientX;
                this.moveY = ev.changedTouches[0].clientY;
                this.m_sX = this.moveX - this.startX;
                this.m_sY = this.moveY - this.startY;
                var marginLeft = this.sML + this.m_sX;
                marginLeft = marginLeft > 0 ? 0 : marginLeft;
                marginLeft = marginLeft < 375 - this.boxNum * 375 ? 375 - this.boxNum * 375 : marginLeft;
                this.marginLeft = marginLeft;
            },
            end (ev) {
                this.isMove = true;
                if(Math.abs(this.m_sX) > Math.abs(this.m_sY) && Math.abs(this.m_sX) > 60) {
                    var multiple = this.m_sX > 0 ? -1 : 1;
                    var index = this.index + multiple;
                    index = index < 0 ? 0 : index;
                    index = index > this.boxNum - 1 ? this.boxNum - 1 : index;
                    this.index = index;
                } else {
                    this.marginLeft = 0 - this.index * 375;
                }
            }
        },
        mounted(){
            //路由组件的数量
            this.boxNum = 2;
        },
        components: {
            //组件的名称
            Attention, Subscription
        },
        watch: {
            index: function (newValue, oldValue) {
                this.marginLeft = 0 - this.index * 375;
            }
        }
    }
</script>
<style scoped="scoped">
    #headed{
        width: 360px;
        overflow: hidden;
    }
    .line{
        width: 100%;
        height: 1px;
        background-color: #e6e6e6;
        margin-top: -2px;
    }
    .tab{
        overflow: hidden;
        padding: 0;
        margin: 0;
        height: 45px;
        line-height: 45px;
    }
    .tab li{
        float: left;
        list-style: none;
        width: 50%;
        text-align: center;
    }
    .nav{
        width: 30px;
        height: 42px;
        margin: 0 auto;
        text-align: center;
        font-size: 13px;
    }
    .active_color{
        color: #4CAF50;
        border-bottom: 2px solid #4CAF50!important;
    }
    .shift {
        transition-property: margin-left;
        transition-duration: 1s;
    }
</style>