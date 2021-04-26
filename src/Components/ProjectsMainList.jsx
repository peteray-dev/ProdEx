import React from 'react';
import ProjectData from '../api/projects';
import Project from './Project';

class ProjectMainList extends React.Component {
  state = {
    projects: ProjectData,
  };
  render() {
    return (
      <>
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 text-center heading-section ftco-animated">
              <span className="subheading">Our Global Work Industries</span>
              <h2 className="mb-4">Latest Projects</h2>
            </div>
          </div>

          <div className="row">
            {
                this.state.projects.map(item =>{
                    return(
                        <>
                        
                            <Project projects={item} />
                  
                        </>
                    )
                })
            }
          </div>
        </div>
      </>
    );
  }
}

export default ProjectMainList;
