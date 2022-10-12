import { app } from "./app";
import { database } from "./config/mongoose.config";

database.on('error', console.error.bind(console, 'connection error:'));
database.once('open', () => {
    console.log("Connected to database")
});

app.listen(3333, () => console.log("Server is running!"));
