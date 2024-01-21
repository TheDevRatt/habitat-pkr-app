import realm, {BSON} from 'realm';

export class User extends Realm.Object<User> {
    _id!: BSON.ObjectID;
    name!: string;

    static schema: ObjectSchema = {
    name: 'User',
    primaryKey: '_id',
    properties: {
        _id: {type: 'objectId', default: () => new BSON.ObjectId()},
        name: {type: 'string', indexed: true},
        age: 'int?',
        },
    };
}