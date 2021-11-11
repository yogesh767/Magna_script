import database from '$lib/database'
import { ObjectId } from 'bson'


import fs from 'fs'

export async function post({ body }) {

    let { title, thumbnail, _id } = body
    const filePath = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)
    console.log("_id",_id)
    let base64Image = thumbnail.split(';base64,').pop();
    fs.writeFile(`src/routes/api/images/${filePath}.jpg`, base64Image, { encoding: 'base64' }, function (err) {
        console.log('File created');
    });
    thumbnail = `src/routes/api/images/${filePath}.jpg`

    try {
        const chaptersCollection = await database.getCollection('chapters')
        const result = await chaptersCollection.updateOne({ _id: ObjectId(_id) }, { $push: { "images": { title: title, image: thumbnail } } })
        return {
            status: 200,
            body: {
                result
            }
        }
    } catch (error) {
        console.log(error)
        return {
            status: 500,
            body: null
        }
    }


}