import welcome from '../images/welcome.png';
import { getAudi } from '../utilities';
import { getBMW } from '../utilities';
import { getMercedes } from '../utilities';
import { getNisaan } from '../utilities';
import { getToyota } from '../utilities';


export default function Welcome(){
    return(
       <div className='welcome-container'>
                <div>
                <img className='welcome' src={welcome} alt="" />
                </div>
                <div className='btns'>
                    <button onClick={getBMW}>BMW</button>
                    <button>TOYOTA</button>
                    <button>NISSAN</button>
                    <button>AUDI</button>
                    <button>MERCEDES</button>
                </div>
       </div>
    )
}