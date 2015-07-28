module.exports = function(score){
  return `
    <div class="score">You scored: ${score}</div>
    <table class="info">
      <tr>
        <td class="icon happy"><img src="./assets/pedGo.png"></img></td>
        <td>If your score is <strong>less than 5</strong>, you're not an aggressive pedestrian.</td>
      </tr>
      <tr>
        <td class="icon meh"><img src="./assets/pedWait.png"></img></td>
        <td>If your score is <strong>between 5 and 10</strong>, you have moderate pedestrian rage habits.</td>
      </tr>
      <tr>
        <td class="icon sad"><img src="./assets/pedStop.png"></img></td>
        <td>If your score is <strong>greater than 10</strong>, your pedestrian rage tendency is high. This could compromise your ability to remain calm in some situations.</td>
      </tr>
    </table>
  `
};