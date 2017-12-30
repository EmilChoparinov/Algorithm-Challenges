class Person {
    constructor(firstName, lastName) {
        if (typeof firstName == 'string' && typeof lastName == 'string') {
            this.firstName = firstName;
            this.lastName = lastName;
        }
    }
}

class Persons {
    constructor() {
        this.people = [];
    }
    add(...persons) {
        persons.forEach(person => {
            if (person instanceof Person) {
                this.people.push(person);
            }
        })
    }

    sort() {
        let hasChanged;
        do {
            hasChanged = false;
            for (let i = 0; i < this.people.length - 1; i++) {
                let contact1 = this.people[i].lastName + this.people[i].firstName;
                let contact2 = this.people[i + 1].lastName + this.people[i+1].firstName;
                if (typeof contact1 == 'string' && typeof contact2 == 'string') {
                    let c = 0;
                    while (c < contact1.length && c < contact2.length) {
                        if (contact1[c].toLowerCase().charCodeAt(0) > contact2[c].toLowerCase().charCodeAt(0)) {
                            let t = this.people[i];
                            this.people[i] = this.people[i + 1];
                            this.people[i + 1] = t;
                            hasChanged = true;
                            break;
                        }
                        if(contact1[c].toLowerCase().charCodeAt(0) < contact2[c].toLowerCase().charCodeAt(0)){
                            break;
                        }
                        c++;
                    }
                }
            }
        } while (hasChanged);
    }

    toString() {
        let s = "[ ";
        for (let i = 0; i < this.people.length - 1; i++) {
            s += `${this.people[i].firstName} ${this.people[i].lastName}, `;
        }
        if (this.people.length != 0) {
            s += `${this.people[this.people.length - 1].firstName} ${this.people[this.people.length - 1].lastName} `;
        }
        s += "]";
        return s;
    }
}

let contacts = new Persons();
contacts.add(
    new Person("Giogio", "Carnevale"),
    new Person("Aaron", "Carnevale"),
    new Person("Lee", "Abby")
);

console.log(contacts.toString());
contacts.sort();
console.log(contacts.toString());