//index.js
//获取应用实例
const app = getApp()

let msg1 = ""
Page({
  data: {
    one_img:'/pages/images/6.png',
    two_img: '/pages/images/6.png',
    three_img: '/pages/images/6.png',
    four_img: '/pages/images/6.png',
    five_img: '/pages/images/6.png',
    six_img: '/pages/images/6.png',

    flag:true,
    timer:null,
    msg:'摇一摇',
    total:0,
    txt:'恭喜你摇到了：0',
    //图片的素材和效果图会发在最下面
    arr:[
      '/pages/images/1.png',
      '/pages/images/2.png',
      '/pages/images/3.png',
      '/pages/images/4.png',
      '/pages/images/5.png',
      '/pages/images/6.png',
    ]
  },
  judge:function(result1) {//使用enter生成的随机数，判断博饼结果
    var msg1 = ""
    var d = [1,2,3,4,5,6];//这个是对比数组
    var s = [0,0,0,0,0,0];//这个是统计结果
    for (var i=0;i<d.length;i++){
            for(var j=0;j<result1.length;j++){
                if (d[i] =result1[j])
                {
                    s[i]++;
                };
            };
          if((s[0] == 2)&(s[3] == 4)){
            msg1 = "状元插金花"
          }
          else if(s[3] == 6){
            msg1 = "六勃红"
          }
          else if(s[0] == 6){
            msg1 = "遍地锦"
          }
          else if((s[1] == 6)|(s[2] == 6)|(s[4] == 6)|(s[5] == 6)){
            msg1 = "六勃黑"
          }
          else if(s[3] == 5){
            msg1 = "五红"
          }
          else if((s[0] == 5)|(s[1] == 5)|(s[2] == 5)|(s[4] == 5)|(s[5] == 5)){
            msg1 = "五子"
          }
          else if(s[3] == 4){
            msg1 = "四红"
          }
          else if((s[0] == 1)|(s[1] == 1)|(s[2] == 1)|(s[3] == 1)|(s[4] == 1)|(s[5] == 1)){
            msg1 = "对堂"
          }
          else if(s[3] == 3){
            msg1 = "三红"
          }
          else if((s[0] == 4)|(s[1] == 4)|(s[2] == 4)|(s[4] == 4)|(s[5] == 4)){
            msg1 = "四进"
          }
          else if(s[3] == 2){
            msg1 = "二举"
          }
          else if(s[3] == 1){
            msg1 = "一秀"
          }else{
            msg1 = "无"
          } 
    }
    return msg1
  },
  enter:function(event){
    let obj = this;
    if(obj.data.flag==true){
       obj.data.timer = setInterval(function () {
        let one = Math.floor(Math.random() * 6);
        let two = Math.floor(Math.random() * 6);
        let three = Math.floor(Math.random() * 6);
        let four = Math.floor(Math.random() * 6);
        let five = Math.floor(Math.random() * 6);
        let six = Math.floor(Math.random() * 6);
        msg1 = obj.judge([one, two, three, four, five, six])
        obj.setData({
         
          one_img: obj.data.arr[one],
          two_img: obj.data.arr[two],
          three_img: obj.data.arr[three],
          four_img: obj.data.arr[four],
          five_img: obj.data.arr[five],
          six_img: obj.data.arr[six],
          flag:false,
          msg:'停止',
          total:one+two+three+3,
          // total:18,
          txt:msg1,
          //结果判断
          
        })
      }, 50);
    }else{
      
      clearInterval(obj.data.timer);
      obj.setData({
         //one_img: obj.data.arr[5],
         //two_img: obj.data.arr[5],
         //three_img: obj.data.arr[5],
          msg:'摇一摇',
          flag:true,
          txt:'恭喜你摇到了:' + msg1,
        })
    }
  },

  intoResult:function(){
    wx.navigateTo({
      url: '/pages/finalresult/finalresult',
    })
  },
})

