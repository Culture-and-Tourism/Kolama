import express from 'express';
const router = express.Router();
import {
    createPMKolam,
    getPMKolam,
    getPMKolamById,
    updatePMKolam,
    deletePMKolam
   
} from '../controllers/PMkolam.controller.js';

router.post("/addPMKolam", createPMKolam);
router.get("/getAllPMKolam",getPMKolam);
router.delete("/deletePMKolam/:id", deletePMKolam);
router.get("/getSinglePMKolam/:id", getPMKolamById);
router.put("/updatePMKolam/:id", updatePMKolam);

export default router