const GroceriesService = require('../src/shopping-list-service')
const knex = require('knex')

describe(`Groceries service object`, function() {
    let db
    let testGroceries = [
        {
            id: 1,
            name: 'first',
            date_added: new Date('2029-01-22T16:28:32.615Z'),
            price: '1.00',
            category: 'Main',
            checked: false, 
        },
        {
            id: 2,
            name: 'second',
            date_added: new Date('2029-01-22T16:28:32.615Z'),
            price: '2.00',
            category: 'Main',
            checked: false,
        },
        {   
            id: 3,
            name: 'third',
            date_added: new Date('2029-01-22T16:28:32.615Z'),
            price: '3.00',
            category: 'Main',
            checked: false,
        },
    ]
    
    before(() => {
        db = knex({
            client: 'pg',
            connection: process.env.TEST_DB_URL
        })
    })

    before(() => db('shopping_list').truncate())

    afterEach(() => db('shopping_list').truncate())

    after(() => db.destroy())

    context(`Given 'shopping_list' has data`, () => {
        beforeEach(() => {
            return db
                .into('shopping_list')
                .insert(testGroceries)
        })

        it(`getAllGroceries() resolves all groceries from 'shopping_list' table`, () => {
            // test that GroceriesService.getAllGroceries gets data from table
            return GroceriesService.getAllGroceries(db)
                .then(actual => {
                    expect(actual).to.eql(testGroceries)
                })
        })

        it(`getById() resolves an article by id from 'shopping_list' table`, () => {
            const thirdId = 3
            const thirdTestGrocery = testGroceries[thirdId - 1]
            return GroceriesService.getById(db, thirdId)
                .then(actual => {
                    expect(actual).to.eql({
                        id: thirdId,
                        name: thirdTestGrocery.name,
                        date_added: thirdTestGrocery.date_added,
                        price: thirdTestGrocery.price,
                        category: thirdTestGrocery.category,
                        checked: false,
                    })
            })
        })

        it(`deleteGrocery() removes a grocery by id from 'shopping_list' table`, () => {
            const groceryId = 3
            return GroceriesService.deleteGrocery(db, groceryId)
                .then(() => GroceriesService.getAllGroceries(db))
                .then(allGroceries => {
                // copy the test articles array without the "deleted" article
                    const expected = testGroceries.filter(grocery => grocery.id !== groceryId)
                    expect(allGroceries).to.eql(expected)
            })
        })
        
        it(`updateGrocery() updates a grocery from the 'shopping_list' table`, () => {
            const idOfGroceryToUpdate = 3
            const newGroceryData = {
                name: 'updated name',
                price: '18.00',
                date_added: new Date(),
                checked: true,
                category: 'Main'
            }
            return GroceriesService.updateGrocery(db, idOfGroceryToUpdate, newGroceryData)
                .then(() => GroceriesService.getById(db, idOfGroceryToUpdate))
                .then(grocery => {
                    expect(grocery).to.eql({
                        id: idOfGroceryToUpdate,
                            ...newGroceryData,
                    })
                })
        })

    })

    context(`Given 'shopping_list' has no data`, () => {
        it(`getAllGroceries() resolves an empty array`, () => {
            return GroceriesService.getAllGroceries(db)
                .then(actual => {
                    expect(actual).to.eql([])
                })
        })

        it(`insertGrocery() inserts a new grocery and resolves the new grocery with an 'id'`, () => {
            const newGrocery = {
                name: 'Test new name',
                date_added: new Date('2029-01-22T16:28:32.615Z'),
                price: '3.00',
                category: 'Main',
                checked: true,
            }
            return GroceriesService.insertGrocery(db, newGrocery)
                .then(actual => {
                    expect(actual).to.eql({
                        id: 1,
                        name: newGrocery.name,
                        date_added: newGrocery.date_added,
                        price: newGrocery.price,
                        category: newGrocery.category,
                        checked: newGrocery.checked,
                    })
                })

            
        })
    })

})