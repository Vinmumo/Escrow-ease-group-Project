import car1 from '../images/BMW (1).jpg';
import car2 from '../images/BMW X6 M Competition 2024.jpg';
import car3 from '../images/BMW.jpg';
export default function(){
    return(
        <div className='sample-container'>

            <div>
            <img className='car1' src={car1} alt="" />
            </div>
            <div>
            <img className='car2' src={car2} alt="" />
            </div>
            <div>
            <img className='car1' src={car3} alt="" />
            </div>

        </div>

    )
}
// import car1 from '../images/BMW (1).jpg';
// import car2 from '../images/BMW X6 M Competition 2024.jpg';
// import car3 from '../images/BMW.jpg';

// export default function MyComponent() {
//     return (
//         <div
//           className="sample-container"
//          style={{ display: 'flex' }}
//          >
//             <div 
//             className='car1'
//             style={{ flex: 1 }}>
//                 <img  src={car1} alt="" style={{ maxWidth: '100%' }} />
//             </div>
//             <div 
//             className='car2' 
//             style={{ flex: 1 }}>
//                 <img src={car2} alt="" style={{ maxWidth: '100%' }} />
//             </div>
//             <div 
//              className='car3'
//              style={{ flex: 1 }}>
//                 <img src={car3} alt="" style={{ maxWidth: '100%' }} />
//             </div>
//         </div>
//     );
// }
