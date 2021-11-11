import database from '$lib/database'

import  fs from'fs'
 
export async function post({body}){

    let {title,} = body
    
    try {
        const chaptersCollection=await database.getCollection('chapters')
        const result=await chaptersCollection.insertOne({title:title})
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