import { app } from "./app.js"
import mongoose from "mongoose"

const port = process.env.PORT || 3007
const mongoUrl = process.env.MONGO_URL
import list from "express-list-endpoints"
mongoose.connect(mongoUrl, {
    useNewUrlParser: true
}).then(() => {
    console.log("🍀 Connected to MongoDB")
    app.listen(port, () => {
        console.log("🤘 Server listening on port " + port)
        console.log(list(app))
    })
})

