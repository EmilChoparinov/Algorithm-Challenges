function closestValue(arr, n) {
    if (arr instanceof Array) {
        let closest = arr[0];
        arr.forEach(v => {
            if (Math.abs(v - n) < Math.abs(closest - n)) {
                closest = v;
            }
        });
        return closest;
    }
}

console.log(closestValue([25, 18, 41, 42, 46, 53, 55, 60, 62, 63, 64, 70, 74, 85], 12));