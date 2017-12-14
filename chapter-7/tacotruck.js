function tacoTruck(people) {
    if (people instanceof Array) {
        let minX = people[0][0], minY = people[0][1], maxX = people[0][0], maxY = people[0][1];
        let taco = [];
        people.forEach((person) => {
            if (person instanceof Array) {
                if (person[0] < minX) minX = person[0];
                if (person[0] > maxX) maxX = person[0];
                if (person[1] < minY) minY = person[1];
                if (person[1] > maxY) maxY = person[1];
            } else {
                return;
            }
        });
        let min = Infinity;
        for (let x = minX; x < maxX; x++) {
            for (let y = minY; y < maxY; y++) {
                let sum = 0;
                people.forEach(element => {
                    sum += Math.abs(element[0] - x) + Math.abs(element[1] - y);
                });
                if (sum < min) {
                    min = sum;
                    taco = [[x, y]];
                }
            }
        }
        return taco;
    }
}

var people = [[10, 0], [-1, -10], [2, 4]];
console.log(tacoTruck(people));