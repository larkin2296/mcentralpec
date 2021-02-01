<template>
  <div class="city">
    <!-- 点击此处 省市区选择出现 -->
     <div class="chooseCity" @click="clickCity">{{chooseCity}}</div>
     <div class="boxcity" v-if="showCity">
       <!-- 省市区的标题 点击可回退 -->
       <div class="chooseTit">
          <p @click="chooseProvince" v-show='tit1'>{{chooseTit1}}</p>
          <p @click="chooseCity2" v-show='tit2'>{{chooseTit2}}</p>
          <p v-show='tit3'>{{chooseTit3}}</p>
       </div>
       <!-- 省市区 -->
     <div  class="citys">
       <div @click="getCity" class="province">
         <ul v-show="showProvince">
          <li v-for="item in provinceL" :key="item.regionId" @click="getProvince(item)">{{item.regionName}}</li>
        </ul>
        <ul v-show="showCity2">
          <li v-for="item in cityL" :key="item.regionId" @click="getCity2(item)">{{item.regionName}}</li>
        </ul>
         <ul v-show="showarea">
          <li v-for="item in areaL" :key="item.regionId" @click="getarea(item)">{{item.regionName}}</li>
        </ul>
       </div>
     </div>
     </div>
     <!-- 遮罩层 -->
     <div class="mask" v-show="mackShow" @click="closeMask"></div>
  </div>
</template>
 
<script>
export default {
  data () {
    return {
      chooseCity:"点击我选择",
      selected    : '',
      citySelected: '',
      areaSelected: '',
      provinceL   : [],
      cityL       : [],
      areaL       : [],
      city        : [],
      provinceName: '',
      cityName    : '',
      areaName    : '',
      showProvince:true,
      showCity:false,
      showCity2:false,
      showarea:false,
      chooseTit1:"省",
      chooseTit2:"市",
      chooseTit3:"区",
      tit1:true,
      tit2:false,
      tit3:false,
      mackShow:false,
      province:"",
      Nextcity:"",
      district:"",
      totalCity:"",
}
  },
  methods:{
    //点击省市标题隐藏出现内容  形成回退效果
    chooseProvince(){
      this.showProvince = true;
      this.showCity2 = false;
    },
    chooseCity2(){
      this.showProvince = false;
      this.showCity2 = true;
      this.showarea = false;
    },
    //点击省市区出现
    clickCity(){
      this.showCity = true;
      this.mackShow = true;
    },
    //点击省市区 让每个li内展示的名字等于数据的城市名
    getCity(){
      for(var item of this.provinceL){
          this.provinceName = item.regionName;
          //this.regionId = item.regionId
       }
    },
    //当用户点击某个省事件 根据省的id获取市
    getProvince(item){
       this.province = item.regionName
       console.log(this.province);
      // console.log(item.regionId);
       this.$axios({
      url:'http://192.168.1.16:0000/insurance-intact-wechat-api/get_regions?parentId='+item.regionId,
      method: 'get'
      }).then(res=>{
        //console.log(res)
         this.cityL        = res.data;
         this.citySelected = this.cityL[0].regionId;
         this.showProvince = false;
         this.showCity2= true;
         this.tit2 = true;
      })
 
      this.areaL = [];
 
    },
    //当用户点击某个市事件 根据省的id获取区
    getCity2(item){
        this.Nextcity = item.regionName
        console.log(this.Nextcity);
        //  console.log(item.regionId);
      this.$axios({
       url:'http://192.168.1.16:0000/insurance-intact-wechat-api/get_regions?parentId='+item.regionId, 
      method: 'get'
      }).then(res=>{
        //console.log(res)
         this.areaL        = res.data;
         this.areaSelected = this.areaL[0].regionId;
         this.showarea = true;
         this.showCity2= false;
         this.tit3 = true;
      })
    },
    //用户点击区或者镇，遮罩消失
    getarea(item){
        this.district = item.regionName;
        console.log(this.district);
        var totalCity = this.province+"," + this.Nextcity +"," +this.district;
        this.chooseCity =totalCity;
        //console.log(item.regionId);
        this.showCity = false;
        this.mackShow = false;
    },
 
    closeMask(){
      this.showCity = false;
      this.mackShow = false;
    }
  },
  //页面初始化 请求数据 将请求到的城市保存下来
  created() {
         var url="http://192.168.1.16:0000/insurance-intact-wechat-api/get_regions?parentId=0";
                    this.$axios({
                      method:'get',
                      url:url,
                      withCredentials: true,
                      crossDomain: true,
                      data:"data",
                      headers: {
                              'Content-Type':'application/x-www-form-urlencoded',
                        }
                  }).then(res=>{
                   //console.log(res.data);
                   this.provinceL = res.data;
                   
 
                  })
                  .catch(error=>{
                      console.log(error);
                });
  },
}
</script>
 
<style scoped>
  .chooseCity{
    width: 100%;
    height: 40px;
    text-align: center;
    line-height: 40px;
    border-bottom: 1px solid #666;
  }
  .boxcity{
    position: absolute;
    width: 40%;
    right: 0;
    top:0;
    height: 60%;
    z-index: 100;
    background: #ffffff;
  }
  .citys{
    border-top: 1px solid #666; 
    height: 100%;
    overflow: hidden;
    overflow-y: scroll;
    background: #ffffff;
  }
  .province{
    height: 100%;
  }
  /* 让滚动条不显示 */
  .citys::-webkit-scrollbar {
    display: none;
  }
  ul{
    margin:0;
    padding:0;
  }
li{
  list-style: none;
  margin-top: 10px;
}
.chooseTit {
  display: flex;
  justify-content: space-around;
  width: 100%;
  text-align: center;
  background: #448ff7;
}
.chooseTit p{
  color: #ffffff;
}
.mask{
  position: absolute;
  width: 100%;
  height: 100%;
  background: black;
  opacity: .5;
  top:0;
  left: 0;
  z-index: 90;
}
</style>