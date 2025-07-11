import mysql from 'mysql2';
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Zarcotech@1234',
    database: 'patcat'
});

db.connect((err) => {
    if (err) {
	console.error('Error: ', err.message);
	res.send('ERROR WHILE INPUTTED INFO! CHECK CONSOLE OR CONTACT ADMIN');
    }
});

app.post('/submit', (req, res) => {
    const data = req.body;

    const sql = `INSERT INTO patients (name, age, address, gender, employment, status, history, complaint, labs, imaging, medications, radiology, endoscopy, echo, kardex, bloodType, nextPlan, nextDate)
               VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    const values = [
        data.name, data.age, data.address, data.gender, data.employment, data.status,
        data.history, data.complaint, data.labs, data.imaging, data.medications,
        data.radiology, data.endoscopy, data.echo, data.kardex, data.bloodType,
        data.nextPlan, data.nextDate
    ];

    db.query(sql, values, (err, result) => {
        if (err) {
	    console.error('Error: ', err.message);
	    res.status(500).send('ERROR PLEASE VIEW CONSOLE OR CONTACT ADMIN');
	    return;
	}
    });
});

app.get('/patients', (req, res) => {
    db.query('SELECT * FROM patients', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.listen(3005, () => {
    console.log(`🚀 الخادم يعمل على http://localhost:3005`);
});
