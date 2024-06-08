var comics = [
    {"movie":"어벤져스", "studio":"마블"},
    {"movie":"스파이더맨", "studio":"마블"},
    {"movie":"원더우먼", "studio":"DC"},
    {"movie":"토르", "studio":"마블"},
    {"movie":"블랙펜서", "studio":"마블"},
    {"movie":"아쿠아맨", "studio":"DC"},
    {"movie":"더 배트맨", "studio":"DC"},
]

let DCmovie = comics.filter((item, index) => {
    return item.studio == "DC"
})

DCmovie.forEach((item, index) => {
    console.log(`영화제목:${item.movie}        제작사:${item.studio}`);
})