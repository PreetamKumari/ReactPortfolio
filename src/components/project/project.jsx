import './project.scss'
import ProjectData from '../../projectData/projectData.json'

export default function Projects() {
return (
	<div className = 'projects' id='projects'>
		{ProjectData.map((project)=>{
			return  <div className="card">
						<img className="card-img-top" src={require('../../assets/got_ui.png')} alt="Card image cap"/>
						<div className="card-body">
							<h2 className="card-title">{project.name}</h2>
							<p className="card-text">{project.description}</p>
							<div className="card-links">
								<a href={project.deployed_link} target="_blank" className="btn btn-primary">Demo Link</a>
								<a href={project.github_link} target="_blank" className="btn btn-primary">Github Link</a>
								</div>
						</div>
					</div>
		})}
	</div>
)
}