const express = require(`express`)
const cors = require(`cors`)
const gt  = require(`./gtranslator`)

const exp = express()
exp.use(cors())
exp.use(express.json())
exp.post(`/translate`, async (req, res) => {
    const tranlation = await gt(req.body)
    console.log(`tranlation =`,tranlation)
    console.log(`---------`)
    res.send(tranlation)
})  
exp.listen(8080, () => console.log(`Mielling...`))