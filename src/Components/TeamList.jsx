import React from 'react';
import TeamData from '../api/Team'
import Teams from '../Components/Team'

class TeamList extends React.Component {
  state = {
      Team: TeamData
  };
  render()
   {
    
    return (
      <>
      <section class="ftco-section bg-half-light">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 text-center heading-section ftco-animated">
              <span className="subheading">Our Team</span>
              <h2 className="mb-4">Our Team</h2>
            </div>
          </div>
          <div className="row">
              {
                  this.state.Team.map(item=>{
                      return <Teams list={item}/>
                      
                      
                  })
              }
              
              
              
        </div>{' '}
        </div>
        </section>
      </>
    );
  }
}

export default TeamList;
