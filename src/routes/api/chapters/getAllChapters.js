import database from '$lib/database'
 
export async function get(){

    try {
        const chaptersCollection=await database.getCollection('chapters')
        const result=await chaptersCollection.find({}).toArray();
        console.log(result)
        return {
            status: 200,
            body: {
                chapters: result
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