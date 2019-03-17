import * as LcsProPlayers from '../static_data/lcs_pro_players';

export const changePlayerNameDisplay = () => {
  const selectedPlayerName =
    d3.select('.player-select')
      .node()
      .value;

  d3.select('.player-name')
    .selectAll('span')
    .remove();

  d3.select('.player-name')
    .selectAll('span')
    .data(selectedPlayerName)
    .enter()
    .append('span')
    .text((playerName) => {
      return (playerName);
    });
};

export const populatePlayerSelectElement = () => {
  const allLcsPlayers = LcsProPlayers.grabAllPlayerNames();
  const allLcsTeams = LcsProPlayers.grabAllTeamNames();
  d3.select('.player-select')
    .selectAll('option')
    .data(allLcsPlayers)
    .enter()
    .append('option')
    .attr('value', (playerName) => {
      return (playerName);
    })
    .text((playerName) => {
      return (playerName);
    });
};

export const updateWinsInfo = (wins, which) => {
  let whichField;
  if (which === 'online') {
    whichField = '.online-wins-field';
  } else if (which === 'stage') {
    whichField = '.stage-wins-field';
  }

  const str = wins.toString();
  d3.select(whichField)
    .selectAll('span')
    .data(str)
    .enter()
    .append('span')
    .text((d) => {
      return (d);
    });
};