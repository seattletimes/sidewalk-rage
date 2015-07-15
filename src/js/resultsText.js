module.exports = function(score){
  return `
    <div class="score">You scored: ${score}</div>
    <div class="info"><strong>Typical scores range from 5 to 20 with an average of 12.</strong></div>
    <table class="info">
      <tr>
        <td class="icon happy"><i class="fa fa-smile-o"></i></td>
        <td>If your score is less than 5 you're not an aggressive pedestrian and your pedestrain rage tendency is manageable.</td>
      </tr>
      <tr>
        <td class="icon meh"><i class="fa fa-meh-o"></i></td>
        <td>Scores between 5 and 10 indicate that you have moderate pedestrian rage habits of walking.</td>
      </tr>
      <tr>
        <td class="icon sad"><i class="fa fa-frown-o"></i></td>
        <td>If your score is greater than 10 your road pedestrian rage tendency is out of control, enough to compromise your ability to remain calm and fair in certain routine, but challenging walking situations.</td>
      </tr>
    </table>
  `
};