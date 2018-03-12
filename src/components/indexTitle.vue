<template>
    <div class="index_title_wrap">
        <span @click.stop="setVisible" :class="iconname" class="iconfont"></span> <span>{{titcontent}}</span>
        <toast message="你好亲爱的" :visible.sync="visible"/>
    </div>
</template>

<script>
import toast from 'mpvue-toast';
export default {
    name: 'indexTitle',
    data() {
        return {
            visible: 0
        }
    },
    props: ['iconname', 'titcontent'],
    methods: {
        setVisible() {
            this.visible = !this.visible;
        }
    },
    components: {
        toast
    }
}
</script>

<style lang="less" scoped>
@mainColor: #1e90ff;
.index_title_wrap {
    display: flex;
    height: 50px;
    align-items: center;
    padding-left: 10px;
    border-bottom: 1px solid #ccc;
    position: relative;
    &::after {
        content: '';
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        width: 3vw;
        background-color: @mainColor;
    } 
    span:first-of-type {
        font-size: 20px;
    }
    span:last-of-type {
        font-size: 14px;
        color: #666;
        margin-left: 10px;;
    }
}
</style>
