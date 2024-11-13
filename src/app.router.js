import path from 'path';
import { fileURLToPath } from 'url';
import mohafzaRouter from './modules/mohafza/mohafza.router.js'
import morgan from 'morgan'


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export const appRouter = (app, express) => {

  // morgan 
  if (process.env.NODE_ENV === "dev" ) {
    app.use(morgan("common"))
  }

  
  // serving the images
  app.use('/images', express.static(path.join(__dirname, './utils/Wedding halls')));
  
  // Global Middleware 
  app.use(express.json())
  // Routes

  // auth
  // app.use("/auth", authRouter)

  // category
  app.use("/mohafza", mohafzaRouter)

 
  
  // not found page router
  app.all("*", (req, res, next) => {
    return next(new Error('Page Not Found', {cause: 404}))
  })

  // global error handler
  app.use((error, req, res, next) => {
    return res.status(error.cause || 500).json({success: false, message: error.message, stack: error.stack})
  })
}


// import morgan from 'morgan'

// export const appRouter = (app, express) => {

//   // morgan 
//   if (process.env.NODE_ENV === "dev" ) {
//     app.use(morgan("common"))
//   }
  
//   // Global Middleware 
//   app.use(express.json())
//   // Routes

//   // app.use("/category", categoryRouter)


//   // not found page router
//   app.all("*", (req, res, next) => {
//     return next(new Error('Page Not Found', {cause: 404}))
//   })

//   // global error handler
//   app.use((error, req, res, next) => {
//     return res.status(error.cause || 500).json({success: false, message: error.message, stack: error.stack})
//   })
// }
