<template>
  <div class="index_wrap">
    <!-- 轮播图部分 -->
    <swiper class="swiper_box" :indicator-active-color="indicatorActiveColor" :circular="true" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
      <block v-for="(item, index) in imgUrls" :key="index">
        <swiper-item class="swiper_item">
          <image :src="item" class="slide-image"/>
        </swiper-item>
      </block>
    </swiper>
    <!-- 组件调试 -->
    <index-title :iconname="'icon-pinpaizhuanxiang'" :titcontent="'步数排行'" />
    <index-title :iconname="'icon-home2'" :titcontent="'明日推荐'" />


  </div>
</template>

<script>
//引入indexTitle组件
import indexTitle from '@/components/indexTitle';
export default {
  name: "index",
  data() {
    return {
      imgUrls: [
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520868802091&di=0321b9682f1579386dd0428ce499a02f&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F12%2F82%2F33%2F43T58PICVjK.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520868802090&di=1d988874b3c6e59b959f1c3aa6029b9a&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F12%2F80%2F76%2F01r58PICFC9.jpg',
      ],
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 1000,
      indicatorActiveColor: '#1e90ff'
    }
  },
  components: {
    indexTitle
  }
};
</script>

<style lang="less" scoped>
.index_wrap {
  .swiper_box {
    width: 100vw;
    height: 30vh;
    .swiper_item {
      width: 10%;
      image {
        width: 100%;
      }
    }
  }
}
</style>
