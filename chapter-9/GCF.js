function GCF(num1, num2) {
    if (num2 == 0) return num1;
    else return GCF(num2, num1 % num2);
}

console.log(GCF(123456, 987654));