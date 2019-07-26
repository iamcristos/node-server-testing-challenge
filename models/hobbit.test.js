const request = require('supertest');
const server = require('../index');
const Hobits = require('./hobbit');
const db = require('../data/dbConfig')

beforeEach(async()=>{
    await db('hobbits').truncate()
    await Hobits.addHobits({name: 'Femi'})
})

describe('/Get', () => {
  it('should return a 200', async ()=>{
      return request(server)
            .get('/')
            .expect(200)
            .then((res)=>{
                expect(res.body.message).toBe('welcome to hobbits')
            })
  })
});

describe('POST /api/hobits', ()=> {
    it('should insert hobbits', async ()=>{
        let hobbits
        hobbits = await db('hobbits')
        expect(hobbits).toHaveLength(1)
        await Hobits.addHobits({name: 'monkeys'})
        hobbits = await db('hobbits')
        expect(hobbits).toHaveLength(2)
    })
});

describe('DELETE /api/hobits', ()=> {
    it('should delete hobbits', async ()=>{
        let hobbits
        await Hobits.removeHobits({id: 1})
        hobbits = await db('hobbits')
        expect(hobbits).toHaveLength(1)
    })
})
