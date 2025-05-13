import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
	component: Index,
});

function Index() {
	return (
		<div className="p-2">

			<div className='content w-20 h-20 '>
				<div className='close-box control-box '>
					<button id='X' type='button' className='control-box-inner'>Close Window</button>
				</div>
				<h1 className='title'>Welcome</h1>
				<div className='max-box control-box'>
					{/* <div className='max-box-inner'></div> */}
					<button id='zoom' type='button' className='max-box-inner'>Zoom</button>
				</div>
				<div className='inner w-full h-20'>
					<ul>
						<p>This is a portfolio</p>
						<p></p>
						<p></p>
						<p></p>
						<p></p>
						<p></p>
						<p></p>
						<p></p>
					</ul>
				</div>
			</div>
		</div>
	);
}