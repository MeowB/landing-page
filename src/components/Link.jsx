import './styles/Link.scss'

export default function Link({ source, value }) {
	return <a className='Link' href={source}>{value}</a>
}