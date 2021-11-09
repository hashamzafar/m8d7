import supertest from "supertest";
import { app } from "../app.js"
import dotenv from "dotenv";
import mongoose from "mongoose";


dotenv.config()

const request = supertest(app)

describe("Testing the testing environment", () => {
    it("should test that true is true", () => {
        expect(true).toBe(true);
    })
})
describe("Testing the server", () => {
    beforeAll(done => {
        mongoose.connect(process.env.MONGO_URL)
            .then(() => {
                console.log("Connected to Atlas")
                done()
            })
    })

})