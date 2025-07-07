import {
    createRequire
} from "module";
const require = createRequire(
    import.meta.url);
const data = require('../../data/shopdata.json')

export const test = (app) => {
    app.get('/my', (req, res) => {
        return (
            res.json(data.productsData)
        )
    })

    app.get('/my/:id', (req, res) => {
        const idDataReq = req.params.id;
        let resP = 'er';

        for (let i = 0; i < data.productsData.length; i++) {
            if (data.productsData[i].id == idDataReq) {
                resP = data.productsData[i];
            }
        }


        return (
            res.json(resP)
        )
    })
}