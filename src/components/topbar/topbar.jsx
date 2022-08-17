import './topbar.scss'
import { Mail, LinkedIn, GitHub } from '@material-ui/icons'

export default function topbar({menuActive, setMenuActive}) {
	return(
		<div className={'topbar ' + (menuActive && 'active')}>
			<div className= 'wrapper'>
				<div className='left'>
					<a href="#intro" className='logo'>portfolio.</a>
					<div className='itemContainer'>
						<a href="https://www.linkedin.com/in/preetam-kumari-1a2883191/" target="_blank">
							<LinkedIn className='icon'/>
							<span className="tooltiptext">Linkedin</span>
						</a>
						<a href="https://github.com/PreetamKumari" target="_blank">
							<GitHub className='icon'/>
							<span className="tooltiptext">Github</span>
						</a>
						<a href="mailto:iampritam27@gmail.com">
							<Mail className='icon'/>
							<span>iampritam27@gmail.com</span>
						</a>
					</div>
				</div>
				<div className='right'>
					<div className='itemContainer'>
					<a href="#intro">About</a>
						<a href="#projects">Projects</a>
					</div>
					<div className='hamburger' onClick={()=>setMenuActive(!menuActive)}>
						<span className='line1'></span>
						<span className='line2'></span>
						<span className='line3'></span>
					</div>
				</div>
			</div>
		</div>
	)
}