window.onload = function () {
    waterfall('main', 'box');
}

function waterfall(parent, box) {
    // 将main下所有class为box的元素取出来
    var oParent = document.getElementById(parent);
    // 通过class获取元素
    var oBoxs = getByClass(oParent, box);
    // 计算整个页面显示的列数（页面宽/box宽）
    var oBoxW = oBoxs[0].offsetWidth;
    var cols = Math.floor(document.documentElement.clientWidth / oBoxW);
    // 设置main的宽度
    oParent.style.cssText = 'width:' + oBoxW * cols + 'px;margin:0 auto';
    // 存放每一列高的数组    
    var hArr = [];
    for (var i = 0; i < oBoxs.length; i++) {
        if (i < cols) {
            hArr.push(oBoxs[i].offsetHeight);
        } else {
            // min无法直接操作数组
            var minH = Math.min.apply(null, hArr);
            var index = getMinhIndex(hArr, minH);
            oBoxs[i].style.position = 'absolute';
            oBoxs[i].style.top = minH + 'px';
            oBoxs[i].style.left = oBoxW * index + 'px';
            // oBoxs[i].style.left = oBoxs[index].offsetLeft + 'px';         
            // hArr[index]的值=原来hArr[index]的值+后来增加的图片的高
            hArr[index] += oBoxs[i].offsetHeight;
        }
    }
}

// 通过class获取元素
function getByClass(parent, clsName) {
    // 用来存储获取到的所有class为box的元素
    var boxArr = new Array(),
        oElements = parent.getElementsByTagName('*');
    for (var i = 0; i < oElements.length; i++) {
        if (oElements[i].className == clsName) {
            boxArr.push(oElements[i]);
        }
    }
    return boxArr;
}

function getMinhIndex(arr, val) {
    for (var i in arr) {
        if (arr[i] == val) {
            return i;
        }
    }
}