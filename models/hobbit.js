const db= require('../data/dbConfig');

module.exports = {
    getHobits(id) {
        if(id) {
            return db('hobbits')
                    .where({id})
                    .first()
        }
    },
    addHobits(name) {
        return db('hobbits')
                .insert(name)
                .then(([id])=> id ? this.getHobits(id) : null)
    },

    removeHobits(id) {
        const hobbit = this.getHobits(id)
        return db('hobbits')
                .del()
                .where({id})
                .then(()=> hobbit)
    }
}