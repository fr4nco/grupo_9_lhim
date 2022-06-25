const controller = require("./productsControllers");

const usersFilePath = path.join(__dirname, '../data/clientesDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = 






module.exports = controller