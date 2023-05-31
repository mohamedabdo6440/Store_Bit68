import axios from "axios";

export const handleClickNext = (NextReq, setData, setNextReq, setPrevReq) => {
    NextReq !== null && axios.get(`${NextReq}`).then((res) => {
        setData(res.data.results)
        setNextReq(res.data.next);
        setPrevReq(res.data.previous);
    })
}
export const handleClickPrev = (PrevReq, setData, setPrevReq, setNextReq) => {
    PrevReq !== null && axios.get(`${PrevReq}`).then((res) => {
        setData(res.data.results)
        setPrevReq(res.data.previous);
        setNextReq(res.data.next);
    })
}