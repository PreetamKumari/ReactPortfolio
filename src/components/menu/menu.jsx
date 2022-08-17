import './menu.scss'

export default function Menu({ menuActive, setMenuActive }) {
	return(
		<div className={"menu " + (menuActive && "active")}>
			<ul onClick={()=>setMenuActive(false)}>
				<li>
					<a href="#home">Home</a>
				</li>
				<li>
					<a href="#intro">Intro</a>
				</li>
				<li>
					<a href="#projects">Projects</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
				</li>
			</ul>
		</div>
	)
}