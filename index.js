// === Sodda masalalar === //

// ===  Lenght  === //
// 1-masala

// let arr = [1,2,3,4,5,6]
// console.log(arr.length);

// 2-masala
// let arr = ['Salom']
// console.log(arr.length);

// 3-masala

// let arr =[1,2,3,4,5,6,7,8,9]
// console.log(arr.length);

// === Concat == //

// 1-masala
// let arr1 =[1,2,3,4,5]
// let arr2 =[6,7,8,9,10]
// let res = arr1.concat(arr2)
// console.log(res);

// 2-masala
// let arr1 =['Salom']
// let arr2 = ['bolalar']
// let arr3 =['yaxshimisizlar']
// let res = arr1.concat(arr2 ,arr3)
// console.log(res);

// 3-masala
// let arr1 =[1,2,3,4,5]
// let arr2 =[6,7,8,9]
// let res =arr1.concat(arr2);
// res.push(10)
// console.log(res);

// === Includes === //

// 1-masala

// let arr = [1,2,3,4,5]
// let res = arr.includes(5)
// if(res){
//     console.log('Mavjud');
// }else{
//     console.log('Mavjud emas');
// }
// console.log(res);

// 2-masala
// let str =' BU yerda qildirilgan soz mavjud'
// let res =str.includes('mavjud')
// if(res){
//     console.log('Mavjud');
// }else{
//     console.log('Mavjud emas');
// }
// console.log(res);

// 3-masala

// let arr =[1,2,3,4,5,6,7,10,20]
// let res = arr.includes(10)
// if(res){
//     console.log("Mavjud");
// }else{
//     console.log('Mavjud emas');
// }
// console.log(res);

// === IndexOf, LastIndexOf === //

// 1-masala
// let arr =[1,2,3,4,5,6,7,8]
// let res = arr.indexOf(8)
// console.log(res);

// 2-masala
// let arr =[1,2,3,4,5,6,7,8]
// let res =arr.lastIndexOf(8)
// console.log(res);

// 3-masala
// let arr = "JavaScript dasturlash tili";
// let str = "a";

// let birinchiIndeks = arr.indexOf(str);

// let oxirgiIndeks = arr.lastIndexOf(str);

// console.log (birinchiIndeks);
// console.log(oxirgiIndeks);

// === Sort === //
// 1-masala

// let arr =[0,4,7,9,3,1,5]
// let res =arr.sort(function(a,b){
//     return a-b
// }) 
// console.log(res);

// 2-masala
// let str =['banana','apilsin','gilos']
// let res = str.sort()
// console.log(res);

// 3-masala
// let arr =[1,2,3,4,5,6,7,8,9,]
// let res =arr.sort(function(a,b){
//     return b-a
// })
// console.log(res);

// === Reverse === ///

// 1-masala

// let arr =[1,2,3,4,5,6,7,8,9,]
// let res =arr.reverse()
// console.log(res);

// 2-masala

// let arr ='Salom'
// let res =arr.split('').reverse().join('')
// console.log(res);

// 3-masala

// let arr =[1,2,3,4,5,6,7,8,9,]
// arr.reverse()
// console.log(arr);

// === ToString === //

// 1-masala
// let arr =[1,2,3,4,5,6,7,8,9,]
// let res =arr.toString()
// console.log(res);

// 2-masala
// let arr =[1,2,3,4,5,6,7,8,9,]
// let res =arr.toString()
// console.log(res);

// 3-masala
// let arr =[1,2,3,4,5,6,7,8,9,]
// let res =arr.toString()
// console.log(res);

// === Join === //

// 1-masala
// let arr =[1,2,3,4,5,6,7,8,9,]
// let res =arr.join(' - ')
// console.log(res);

// 2-masala

// let arr =[1,2,3,4,5,6,7,8,9,]
// let res =arr.join('  ')
// console.log(res);

// 3-masala
// let arr =[1,2,3,4,5,6,7,8,9,]
// let res =arr.join(' | ')
// console.log(res);

// === Push, Shift === //

// 1-masala
// let arr =[1,2,3,4,5,6,7,8]
// arr.push(10)
// console.log(arr);
// 2-masala
// let arr =[1,2,3,4,5,6,7,8]
// arr.shift()
// console.log(arr);

// 3-masala
// let arr =[1,2,3,4,5,6,7,8,9,]
// arr.push(10)
// arr.shift()
// console.log(arr);

// === Unshift Pop === //

// 1-masala
// let arr =[1,2,3,4,5,6,7,8,9,]
// arr.unshift(0)
// console.log(arr);
// 2-masala
// let arr =[1,2,3,4,5,6,7,8,9,]
// arr.pop()
// console.log(arr);
// 3-masala

// let arr =[1,2,3,4,5,6,7,8,9,]
// arr.unshift(0)
// arr.push(10)
// arr.shift()
// arr.pop()
// console.log(arr);

// === QIyinroq masalalar === //

// 2-masala

// let arr1= [1,2,3 ,'apple']
// let arr2 =[4,5]
// let res =arr1.concat(arr2)
// let res1 = res.filter(elemet => typeof elemet === 'number' )
// console.log(res);
// console.log(res1);

// 3-masala
// let arr =[1,2,3,4,5,6,7,8,9,]
// let res1 = arr.indexOf(3)
// if(res1 !== -1){
//     arr.splice(res1 ,1)
// }else{
//  arr.push(10)
// }
// console.log(arr);

// 4-masala
// let arr =[1,2,3,4,5,6,7,8,9,]

// let bir = arr.indexOf(2)
// let oxirgi = arr.lastIndexOf(2)
// if(bir !== 1 && oxirgi !==1){
//     let res = arr.slice(bir ,oxirgi +1)
//     console.log("Indexlar orasidagi elemnt"+res);
// }else{
//     console.log('Element mavjud emas');
// }

// 5-masala
// let arr = [3, "apple", 1, "banana", 4, "cherry", 2];

// let res =arr.filter(elemnt=> typeof elemnt === 'number').sort(function(a,b){
//     return a-b
// })

// let soz = arr.filter(elment=> typeof elment==='string').sort().reverse();

// let res1 = []
// console.log('Spnlar'+res);
// console.log('Sozlar'+soz);
// console.log('Yangi'+res1);

// 6-masala
// let arr =[1,2,3,4,5,6,7,8,9]
// let kopatma =arr
// arr.filter(elment => typeof elment === 'number')
// .map(elment => elment *2)
// let res = kopatma.join(',')
// console.log('KOpyma sonlar' +res);