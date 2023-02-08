import Nav from '../nav/Nav';
import './HeaderTitle.css';

const HeaderTitle = ({title,text}) => {
    return (
        <div className='headerTitle'>
            <h1>{title}</h1>
            <p>{text}</p>
            <Nav/>
        </div>
    )
}

export default HeaderTitle
