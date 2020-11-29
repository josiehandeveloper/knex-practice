require('dotenv').config()
const knex = require('knex')
const GroceriesService = require('./shopping-list-service')

const knexInstance = knex({
  client: 'pg',
  connection: process.env.DB_URL,
})

GroceriesService.getAllGroceries(knexInstance)
  .then(groceries => console.log(groceries))
  .then(() =>
    GroceriesService.insertGrocery(knexInstance, {
      name: 'Test new name',
      date_added: new Date('2029-01-22T16:28:32.615Z'),
      price: '3.00',
      category: 'Main',
      checked: true,
    })
  )
  .then(newGrocery => {
    console.log(newGrocery)
    return GroceriesService.updateGrocery(
      knexInstance,
      newGrocery.id,
      { name: 'Updated name' }
    ).then(() => GroceriesService.getById(knexInstance, newGrocery.id))
  })
  .then(grocery => {
    console.log(grocery)
    return GroceriesService.deleteGrocery(knexInstance, grocery.id)
  })

