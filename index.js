import _ from 'lodash';

export default function solution(content){
  // BEGIN
  const rows = content.split('\r\n').slice(1, -1)
  const data = rows.map(row=>row.split(','))
  const gamesCount = data.length
  console.log(`Количество партий: ${gamesCount}`);

  const ratedOrNotList = data.map(el=>el[1])
  const ratedGamesCount = ratedOrNotList.filter(el=>el==='TRUE').length
  const unRatedGamesCount = ratedOrNotList.filter(el=>el==='FALSE').length
  const ratioRate = Math.round((ratedGamesCount / gamesCount) * 100)
  const ratioUnRate = Math.round((unRatedGamesCount / gamesCount) * 100)
  
  console.log(`Соотношение рейтинговых игр к нерейтинговым: ${ratioRate}% к ${ratioUnRate}%`);
  console.log(unRatedGamesCount);
  
  const debuts = data.map(el=>el[13])
  const sortedDebutes = _.uniq(debuts)
  console.log(sortedDebutes);
  
  // END
}