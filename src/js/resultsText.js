module.exports = function(score){
  return `
    <div class="score">You scored: ${score}</div>
    <div class="info"><i class="fa fa-fire"></i> If your score is less than 5 you're not an aggressive pedestrian and your pedestrain rage tendency is manageable.</div>
    <div class="info"><i class="fa fa-fire"></i> Scores between 5 and 10 indicate that you have moderate pedestrian rage habits of walking.</div>
    <div class="info"><i class="fa fa-fire"></i> If your score is greater than 10 your road pedestrian rage tendency is out of control, enough to compromise your ability to remain calm and fair in certain routine, but challenging walking situations.</div>
    <div class="info">Typical scores range from 5 to 20 with an average of 12.</div>
  `
};