
import React from 'react';
import TeamRow from './TeamRow';
import PolarPups from '../../assets/PolarPups.png';
import FlyingPenguins from '../../assets/FlyingPenguins.png';
import SailingSeals from '../../assets/SailingSeals.png';

function Teamspage() {
  const teams = [
      { id: 1, name: 'Polar Pups', coachName: 'Tait Draper', coachPhone: '123-456-7890', numberOfPlayers: 11, logo: PolarPups },
      { id: 2, name: 'Flying Penguins', coachName: 'Josh Clark', coachPhone: '123-456-7890', numberOfPlayers: 12, logo: FlyingPenguins },
      { id: 3, name: 'Sailing Seals', coachName: 'Michael Scott', coachPhone: '123-456-7890', numberOfPlayers: 13, logo: SailingSeals },
  ];

  const confirmDelete = (teamId) => {
      console.log('Team deleted:', teamId);
  };

  return (
    <div className="container mt-5 pt-5">
      <div className="tab-pane" id="teams" role="tabpanel" aria-labelledby="teams-tab"></div>
        <div className="row">
          <aside className="col-md-3 team-cell-aside order-md-1">
            <h3>Upcoming</h3>
            <p>
            Season Kickoff Event: Get ready to hit the slopes! Our season-opening event 
            is scheduled for December 10th at the majestic WhiteOut Mountain. Join us 
            for an action-packed day featuring elite competitions, beginner workshops, 
            and a special guest appearance from renowned snowboarder, Max Winterhawk. 
            Register early to secure your spot!
            </p>
          </aside>
          <div className="col-md-9 order-md-2">
            <div className="team-cell-table mb-4">
              <h1>BSL Teams</h1>
              <table className="table table-hover table-striped">
                <thead>
                  <tr>
                    <th>Team Name</th>
                    <th>Coach Name</th>
                    <th>Coach Phone</th>
                    <th># of Players</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {teams.map(team => (
                    <TeamRow key={team.id} team={team} onHandleDelete={() => confirmDelete(team.id)} />
                  ))}
                </tbody>
            </table>
          </div>
          <div className="team-cell-bottom">
            <h2>Team Dynamics and Point System</h2>
            <p>
              In the Blizzard Snowboarding League, teams are at the heart of the competition. 
              A team can consist of amateur and professional riders, bringing together a mix 
              of experience and skill. Each team is encouraged to have a diverse roster to 
              compete across various events, including slalom, halfpipe, big air, and freestyle.
            </p>
            <p>
              Teams can be formed independently or through our league's matchmaking system, which 
              pairs individual riders based on skill levels and competition categories. We 
              emphasize camaraderie, sportsmanship, and collective growth, with teams often seen 
              training together and strategizing to maximize their strengths.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teamspage;

