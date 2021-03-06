module.exports = function(score){
  return `
    <div class="score">You scored: ${score}</div>
    <table class="info">
      <tr>
        <td class="icon happy"><img src="./assets/pedGo.png"></img></td>
        <td>If your score is less than 5, you're not an aggressive pedestrian.</td>
      </tr>
      <tr>
        <td class="icon meh"><img src="./assets/pedWait.png"></img></td>
        <td>If your score is between 5 and 10, you have moderate pedestrian rage habits.</td>
      </tr>
      <tr>
        <td class="icon sad"><img src="./assets/pedStop.png"></img></td>
        <td>If your score is greater than 10, your pedestrian rage tendency is high. This could compromise your ability to remain calm in some situations.</td>
      </tr>
    </table>
  `
};