import { getFirestore, doc, setDoc } from 'firebase/firestore';
export default class User {
    constructor (first, last, born) {
    this.first = first;
    this.last = last;
    this.born = born;
    }
    toString() {
        return this.first + ', ' + this.last + ', ' + this.born;
    }
}

const userConverter = {
    toFirestore: (user) => {
        return {
            first: user.first,
            last: user.last,
            born: user.born
        };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new User(data.first, data.last, data.born);
    }
};