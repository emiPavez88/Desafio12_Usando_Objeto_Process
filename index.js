import { app, args} from './src/app.js';
import 'dotenv/config';

const port = args.p || args.port;

const server = app.listen(port, () => {
    console.log(`Server on http://localhost:${server.address().port}`);
});
server.on("error", (err) => console.log(`Error in server: ${err}`));

export { server }