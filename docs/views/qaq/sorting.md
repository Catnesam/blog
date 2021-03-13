---
title: "排序算法小结"
date: 2021-03-13
tags:
 - 算法
 - 排序
categories:
 - 总结
isShowComments: false
sidebar: true
publish: true
---

## 总览

![](https://img.vim-cn.com/36/3522efd1352faccc485820d6daa50fb11af862.png)

**对比：**

![](https://img.vim-cn.com/e0/5e8c12c6f7ffc94d2a316d21907c4194a8922d.png)

## 实现

### 冒泡排序

```javascript
function bubbleSort(arr) {
  if (!Array.isArray(arr) || arr.length <= 1) return
  let lastIndex = arr.length - 1
  while (lastIndex > 0) {
    let flag = true, k = lastIndex
    for (let i = 0; i < k; i++) {
      if (arr[i] > arr[i+1]) {
        flag = false
        lastIndex = i
        let temp = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = temp
      }
    }
    if (flag) break
  }
}
```

### 选择排序

```javascript
const selectSort = (arr) => {
  if (!Array.isArray(arr) || arr.length <= 1) return
  let len = arr.length
  for (let i = 0; i < len - 1; i++) {
    let minIndex = i
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    if (i != minIndex) {
      let temp = arr[i]
      arr[i] = arr[minIndex]
      arr[minIndex] = temp
    }
  }
}
```

### 插入排序

```javascript
const insertSort = (arr) => {
  if (!Array.isArray(arr) || arr.length <= 1) return
  let len = arr.length
  for (let i = 1; i < len; i++) {
    let preIndex = i - 1
    let current = arr[i]
    while (preIndex >= 0 && current < arr[preIndex]) {
      arr[preIndex + 1] = arr[preIndex]
      preIndex--
    }
    arr[preIndex + 1] = current
  }
}
```

### 希尔排序

```javascript
const shellSort = (arr) => {
  let len = arr.length
  for (let gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < len; i++) {
      let j = i, current = arr[i]
      while (j - gap >= 0 && current < arr[j - gap]) {
        arr[j] = arr[j - gap]
        j -= gap
      }
      arr[j] = current
    }
  }
}
```

### 归并排序

```javascript
const mergeSort = (arr) => {
  let len = arr.length
  if (len < 2) {
    return arr
  }
  let mid = Math.floor(len / 2)
  let left = arr.slice(0, mid), right = arr.slice(mid)
  return merge(mergeSort(left), mergeSort(right))
}
const merge = (left, right) => {
  let result = []
  while (left.length > 0 && right.length > 0) {
    if (left[0] > right[0]) {
      result.push(right.shift())
    } else {
      result.push(left.shift())
    }
  }
  while (left.length) result.push(left.shift())
  while (right.length) result.push(right.shift())
  return result
}
```

### 快排

```javascript
const quickSort = (arr, left, right) => {
  if (left < right) {
    let i = left, j = right, x = arr[left]
    while (i < j) {
      while (i < j && arr[j] >= x) j--
      if (i < j) arr[i++] = arr[j]
      while (i < j && arr[i] <= x) i++
      if (i < j) arr[j--] = arr[i]
    }
    arr[i] = x
    quickSort(arr, left, i - 1)
    quickSort(arr, i + 1, right)
  }
}
```

### 堆排序

```javascript
const HeapSort = (arr) => {
  // 1.构建大顶堆
  for (var i = arr.length / 2 - 1; i >= 0; i--) {
    adjustHeap(arr, i, arr.length)
  }
  // 2.调整堆结构 + 交换首尾元素
  for (var j = arr.length - 1; j > 0; j--) {
    swap(arr, 0, j)
    adjustHeap(arr, 0, j)
  }
}
const adjustHeap = (arr, i, len) => {
  // 取出当前元素
  var temp = arr[i]
  for (var k = i * 2 + 1; k < len; k = k * 2 + 1) { // 从i结点的左子结点开始，也就是从2i+1处开始
    if (k + 1 < len && arr[k] < arr[k+1]) {// 如果左子结点小于它的右子结点， K指向右子结点
      k++
    }
    if (arr[k] > temp) { // 如果子结点大于父结点， 就将子结点的值赋给父结点（不用交换)
      arr[i] = arr[k]
      i = k
    } else {
      break
    }
  }
  arr[i] = temp // 将temp放在最终的位置
}
const swap = (arr, i, j) => {
  var temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
```

### 计数排序

```javascript
/**
 * 找出待排序的数组中最大和最小的元素；
   统计数组中每个值为i的元素出现的次数，存入数组C的第i项；
   对所有的计数累加（从C中的第一个元素开始，每一项和前一项相加）；
   反向填充目标数组：将每个元素i放在新数组的第C(i)项，每放一个元素就将C(i)减去1。
 */
function countingSort(arr, maxValue) {
  var bucket = new Array(maxValue + 1),
      sortedIndex = 0,
      arrLen = arr.length,
      bucketLen = maxValue + 1;

  for(var i = 0; i < arrLen; i++) {
      if(!bucket[arr[i]]) {
          bucket[arr[i]] = 0;
      }
      bucket[arr[i]]++;
  }

  for(var j = 0; j < bucketLen; j++) {
      while(bucket[j] > 0) {
          arr[sortedIndex++] = j;
          bucket[j]--;
      }
  }
}
```

### 桶排序

```javascript
/**
 * 桶排序是计数排序的升级版。它利用了函数的映射关系，高效与否的关键就在于这个映射函数的确定。
 * 桶排序 (Bucket sort)的工作的原理：假设输入数据服从均匀分布，将数据分到有限数量的桶里，每个桶再分别排序（有可能再使用别的排序算法或是以递归方式继续使用桶排序进行排）。
    算法描述
    设置一个定量的数组当作空桶；
    遍历输入数据，并且把数据一个一个放到对应的桶里去；
    对每个不是空的桶进行排序；
    从不是空的桶里把排好序的数据拼接起来。 
 */
const BucketSort = (arr, bucketSize) => {
  if (arr.length === 0) {
    return arr
  }
  var i
  var minValue = Math.min(...arr)
  var maxValue = Math.max(...arr)
  // 桶的初始化
  var DEFAULT_BUCKET_SIZE = 5
  bucketSize = bucketSize || DEFAULT_BUCKET_SIZE
  var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1
  var buckets = new Array(bucketCount)
  for (i = 0; i < buckets.length; i++) {
    buckets[i] = []
  }
  // 利用映射函数将数据分配到各个桶中
  for (i = 0; i < arr.length; i++) {
    buckets[Math.floor((arr[i] - minValue) / bucketSize)].push(arr[i])
  }
  arr = []
  for (i = 0; i < buckets.length; i++) {
    buckets[i].sort((a, b) => a - b)
    arr = [...arr, ...buckets[i]]
  }
  return arr
}
```

### 基数排序

```javascript
/**
 * 基数排序是按照低位先排序，然后收集；再按照高位排序，然后再收集；依次类推，直到最高位。
 * 有时候有些属性是有优先级顺序的，先按低优先级排序，再按高优先级排序。最后的次序就是高优先级高的在前，高优先级相同的低优先级高的在前。

    算法描述
    取得数组中的最大数，并取得位数；
    arr为原始数组，从最低位开始取每个位组成radix数组；
    对radix进行计数排序（利用计数排序适用于小范围数的特点）；
 */
var counter = []
const RadixSort = (arr, maxDigit) => {
  var mod = 10;
  var dev = 1;
  for(var i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
      for(var j = 0; j < arr.length; j++) {
          var bucket = parseInt((arr[j] % mod) / dev);
          if(counter[bucket]==null) {
              counter[bucket] = [];
          }
          counter[bucket].push(arr[j]);
      }
      var pos = 0;
      for(var j = 0; j < counter.length; j++) {
          var value = null;
          if(counter[j]!=null) {
              while((value = counter[j].shift()) != null) {
                    arr[pos++] = value;
              }
        }
      }
  }
  return arr;
}
```

## TODO

。。。

