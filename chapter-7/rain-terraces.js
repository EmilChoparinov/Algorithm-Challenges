function rainContainment(arr) {
    if (arr instanceof Array) {
        let holders = [];
        let curHolder = [arr[0]];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < curHolder[0]) {
                curHolder.push(arr[i]);
            }
            else if (arr[i] >= curHolder[0]) {
                curHolder.push(curHolder[0]);
                holders.push(curHolder);
                curHolder = [arr[i]];
            }
        }
        let max = curHolder[1];
        let maxi = 1;
        for (let i = 1; i < curHolder.length; i++) {
            if (max < curHolder[i]) {
                max = curHolder[i];
                maxi = i;
            }
        }
        for (let i = maxi; i < curHolder.length; i++) {
            curHolder.pop();
        }
        curHolder[0] = curHolder[curHolder.length - 1];
        holders.push(curHolder);
        let totalRain = 0;
        holders.forEach(holder => {
            let complement = holder[0];
            holder.forEach(bin => {
                totalRain += complement - bin;
            });
        })
        console.log(holders);
        return totalRain;
    }
}

let x = [3, 1, 1, 3, 4, 2, 4, 1]
console.log(rainContainment(x));