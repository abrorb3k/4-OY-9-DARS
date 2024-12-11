//1-BO'LIM

//=====================================================
//1-Massivning oxiridan berilgan indeksga nisbatan qiymatni topuvchi funksiyani yozing. (Masalan, -1 indeksdan ikkinchi elementni toping.)
// function findNum(arr, index) {
//   return arr.at(index - arr.length);
// }
// let arr = [1, 2, 3, 4, 5];
// let index = 3;
// console.log(findNum(arr, index));

//=====================================================
//2-Berilgan massivdagi barcha juft indeksdagi elementlarni yangi massivga yig'uvchi funksiyani yarating.
// let sum = [];
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < num.length; i++) {
//   if (i % 2 == 0) {
//     sum.push(num[i]);
//   }
// }
// console.log(sum);


//=====================================================
//3-Massivning ixtiyoriy indeksidagi qiymatni o'zgartirib, yangi massiv qaytaruvchi funksiyani yarating.
// function a(arr,index){
//     arr[index]="hello"
//     return arr;
// }
// let arr=[1,2,3,4,5,6]
// let index=3
// console.log(a(arr,index))

//2-BO'LIM

//=====================================================
//1-Massivning barcha elementlarini berilgan biriktiruvchi belgi bilan birlashtirib, umumiy uzunligini qaytaruvchi funksiyani yozing.
// let arr = [1, 2, 3, 4, 5, 6, "hello", 7, 8];
// let res=arr.join("*");
// console.log(res)
// console.log(res.length)


//=====================================================
//2-Berilgan massiv elementlarini teskari tartibda qo'shuvchi va belgi bilan birlashtiruvchi funksiyani yarating.
// let arr = [1, 2, 3, 4, 5, 6, "hello", 7, 8];
// let res = arr.reverse().join("*");
// console.log(res);
// console.log(res.length)


//=====================================================
//3-Berilgan massivning faqat toq sonli elementlarini ajratib, ularni biriktiruvchi funksiyani yarating.
// let res=[];
// let toq;
// let arr=[4,8,1,2,3,4,5,6,7,8,9]
// for(let i=0;i<arr.length;i++){
// if (arr[i] % 2 != 0) {
//     res.push(arr[i]);
//      toq=res.join("")
//    }
// }
// console.log(toq)


//3-BO'LIM

//=====================================================
//1-Massiv elementlarini stringga aylantirib, har bir elementning uzunligini qaytaruvchi funksiyani yarating.
// function arr1(array) {
//     let res=[];
//     for(let i=0;i<array.length;i++){
//         res.push(String(array[i]).length);
//     }
//     return res;
// }
// let test=["hello",543,"world",786]
// let test1=arr1(test);
// console.log(test1)


//=====================================================
//2-Massiv elementlarini string shaklida birlashtiring.
// function str(arr){
//     return arr.toString()
// }
// let test=[1,2,3,4,5,6,7,8,9,10]
// console.log(str(test))


//=====================================================
//3-Massivni stringga aylantirgandan so'ng, oxiridan boshlab bir elementni olib tashlaydigan funksiyani yarating.
// function str(arr) {
//     arr.pop()
//   return arr.toString();         
// }
// let test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(str(test));


//4-BO'LIM
//split (Massiv metodlariga oid emas, shuning uchun bu yerda ishlatilmaydi.)


//5-BO'LIM

//=====================================================
//1-Ikki massivni birlashtirib, oxirgi elementni olib tashlaydigan funksiyani yozing.
// function a(arr1,arr2){
//     let res=arr1.concat(arr2)
//     res.pop()
//     return res;
// }
// test1=[1,2,3,4,5,6];
// test2=[7,8,9,10];
// let result=a(test1,test2)
// console.log(result)


//=====================================================
//2-Bir nechta massivlarni birlashtirib, faqat unikal qiymatlarni saqlaydigan funksiyani yarating.
// let arr1 = [1, 2, 3];
// let arr2 = [4, 2, 5];
// let arr3 = [1, 6, 7];

// let res = arr1.concat(arr2, arr3);
// let result = [];
// for (const iterator of res) {
//   if (!result.includes(iterator)) {
//     result.push(iterator);
//   }
// }
// console.log(result);


//=====================================================
//3-Bir nechta massivlarni birlashtirib, faqat musbat sonlarni o'z ichiga olgan yangi massiv qaytaruvchi funksiyani yozing.
// function musbatMassiv(arr1,arr2,arr3){
//     const res=arr1.concat(arr2,arr3)    
//    const musbat=res.filter(Number=> Number>0);
//    return musbat;
// }
// test1 = [1, -2, 3];
// test2 = [4, -5, 6];
// test3 = [7, 8, -9];
// let result=musbatMassiv(test1,test2,test3)
// console.log(result)


//6-BO'LIM

//=====================================================
//1-Berilgan massivning elementlarini ko'chirish orqali faqat oxirgi uch elementni boshiga o'tkazuvchi funksiyani yozing.
// function massiv(arr){
//   const len=arr.length
//   arr.copyWithin(0,len-3)
//   return arr;
// }
// const test=[1,2,3,4,5,6,7,8,9]
// const result=massiv(test)
// console.log(result)

//=====================================================
//2-Massivning bir qismini ko'chirish orqali oxirgi bo'lakni juft indekslarga qo'yuvchi funksiyani yarating.
//TUSHUNMADM

//=====================================================
//3-Massivning biror qismini boshqa indeksga ko'chirgan holda yangi massiv qaytaruvchi funksiyani yarating.
// function massiv(arr,target,start,end){
//   return arr.slice().copyWithin(target,start,end);
// }
// let test=[1,2,3,4,5,6,7,8,9];
// let result=massiv(test,1,3,6)
// console.log(result)

//7-BO'LIM

//=====================================================
//1-Ichma-ich massivlardan iborat massivni tekis qilib, faqat toq sonlarni o'z ichiga oluvchi yangi massiv yaratuvchi funksiyani yozing.
// function massiv(arr){
//   return arr.flat().filter(Number=>Number%2!=0);

// }
// let test=[[1,2],[3,4],[5,6],7,8]
// let result=massiv(test);
// console.log(result)


//=====================================================
//2- 3 darajadan chuqur bo'lgan massivni faqat 2 darajagacha tekislovchi funksiyani yarating.
// function massiv(arr){
//   let res=arr.flat();
//   return res
// }
// let test=[1,2,[3,4],[5,6,[7,8,[9,10]]]]
// console.log(massiv(test))


//=====================================================
//3-Ichma-ich massivlarning faqat elementlari yig'indisini qaytaruvchi funksiyani yozing.
// function massiv(arr){
//   let sum=0
//   let res=arr.flat();
//   for(const iterator of res){
//     sum+=iterator
//   }
//   return sum;
// }
// let test = [[1, 2], [3, 4], [5, 6], 7, 8,9];
// console.log(massiv(test))


//8-BO'LIM

//=====================================================
//1-Massivdan ixtiyoriy indeksdagi 3 ta elementni olib tashlaydigan va yangi massiv qaytaradigan funksiyani yozing.
// function massiv(arr,index){
//   let res=[...arr.slice(index,0),...arr.slice(index+2)]
//   return res
// }

// let test=[1,2,3,4,5,6,7,8];
// let result=massiv(test,2)
// console.log(result)


//=====================================================
//2-Massivning boshiga yangi elementlar qo'shib, asl massivni o'zgartiruvchi funksiyani yarating.
// function massiv(arr,index){
//  arr.splice(0,0,index);
// return arr.flat()
// }
// let test=[3,4,5,6,7,8,9]
// let testindex=[1,2]
// console.log(massiv(test,testindex))


//=====================================================
//3-Massivning o'rtasidan elementlarni qo'shish yoki olib tashlash orqali yangi massiv yaratadigan funksiyani yozing.
// function massiv(arr, index) {
// let res=arr.slice();
// res.splice(index,1)
//   return res;
// }
// let test = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let testindex =2
// console.log(massiv(test, testindex));

//9-BO'LIM

//=====================================================
//1-Massivning faqat o'rtadagi elementlarini ajratib oluvchi funksiyani yozing.
// function middle(arr){
//   let middlenum=Math.trunc(arr.length/2)
//   return middlenum
// }
// let test=[1,2,3,4,5,6,7]
// console.log(middle(test))


//=====================================================
//2-Massivning oxirgi qismidan belgilangan uzunlikda yangi massiv qaytaruvchi funksiyani yarating.


//=====================================================
//3-Massivning faqat juft indekslaridagi elementlardan yangi massiv yaratadigan funksiyani yozing.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let res = arr.filter(function (_,index) {
//   return index % 2 == 0;
// });
// console.log(res);

//10-BO'LIM

//=====================================================
//1-Massivda berilgan elementni qidirib, uning indekslari yig'indisini qaytaruvchi funksiyani yozing.
// function massiv(arr){
//   let position=arr.indexOf(3)+1
//   return position;
// }
// let test = [1, 2, 3, 4, 7, 5, 6, 7];
// console.log(massiv(test))


//=====================================================
//2-Massivdagi eng oxirgi va birinchi elementlarning indekslari orasidagi masofani topuvchi funksiyani yarating.
// function massiv(arr){
//   return arr.length-2
// }
// let test = [1, 2, 3, 4, 7, 5, 6, 7];
// console.log(`Masofasi ${massiv(test)}`)

//=====================================================
//3-Massivdagi qidirilayotgan elementni birinchi va oxirgi ko'rinishini almashtirib qo'yadigan funksiyani yozing.
//Tushunmadm

//11-BO'LIM


//=====================================================
//1-Massivning faqat musbat sonlardan iboratligini tekshiruvchi funksiyani yozing.
// function massiv(arr){
//   return !arr.includes(number=>number>=0)
// }
// let test = [1,2,3];
// console.log(massiv(test))

//=====================================================
//2-Massivda berilgan qiymat mavjudligini tekshirib, mavjud bo'lsa, massivga yana qo'shmaydigan funksiyani yarating.
// function massiv(arr) {
//    return arr.includes(6)
// }
// let test = [1, 2, 3, 4, 7, 5, 6, 7];
// console.log(massiv(test))


//=====================================================
//3-Massivda ketma-ketligi bo'yicha elementlar mavjudligini tekshiruvchi funksiyani yarating.
//Tushunmadm


//12-BO'LIM

//=====================================================
//1-Berilgan massivni kamayish tartibida saralab, faqat oxirgi uch elementni qaytaruvchi funksiyani yozing.
// function massiv(arr){
//   arr.sort(function(a,b){
//     return b-a
//   })
//   return arr.slice(-3)
// }
// let test = [1, 2, 3, 4, 7, 5, 6];
// console.log(massiv(test));


//=====================================================
//2-Sonlar massivini musbat va manfiy qiymatlarga ajratib, ularni alohida saralovchi funksiyani yarating.
// function massiv(arr){
//  let musbat=arr.filter(Number=>Number>0).sort((a,b)=>a-b)
//  let manfiy = arr.filter((Number) => Number < 0).sort((a, b) => a-b);
//   return{
//     musbat,manfiy
//   }
// }
// let test = [1, -2, 3, -4, 7, 5, -6];
// console.log(massiv(test));


//=====================================================
//3-Massivning faqat birinchi uch elementini saralab, natijani qaytaruvchi funksiyani yozing.
// function massiv(arr){
//   let res=arr.slice(0,3).sort((a,b)=>a-b)
//   return res
// }
// let test=[4,2,5,9,3,4,6]
// console.log(massiv(test))


//13-BO'LIM

//=====================================================
//1-Massivni teskari tartibda o'zgartirib, faqat oxirgi elementni birinchi o'ringa qo'ymaydigan funksiyani yozing.
// function massiv(arr){
//   arr.reverse();
//   arr.shift()
//   return arr
// }
// let test = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(massiv(test))


//=====================================================
//2-Massivni teskari aylantirib, o'rtadagi qiymatlarni olib tashlaydigan funksiyani yarating.
//Tushunmadm
//=====================================================
//3-Massivni ikki marta teskari aylantirgan holda yangi massiv qaytaruvchi funksiyani yozing.
//Ikki marta aylantirsa o'z holiga qaytib qoladi 


//14-BO'LIM

//=====================================================
//1-for...of yordamida massivdagi barcha juft sonlarni yig'ib, ularning o'rtacha qiymatini qaytaruvchi funksiyani yozing.
// function massiv(arr){
//   let sum=0
//   let counter=0
//   for(const iterator of arr){
//     if(iterator%2==0){
//       sum+=iterator
//       counter++
//     }
//   }
//   return sum / counter;
// }
// let test = [1, 2, 3, 4, 5, 6, 7, 8,9];
// console.log(massiv(test));


//=====================================================
//2-for...of yordamida massivning har bir elementiga berilgan qiymatni qo'shib, yangi massiv yaratadigan funksiyani yozing.
// function massiv(arr,value){
//   let res=[]
//   for(const iterator of arr){
//     res.push(iterator + value);
//   }
//   return res;
//   }
// let test = [1, 2, 3, 4, 5, 6, 7];
// let testValue=3
// console.log(massiv(test,testValue));

//=====================================================
//3-for...of yordamida massivdagi manfiy sonlarni ajratib, yangi massiv qaytaruvchi funksiyani yozing.
// function massiv(arr){
//   let res=[]
//   for(const iterator of arr){
//     if(iterator<0){
//       res.push(iterator)
//     }
//   }
//   return res
// }
// let test = [1, -2, 3, -4, -7, 5, -6];
// console.log(massiv(test));

//15-BO'LIM


//=====================================================
//1-for...in yordamida massivning indekslari yig'indisini hisoblovchi funksiyani yozing.
// function massiv(arr){
//   let sum=0
//   for(const index in arr){
//     sum+=parseInt(index)
//   }
//   return sum
// }
// let test = [1,2,3,4,5];
// console.log(massiv(test));

//=====================================================
//2-for...in yordamida massiv elementlarining indekslari bo'yicha qiymatlarni almashtiruvchi funksiyani yozing.
//Tushunmadm
//=====================================================
//3-for...in yordamida massivda qaysi indekslar faqat musbat sonlarni o'z ichiga olishini aniqlaydigan funksiyani yozing.
//Tushunmadm


    


