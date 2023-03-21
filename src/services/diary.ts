import { DiaryEntry, DiaryEntryNoSensitiveInfo, AddDiaryEntry } from "../types"
import diaryData from "./diaries.json" // Para que ts deje importar este archivo, se debe configurar en el proyecto en tsconfing.json "resolveJsonModule": true
const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>
//cuando me traigo json o hago el fetch tengo que decirle como tiparlo que lo trate como ese tipado 

export const getEntries = () => diaries

export const getEntryById =(id:number): DiaryEntry | undefined =>{
    const entry = diaries.find( e => e.id === id)
    return entry
}

export const getEntriesWhithoutSensitiveInfo = (): Array<DiaryEntryNoSensitiveInfo> => {
    return diaries.map((e)=>{
        return {
            id: e.id,
            date: e.date,
            weather: e.weather,
            visibility: e.visibility
        }
    })
}

export const addEntry = (newDiaryEntry: AddDiaryEntry): DiaryEntry => {
    const newDiary = {
        id: Math.max(...diaries.map(d=> d.id)) +1,
        ...newDiaryEntry
    }
    diaries.push(newDiary)
    return newDiary
}