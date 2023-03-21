import express from "express";
import { getEntriesWhithoutSensitiveInfo, getEntryById, addEntry } from "../services/diary";
import {validateDataDiary} from "../validateDataDiary"



const router = express.Router()

router.get("/", (_req, res) => {
   try {
      const diariesWithoutComments = getEntriesWhithoutSensitiveInfo();
      return res.status(200).json(diariesWithoutComments);
    } catch (error) {
      return res.status(400).send(error.message);
    }
});
router.get("/:id", (req, res) => {
   try {
      const {id} = req.params
      const diaryById = getEntryById(Number(id));
      return res.status(200).json(diaryById);
    } catch (error) {
      return res.status(400).send(error.message);
    }
});

router.post("/", (req, res) => {
   try {
      const {newDiaryEntry} = req.body
      const validate = validateDataDiary(newDiaryEntry)
      if(validate){
         const diaryEntry = addEntry(newDiaryEntry);
         return res.status(200).json(diaryEntry);
      } else throw new Error ("Error")
    } catch (error) {
      return res.status(400).send(error.message);
    }
 });


export default router