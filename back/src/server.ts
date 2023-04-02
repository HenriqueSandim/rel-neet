import app from "./app";
import myDataSource from "./data-source";


(async () => {

    await myDataSource.initialize()
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })
    
    app.listen(3000, () => {
        console.log("Servidor executando")
    })    
})()