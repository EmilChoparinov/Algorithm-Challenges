class Student {
    constructor(color) {
        if (typeof color == 'string') {
            switch (color) {
                case "none":
                    this.color = "none";
                    break
                case "yellow":
                    this.color = "yellow";
                    break
                case "red":
                    this.color = "red";
                    break
                case "black":
                    this.color = "black";
                    break
                case "double-black":
                    this.color = "double-black";
                    break
                case "triple-black":
                    this.color = "triple-black";
                    break
                case "triple-black plus blue":
                    this.color = "triple-black plus blue";
                    break
                default:
                    throw new Error("Not a proper belt");
                    break;
            }
        }
    }
}

function beltSort(students) {
    if (students instanceof Array) {
        if (students.length == 1) return students;
        let s = beltSort(students.slice(0, students.length / 2));
        let e = beltSort(students.slice(students.length / 2, students.length));
        combine(students, s, e);
        return students;
    }
}

function combine(arr, arr1, arr2) {
    if (arr instanceof Array && arr1 instanceof Array && arr2 instanceof Array) {
        let map = {
            "none": 0,
            "yellow": 1,
            "red": 2,
            "black": 3,
            "double-black": 4,
            "triple-black": 5,
            "triple-black plus blue": 6,
        }
        let i = 0, j = 0, c = 0;
        while (i < arr1.length && j < arr2.length) {
            if (map[arr1[i].color] < map[arr2[j].color]) {
                arr[c] = arr1[i];
                i++;
            } else {
                arr[c] = arr2[j];
                j++;
            }
            c++;
        }
        let arrNotFinished = (i < arr1.length) ? arr1 : arr2;
        let countNotFinished = (i < arr1.length) ? i : j;
        for (countNotFinished; countNotFinished < arrNotFinished.length; countNotFinished++) {
            arr[c] = arrNotFinished[countNotFinished];
            c++;
        }
        return arr;
    }
}

let students = [
    new Student("none"),
    new Student("red"),
    new Student("red"),
    new Student("black"),
    new Student("black"),
    new Student("black"),
    new Student("yellow"),
];

console.log(beltSort(students));