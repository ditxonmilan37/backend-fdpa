import { Router } from "express";
import { setResult, getResultsWithSerie, getResultsOneSerie, deleteResultsOneSerie, setResultCamp,getResultsWithSerieCampo } from "../controllers/results.controller";

const router = Router()

router.post('/results/save', setResult)
router.get('/results/listAll/:idTest', getResultsWithSerie)
router.get('/resultsCampo/listAll/:idTest', getResultsWithSerieCampo)
router.get('/results/list/:id', getResultsOneSerie)
router.put('/results/update/:id', setResultCamp)
router.delete('/results/delete/:id', deleteResultsOneSerie)

export default router