import database from '$lib/database'
 
export async function post({body}){
    let {_id}=body
    console.log("body.........",body)
    _id=database.getObjectId(_id)
    console.log("_id..............",_id)

    try {
        const chaptersCollection=await database.getCollection('chapters')
        const result=await chaptersCollection.findOne({_id:_id})
        console.log(result)
        return {
            status: 200,
            body: {
                chapter: result
            }
        }
    } catch (error) {
        console.log("error",error)
        return {
            status: 500
        }
    }
   
    
}