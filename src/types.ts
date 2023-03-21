// Lo mejor es hacer esto con un enum, ya que es una lista de valores
// export type Weather = "sunny" | "rainy" | "cloudy" | "windy" | "stormy"
// export type Visibility = "great" | "good" | "ok" | "poor"

export enum Weather {
    Sunny= "sunny",
    Rainy= "rainy",
    Cloudy= "cloudy",
    Windy= "windy",
    Stormy= "stormy"
}

export enum Visibility {
    Great= "great",
    Good= "good",
    Ok= "ok",
    Poor= "poor",
}

export interface DiaryEntry {
    id: number,
    date: string,
    weather: Weather,
    visibility: Visibility,
    comment: string
}

//Puedo convertir inteface en tipo 
// export type DiaryEntry = {
//     id: number,
//     date: string,
//     weather: Weather,
//     visibility: Visibility,
//     comment: string
// }

// Pero si quiero extender es mejor con interface  
// interface SpecialDiary extends DiaryEntry{
//     fligthNumber: number
// }

//Para sacar una propiedad 
// export type DiaryEntryNoSensitiveInfo = Pick<DiaryEntry, "id" | "date" | "weather" | "visibility">

//Para omitir una propiedad
export type DiaryEntryNoSensitiveInfo = Omit<DiaryEntry, "comment" >
export type AddDiaryEntry = Omit<DiaryEntry, "id" >