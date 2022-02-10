import { Router } from "express";
const router = new Router();
import parseArgs from "minimist";
const args = parseArgs(process.argv.slice(2));
const path = parseArgs(process.argv)._[1];

router.get("/", async (req, res) => {
	try {
		res.render("./pages/info", {
			argv: JSON.stringify(args),
			os: process.platform,
			nodeVersion: process.version,
			rss: JSON.stringify(process.memoryUsage()),
			path: path,
			pid: process.pid,
			projectFolder: process.cwd(),
		});
	} catch (error) {
		res.status(500).json({ error: "Error while getting messages.", description: error.message });
	}
});

export { router };