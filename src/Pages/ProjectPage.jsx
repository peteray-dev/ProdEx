import React from 'react';
import {Link} from 'react-router-dom'
import Footer from '../Components/Footer';
import NavBarHeader from '../Components/NavBarHeader';
import NavHead from '../Components/NavHead';
import ProjectFront from '../Components/ProjectFront';
import ProjectMainList from '../Components/ProjectsMainList';
class ProjectPage extends React.Component {
  state = {};
  render() {
    return (
      <>
        <NavHead />
        <NavBarHeader />
        <ProjectFront />
        <ProjectMainList />
        <div>
          <div className="row mt-5">
            <div className="col text-center">
              <div className="block-27">
                <ul>
                  <li>
                    <Link to="/project">&lt;</Link>
                  </li>
                  <li className="active">
                    <span>1</span>
                  </li>
                  <li>
                    <Link to="#">2</Link>
                  </li>
                  <li>
                    <Link to="#">3</Link>
                  </li>
                  <li>
                    <Link to="#">4</Link>
                  </li>
                  <li>
                    <Link to="#">5</Link>
                  </li>
                  <li>
                    <Link to="#">&gt;</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default ProjectPage;
