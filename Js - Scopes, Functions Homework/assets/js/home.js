"use strict";

// 1) Verilmiş n - ədədinin 3-ə və 7-ə bölünüb-bölünməməsini tapan bir function yazin.

function isDivided(number) {
  if (number % 3 == 0 && number % 7 == 0) {
    console.log("Is Divided by 3 and 7");
  } else {
    console.log("Is Not Divided by 3 and 7");
  }
}
isDivided(42);

// 2) Functiona musbet bir eded gelir, hemin funksiya gelen ededin faktorialini hesablayib geri qaytarmalidir.

function factorial(number) {
  let factorial = 1;
  if (number > 0) {
    for (let i = 1; i <= number; i++) {
      factorial *= i;
    }
  } else {
    console.log("Number is negative");
  }
  console.log(factorial);
}
factorial(3);

// 3) Her hansisa number elementleri olan arayin icindeki cut ededlerin kvadratlarinin cemini hesablayan bir function yazin.

function multiSum(numbers) {
  let sum = 0;
  let multiply = 1;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
      multiply = numbers[i] ** 2;
      sum += multiply;
    }
  }
  console.log(sum);
}
let numbers = [5, 9, 14, 27, 34];
multiSum(numbers);

// 4) Funtiona-a  mail ve password gelir. Mail beraberdirse oruj@code.edu.az -a ve password beraberdirse 12345 -e, ekranda "Girish olundu" yazilsin, eks halda "Mail ve yaxud password sehvdir" yazilsin.

function confirmassion(mail, pasword) {
  if (mail == "oruj@code.edu.az" && pasword == 12345) {
    console.log("Giris olundu");
  } else {
    console.log("Yanlis");
  }
}
confirmassion("oruj@code.edu.az", 12345);

// 5) Functiona ededlerden ibaret array gelir, function hemin arraydaki tek ededlerin cemini qaytarmalidir.

function sumOfOddArray(nums1) {
  let sum = 0;
  for (let i = 0; i < nums1.length; i++) {
    if (nums1[i] % 2 == 1) {
      sum += numbers[i];
    }
  }
  console.log(sum);
}
let nums1 = [1, 2, 5, 6, 9];
sumOfOddArray(nums1);

// 6) Functiona ededlerden ibaret array gelir, function hemin arraydaki cut ededlerin sayini qaytarmalidir.

function countOfEven(nums2) {
  let count = 0;
  for (let i = 0; i < nums2.length; i++) {
    if (nums2[i] % 2 == 0) {
      count++;
    }
  }
  console.log(count);
}
let nums2 = [1, 2, 5, 6, 9];
countOfEven(nums2);
