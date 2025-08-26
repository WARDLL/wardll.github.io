var data = [
    '青椒肉丝炒面',
    '鸡蛋火腿炒面',
    '韭菜鸡蛋煎饺',
    '肉夹馍',
    '番茄锅米线',
    '自选米线',
    '肥牛米线',
    '锡纸面',
    '麻辣鸡架',
    '汉堡炸鸡',
    '粉丝汤',
    '辣炒年糕',
    '火腿金针菇寿司',
    '东北石锅拌饭',
    '麻辣香锅',
    '淮南牛肉汤',
    '黄焖鸡',
    '鸡腿',
    '红油面皮',
    '螺丝粉',
    '酸辣粉'
  ],
  timer = null,
  flag = 0

window.onload = function() {
  var play = document.getElementById('play'),
    stop = document.getElementById('stop')

  // 开始抽奖
  play.onclick = playFun
  stop.onclick = stopFun

  // 键盘事件
  document.onkeyup = function(event) {
    event = event || window.event
    if (event.keyCode == 13) {
      if (flag == 0) {
        playFun()
        flag = 1
      } else {
        stopFun()
        flag = 0
      }
    }
  }
}

function playFun() {
  var title = document.getElementById('title')
  var play = document.getElementById('play')
  clearInterval(timer)
  timer = setInterval(function() {
    var random = Math.floor(Math.random() * data.length)
    title.innerHTML = data[random]
  }, 50)
  play.style.background = '#999'
}

function stopFun() {
  clearInterval(timer)
  var play = document.getElementById('play')
  play.style.background = '#f2cee1'
}
