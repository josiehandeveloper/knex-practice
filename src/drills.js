require('dotenv').config()
const knex = require('knex')

const knexInstance = knex({
  client: 'pg',
  connection: process.env.DB_URL,
})



function searchByProduceName(searchTerm) {
    knexInstance    
        .select('*')
        .from('shopping_list')
        .where('name', 'ILIKE', `%${searchTerm}%`)
        .then(result => {
            console.log('SEARCH TERM', { searchTerm})
            console.log(result)
        })
        
}
searchByProduceName('fish')

function paginateProducts(page) {
    const productsPerPage = 6
    const offset = productsPerPage * (page - 1)
    knexInstance 
        .select('*')
        .from('shopping_list')
        .limit('productsPerPage')
        .offset(offset)
        .then(result => {
            console.log(result)
        })
}
paginateProducts(2)

function addedDaysAgo(daysAgo) {
    knexInstance 
        .select('*')
        .from('shopping_list')
        .where(
            'date_added',
            '>',
            knexInstance.raw(`now() - '?? days'::INTERVAL`, daysAgo)
        )
        .then(result => {
            console.log('Products added days ago')
            console.log(result)
        })
        
}
addedDaysAgo(4)

function costPerCategory() {
    knexInstance
        .select('category')
        .sum('price as total')
        .from('shopping_list')
        .groupBy('category')
        .then(result => {
            console.log('Cost per category')
            console.log(result)
        })
}
costPerCategory()