import { RunningTimes } from "./running-times";

export interface Concert {

    title: string;
    genre: string;
    categories : string;
    audience: string;
    duration: string;
    runningTimes: RunningTimes;
}
