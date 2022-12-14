import { Request, Response } from 'express'
import { Results } from "../entities/results"
import { Serie_view } from '../entities/serie_view_all';
import { Results_view, Results_view_campo } from '../entities/results_view_all';
import { Serie } from '../entities/serie';

export const setResult = async (req: Request, res: Response) => {

    try {

        const {
            id_serie,
            wind,
            status
        } = req.body;

        const itemsResults: Array<Results> = req.body.itemsResults

        var result = new Results();

        const save = await Promise.all(

            itemsResults.map(async (item: any) => {
                const resultados = Results.create(
                    {
                        id_serie: id_serie,
                        camp1: item.camp1,
                        camp2: item.camp2,
                        camp3: item.camp3,
                        camp4: item.camp4,
                        camp5: item.camp5,
                        camp6: item.camp6,
                        camp7: item.camp7,
                        camp8: item.camp8,
                        camp9: item.camp9,
                        camp10: item.camp10,
                        camp11: item.camp11,
                        camp12: item.camp12,
                        camp13: item.camp13,
                        camp14: item.camp14,
                        camp15: item.camp15,
                        camp16: item.camp16,
                        camp17: item.camp17,
                        camp18: item.camp18,
                        camp19: item.camp19,
                        status: status,
                        created_at: new Date(),
                        updated_at: new Date(),
                    }
                );
                const oneLine = Serie.create(
                    {
                        wind: wind
                    }
                )
                await Serie.update({ id: parseInt(id_serie) }, oneLine);
                await Results.save(resultados);

            })

        )

        if (save) {
            return res.status(200).json({
                statusBol: true,
                data: result
            })
        }

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({
                statusBol: false,
                message: error.message
            })
        }
    }
}

export const setResultCamp = async (req: Request, res: Response) => {

    try {

        const {
            
            result1,
            result2,
            result3,
            result4,
            result5,
            result6,
            viento1,
            viento2,
            viento3,
            viento4,
            viento5,
            viento6
        } = req.body;

        const {id} = req.params


                const resultados = Results.create(
                    {
                        result1: result1,
                        result2: result2,
                        result3: result3,
                        result4: result4,
                        result5: result5,
                        result6: result6,
                        viento1: viento1,
                        viento2: viento2,
                        viento3: viento3,
                        viento4: viento4,
                        viento5: viento5,
                        viento6: viento6,
                        updated_at: new Date(),
                    }
                );

                await Results.update({ id: parseInt(id) }, resultados);
        

            return res.status(200).json({
                statusBol: true,
                data: resultados
            })
        

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({
                statusBol: false,
                message: error.message
            })
        }
    }
}


export const getResultsWithSerie = async (req: Request, res: Response) => {
    try {

        const serieView = await Serie_view.findBy({ id_test: parseInt(req.params.idTest), status: 1 })

        let itemResults: Array<any> = []

        const save = await Promise.all(
            serieView.map(async (item) => {
                const ResultsView = await Results_view.findBy({ id_serie: item.id })

                itemResults.push({
                    id: item.id,
                    code: item.code,
                    wind: item.wind,
                    nameSerie: item.name,
                    results: ResultsView
                })
            })
        )

        if (save) {
            
            itemResults.sort((a: any, b: any) => {
                if (a.id < b.id) {
                    return -1;
                }
                if (a.id > b.id) {
                    return 1;
                }
                return 0;
            });

            return res.status(200).json({
                statusBol: true,
                data: itemResults
            })
        }

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({
                statusBol: false,
                message: error.message
            })
        }
    }
}

export const getResultsWithSerieCampo = async (req: Request, res: Response) => {
    try {

        const serieView = await Serie_view.findBy({ id_test: parseInt(req.params.idTest), status: 1 })

        let itemResults: Array<any> = []

        const save = await Promise.all(
            serieView.map(async (item) => {
                const ResultsView = await Results_view_campo.findBy({ id_serie: item.id })

                itemResults.push({
                    id: item.id,
                    code: item.code,
                    wind: item.wind,
                    nameSerie: item.name,
                    results: ResultsView
                })
            })
        )

        if (save) {
            
            itemResults.sort((a: any, b: any) => {
                if (a.id < b.id) {
                    return -1;
                }
                if (a.id > b.id) {
                    return 1;
                }
                return 0;
            });

            return res.status(200).json({
                statusBol: true,
                data: itemResults
            })
        }

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({
                statusBol: false,
                message: error.message
            })
        }
    }
}


export const getResultsOneSerie = async (req: Request, res: Response) => {
    try {
        const { id } = req.params

        const ResultsView = await Results_view.findBy({ id_serie: parseInt(id) })




        return res.status(200).json({
            statusBol: true,
            data: ResultsView
        })


    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({
                statusBol: false,
                message: error.message
            })
        }
    }
}

export const deleteResultsOneSerie = async (req: Request, res: Response) => {
    try {
        const { id } = req.params

        const ResultsView = await Results_view.delete({ id_serie: parseInt(id) })




        return res.status(200).json({
            statusBol: true,
            data: ResultsView
        })


    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({
                statusBol: false,
                message: error.message
            })
        }
    }
}
