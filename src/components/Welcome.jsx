import welcome from '../images/welcome.png';

export default function Welcome(){
    return(
       <div className='welcome-container'>
                <div>
                <img className='welcome' src={welcome} alt="" />
                </div>
                <div className='btns'>
                    <button>BMW</button>
                    <button>TOYOTA</button>
                    <button>NISSAN</button>
                    <button>KIA</button>
                    <button>HONDA</button>
                </div>
       </div>
    )
}