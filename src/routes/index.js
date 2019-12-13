import express from 'express';
import path from 'path';
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
    //res.sendFile(path.resolve(__dirname + './views/index.html'));
    res.send('Hello World');
});

export default router;