import { Liga } from "./interfaces";
import { dataProvider } from "./dataProvider";

const ligas: Liga[] = []
const bundesliga = new Liga("1", "Bundesliga", "Alemania", dataProvider("Alemania"))
const laliga = new Liga("2", "LaLiga", "España", dataProvider("España"))
const seriea = new Liga("3", "Serie A", "Italia", dataProvider("Italia"))
const premierleague = new Liga("4", "Premier League", "Inglaterra", dataProvider("Inglaterra"))
const ligueone = new Liga("5", "Ligue One", "Francia", dataProvider("Francia"))
ligas.push(bundesliga, laliga, seriea, premierleague, ligueone)
export { ligas }