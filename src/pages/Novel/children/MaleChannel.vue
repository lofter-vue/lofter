<template>
  <div>
    <div class="swiperContainer">
      <div ref='sc1' class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="../../../static/xiaoshuo/1.jpeg">
          </div>
          <div class="swiper-slide">
            <img src="../../../static/xiaoshuo/2.jpeg">
          </div>
          <div class="swiper-slide">
            <img src="../../../static/xiaoshuo/3.jpeg">
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div> 
    <div class="bookrackContainer">
      <div class="text">还没有加入书架的书籍哦~</div>
      <div class="bookrack">书架 ></div>
    </div>
    <div class="books">
      <div class="recommendContainer">
        <div class="title">
          <span>重磅推荐</span>
          <div class="more">更多</div>
        </div>
        <div class="recommend">
          <div class="recommendItem">
            <img src="http://img-tailor.11222.cn/bcv/big/1164917954550.jpg" alt="">
            <p class="bookName">豪门最强赘婿</p>
            <p class="author_name">天骄</p>
          </div>
          <div class="recommendItem">
            <img src="http://img-tailor.11222.cn/bcv/big/1180807411956.jpg" alt="">
            <p class="bookName">众圣之门</p>
            <p class="author_name">虾米XL</p>
          </div>
          <div class="recommendItem">
            <img src="http://img-tailor.11222.cn/bcv/big/1168967843619.jpg" alt="">
            <p class="bookName">透视小神医</p>
            <p class="author_name">亦凡</p>
          </div>
        </div>
        <ul class='bookList'>
          <li class="bookItem" v-for="(item,index) in content" :key="index">
            <img :src="item.book_cover" alt="">
            <div class="bookInfo">
              <span class="bookName">{{item.bookname}}</span>
              <p class="authorName">{{item.author_name}}</p>
              <p class="content">{{item.book_info}}</p>
              <div class="probably">
                <div>{{item.stat_name}}</div>
                <div>{{item.class_name}}</div>
                <div>{{(item.size)/10000}}万字</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
  export default {
    data () {
      return {
        //图书数组
          "content": [
            {
              "bid": "7954550",
              "bookname": "豪门最强赘婿",
              "introduction": " 为报父母之仇，他忍辱负重，甘心 做了上门女婿，身份底下，受尽嘲讽。最终，他守得云开日月，靠着自己的一双手手刃仇人，并且还美人在抱，小弟在后，开启逍遥生活……",
              "book_info": " 为报父母之仇，他忍辱负重，甘心 做了上门女婿，身份底下，受尽嘲讽。最终，他守得云开日月，靠着自己的一双手手刃仇人，并且还美人在抱，小弟在后，开启逍遥生活……",
              "chapterid": "1316266",
              "topic": "第三百三十八章 逃跑的蛇妖",
              "topic_first": "第一章 受尽委屈",
              "date_updated": 1577459102,
              "author": "446565",
              "author_name": "天骄",
              "top_class": "502",
              "state": "1",
              "readCount": "0",
              "praiseCount": "0",
              "stat_name": "连载",
              "class": "121",
              "class_name": "都市生活",
              "size": "687641",
              "book_cover": "http://img-tailor.11222.cn/bcv/big/1164917954550.jpg",
              "chapterid_first": "1220637",
              "chargeMode": "3",
              "digest": "0",
              "price": "0.5",
              "tag": [
                "爽文",
                "轻松",
                "爆笑"
              ],
              "is_new": 1,
              "discountNum": 10,
              "quick_price": 0,
              "formats": "1",
              "audiobook_playCount": 0,
              "chapterNum": "338",
              "isShortStory": false,
              "userid": "0",
              "search_heat": 76,
              "num_click": 211365,
              "recommend_num": "15755",
              "first_cate_id": "51",
              "first_cate_name": "都市小说",
              "disType": null,
              "disInfo": null,
              "isMonthlyBook": null,
              "reason": ""
            },
            {
              "bid": "7411956",
              "bookname": "众圣之门",
              "introduction": "当他拥有天地众圣都想要炼化的血脉，就注定了成长道路上，步步皆杀。\n圣人不仁，如之奈何？我来替苍生斩圣！",
              "book_info": "当他拥有天地众圣都想要炼化的血脉，就注定了成长道路上，步步皆杀。\n圣人不仁，如之奈何？我来替苍生斩圣！",
              "chapterid": "1256365",
              "topic": "第一千四百五十五章 我不杀女人",
              "topic_first": "第一章赌上自己的命",
              "date_updated": 1577366102,
              "author": "21454",
              "author_name": "虾米XL",
              "top_class": "502",
              "state": "1",
              "readCount": "0",
              "praiseCount": "0",
              "stat_name": "连载",
              "class": "2",
              "class_name": "东方玄幻",
              "size": "4237345",
              "book_cover": "http://img-tailor.11222.cn/bcv/big/1180807411956.jpg",
              "chapterid_first": "886712",
              "chargeMode": "3",
              "digest": "0",
              "price": "0.5",
              "tag": [
                "热血",
                "爽文",
                "励志",
                "争霸流"
              ],
              "is_new": 1,
              "discountNum": 10,
              "quick_price": 0,
              "formats": "1",
              "audiobook_playCount": 0,
              "chapterNum": "1355",
              "isShortStory": false,
              "userid": "0",
              "search_heat": 76,
              "num_click": 254642,
              "recommend_num": "200827",
              "first_cate_id": "1",
              "first_cate_name": "玄幻小说",
              "disType": null,
              "disInfo": null,
              "isMonthlyBook": null,
              "reason": ""
            },
            {
              "bid": "7843619",
              "bookname": "透视小神医",
              "introduction": "他是神医传人，武道高手，全村最白最帅的男人!\n只因师父的临终遗嘱，义守乡村，悬壶济世，游戏人生！却不想，一次邻家美少女初长成后的特殊要求，为他打开了一扇新世界的大门，也将他卷入了一场巨大的风暴！",
              "book_info": "他是神医传人，武道高手，全村最白最帅的男人!\n只因师父的临终遗嘱，义守乡村，悬壶济世，游戏人生！却不想，一次邻家美少女初长成后的特殊要求，为他打开了一扇新世界的大门，也将他卷入了一场巨大的风暴！",
              "chapterid": "1280651",
              "topic": "第六百三十九章 小女人的好奇心",
              "topic_first": "第一章要不，帮你揉揉？",
              "date_updated": 1577429402,
              "author": "605820",
              "author_name": "亦凡",
              "top_class": "502",
              "state": "1",
              "readCount": "0",
              "praiseCount": "0",
              "stat_name": "连载",
              "class": "335",
              "class_name": "乡村乡土",
              "size": "1367505",
              "book_cover": "http://img-tailor.11222.cn/bcv/big/1168967843619.jpg",
              "chapterid_first": "1130165",
              "chargeMode": "3",
              "digest": "0",
              "price": "0.5",
              "tag": [
                "爽文",
                "轻松",
                "种田文"
              ],
              "is_new": 1,
              "discountNum": 10,
              "quick_price": 0,
              "formats": "1",
              "audiobook_playCount": 0,
              "chapterNum": "639",
              "isShortStory": false,
              "userid": "0",
              "search_heat": 91,
              "num_click": 144135,
              "recommend_num": 19032,
              "first_cate_id": "51",
              "first_cate_name": "都市小说",
              "disType": null,
              "disInfo": null,
              "isMonthlyBook": null,
              "reason": ""
            },
            {
              "bid": "7864932",
              "bookname": "重生之都市弃少",
              "introduction": " 仙尊划破虚空而来，重生为都市小子！\n 　 他是叱咤风云的武道奇才，一拳震天慑地，无人敢不屈服！\n 这一世，叶爽纵横花都，逍遥快活，仇人，恶少脚下踩！辣妞，妹子怀中抱！ \n ",
              "book_info": " 仙尊划破虚空而来，重生为都市小子！\n 　 他是叱咤风云的武道奇才，一拳震天慑地，无人敢不屈服！\n 这一世，叶爽纵横花都，逍遥快活，仇人，恶少脚下踩！辣妞，妹子怀中抱！ \n ",
              "chapterid": "1257442",
              "topic": "第八百零四章 交易",
              "topic_first": "第一章不可置信",
              "date_updated": 1577461202,
              "author": "94637",
              "author_name": "老酒",
              "top_class": "502",
              "state": "1",
              "readCount": "0",
              "praiseCount": "0",
              "stat_name": "连载",
              "class": "122",
              "class_name": "都市异能",
              "size": "1643905",
              "book_cover": "http://img-tailor.11222.cn/bcv/big/1190037864932.jpg",
              "chapterid_first": "1105656",
              "chargeMode": "3",
              "digest": "0",
              "price": "0.5",
              "tag": [
                "爽文",
                "重生",
                "强者回归"
              ],
              "is_new": 1,
              "discountNum": 10,
              "quick_price": 0,
              "formats": "1",
              "audiobook_playCount": 0,
              "chapterNum": "804",
              "isShortStory": false,
              "userid": "0",
              "search_heat": 89,
              "num_click": 96495,
              "recommend_num": 14268,
              "first_cate_id": "51",
              "first_cate_name": "都市小说",
              "disType": null,
              "disInfo": null,
              "isMonthlyBook": null,
              "reason": ""
            },
            {
              "bid": "7949140",
              "bookname": "重生之仙帝赘婿",
              "introduction": "一代仙帝张阳在突破境界时，失败后竟穿越到了废物‘赘婿’张阳的身上。在面对冷漠的妻子，咄咄逼人的丈母娘和蛮横的小姨子，且看张阳如何为‘赘婿’正名......",
              "book_info": "一代仙帝张阳在突破境界时，失败后竟穿越到了废物‘赘婿’张阳的身上。在面对冷漠的妻子，咄咄逼人的丈母娘和蛮横的小姨子，且看张阳如何为‘赘婿’正名......",
              "chapterid": "1288466",
              "topic": "第四百八十九章：决议",
              "topic_first": "第一章：重生赘婿",
              "date_updated": 1577444702,
              "author": "4233320",
              "author_name": "东方威少",
              "top_class": "502",
              "state": "1",
              "readCount": "0",
              "praiseCount": "0",
              "stat_name": "连载",
              "class": "122",
              "class_name": "都市异能",
              "size": "987433",
              "book_cover": "http://img-tailor.11222.cn/bcv/big/1186277949140.jpg",
              "chapterid_first": "1185040",
              "chargeMode": "3",
              "digest": "0",
              "price": "0.5",
              "tag": [
                "热血",
                "争霸",
                "重生",
                "杀伐果断"
              ],
              "is_new": 1,
              "discountNum": 10,
              "quick_price": 0,
              "formats": "1",
              "audiobook_playCount": 0,
              "chapterNum": "489",
              "isShortStory": false,
              "userid": "0",
              "search_heat": 81,
              "num_click": 63815,
              "recommend_num": 11000,
              "first_cate_id": "51",
              "first_cate_name": "都市小说",
              "disType": null,
              "disInfo": null,
              "isMonthlyBook": null,
              "reason": ""
            },
            {
              "bid": "7944124",
              "bookname": "天降大富豪",
              "introduction": "被女神拒绝，被富二代侮辱，吴天以为自己这辈子都将抬不起头，但当一个美女御姐说是自己的秘书开始，一切都不一样了……",
              "book_info": "被女神拒绝，被富二代侮辱，吴天以为自己这辈子都将抬不起头，但当一个美女御姐说是自己的秘书开始，一切都不一样了……",
              "chapterid": "1248469",
              "topic": "823 攻守逆转",
              "topic_first": "1 我是您秘书",
              "date_updated": 1577497506,
              "author": "9237",
              "author_name": "乐天",
              "top_class": "502",
              "state": "1",
              "readCount": "0",
              "praiseCount": "0",
              "stat_name": "连载",
              "class": "121",
              "class_name": "都市生活",
              "size": "1697632",
              "book_cover": "http://img-tailor.11222.cn/bcv/big/1153237944124.jpg",
              "chapterid_first": "1146361",
              "chargeMode": "3",
              "digest": "0",
              "price": "0.5",
              "tag": [
                "爽文",
                "轻松",
                "生存奇遇"
              ],
              "is_new": 1,
              "discountNum": 10,
              "quick_price": 0,
              "formats": "1",
              "audiobook_playCount": 0,
              "chapterNum": "823",
              "isShortStory": false,
              "userid": "0",
              "search_heat": 74,
              "num_click": 87685,
              "recommend_num": 13387,
              "first_cate_id": "51",
              "first_cate_name": "都市小说",
              "disType": null,
              "disInfo": null,
              "isMonthlyBook": null,
              "reason": ""
            },
            {
              "bid": "7724285",
              "bookname": "极品鉴宝师",
              "introduction": "原本就是一个穷打工的，想要靠古董发家，结果被人骗光了积蓄，后来一直在洛阳送外卖，意外撞车之后，获得了特殊的鉴宝能力，从此走上了发家致富的道路。",
              "book_info": "原本就是一个穷打工的，想要靠古董发家，结果被人骗光了积蓄，后来一直在洛阳送外卖，意外撞车之后，获得了特殊的鉴宝能力，从此走上了发家致富的道路。",
              "chapterid": "1343718",
              "topic": "第970章 赵炎的到来",
              "topic_first": "第1章玄目天瞳",
              "date_updated": 1577448907,
              "author": "1009",
              "author_name": "沧海一笑",
              "top_class": "502",
              "state": "1",
              "readCount": "0",
              "praiseCount": "0",
              "stat_name": "连载",
              "class": "121",
              "class_name": "都市生活",
              "size": "1951586",
              "book_cover": "http://img-tailor.11222.cn/bcv/big/1144217724285.jpg",
              "chapterid_first": "1111724",
              "chargeMode": "3",
              "digest": "0",
              "price": "0.5",
              "tag": [
                "爽文",
                "轻松",
                "盗墓",
                "鉴宝"
              ],
              "is_new": 1,
              "discountNum": 10,
              "quick_price": 0,
              "formats": "1",
              "audiobook_playCount": 0,
              "chapterNum": "970",
              "isShortStory": false,
              "userid": "0",
              "search_heat": 94,
              "num_click": 103725,
              "recommend_num": 14991,
              "first_cate_id": "51",
              "first_cate_name": "都市小说",
              "disType": null,
              "disInfo": null,
              "isMonthlyBook": null,
              "reason": ""
            }
          ]
      }
    },
    mounted() {
      new Swiper(this.$refs.sc1,{
        loop:true, // 循环模式选项
        pagination:{// 如果需要分页器
          el:'.swiper-pagination'
        }
      })
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  div
    .swiper-container
      margin-top 5px 
      width 100%
      position relative
      .swiper-wrapper
        width 100%
        height 200px
        .swiper-slide
          width 100%
          height 100%
          display flex
          flex-wrap wrap
          img 
            width 100%
            height 100%
    .swiper-pagination
      position absolute
      top 300px
      left 10px
  .bookrackContainer
    width 100%
    height 50px
    border-bottom 1px solid #ECECEC
    .text
      font-size 16px
      color rgba(0,0,0,.5)
      margin-left 10px
      line-height 50px
      float left
    .bookrack
      font-size 14px
      width 60px 
      height 30px
      margin 12px 30px 0 0 
      background #FFCB33
      float right 
      line-height 30px
      text-align center
      border-radius 10px
  .books
    width 100%
    margin-top 5px
    .recommendContainer
      width 100%
      .title
        font-size 24px
        margin-left 10px
        margin-bottom 10px
        
        .more
          font-size 14px
          margin-right 15px
          color #989898
          float right 
          width 60px
          height 24px
          text-align center
          line-height 25px
          border 1px solid #989898
          border-radius 10px
      .recommend
        width 100%
        display flex
        justify-content space-around
        text-align center
        .recommendItem
          width 27%
          flex-direction column
          img   
            width 100%
            border-radius 3px
          .bookName 
            font-size 16px
            line-height 20px
          .author_name
            font-size 12px
            color #989898
            line-height 20px
      .bookList
        padding 10px
        .bookItem
          height 160px
          width 100%
          display flex
          img 
            width 30%
            height 150px
            margin 5px 10px 0
            border-radius 5px
          .bookInfo
            padding 10px 
            .bookName
              font-size 18px
              line-height 36px
            .authorName
              font-size 14px
              line-height 28px
              color #989898
            .content
              font-size 14px
              line-height 20px
              color #989898
              display -webkit-box
              -webkit-box-orient vertical
              -webkit-line-clamp 2
              overflow hidden
            .probably
              width  220px
              height 40px
              display flex
              flex-wrap nowrap
              div
                height 20px
                padding 1px
                margin 5px 0
                line-height 20px
                margin-left 5px
                background #989898
                border-radius 5px
                font-size 12px
                margin-top 10px


          
</style>
