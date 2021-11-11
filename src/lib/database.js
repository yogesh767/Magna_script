import { MongoClient, ObjectId } from "mongodb";
const url = "mongodb://localhost:27017";
let client = new MongoClient(url);
let mainDb;
let isConnected = false;
async function loadDB(){
    try {
        await client.connect();
        // await client.db("admin").command({ ping: 1 });
        console.log("Connected successfully to server");
        mainDb = client.db("Magna_script");
        isConnected = true;
    } catch (error) {
        console.log("Error connecting DB : ", error)
    }
}

async function getCollection(name){
    try {
        if (!isConnected) {
            await loadDB();
        }
        return mainDb.collection(name)
    } catch (error) {
        console.log("Error getting collection : ", error);
    }
}

function getObjectId (_id) {
    var objId = undefined;
    try {
        if (typeof (_id) == 'string')
            objId = new ObjectId(_id);
        else {
            objId = _id;
        }
    } catch (e) {
        console.error(e);
        console.log("provided id : ", _id);
    } finally {
        return objId;
    }
}

export default {
    getCollection, getObjectId
}