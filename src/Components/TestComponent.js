import axios from 'axios'
import React, {useState, useEffect} from 'react'











// // const TestComponent = () => {
// //     const [drugname, setDrugname] = useState('')
// //     async function handleSubmit(e) {
// //         e.preventDefault()
// //         console.log(e)
// //         console.log(drugname)
// //         const resp = await fetch('http://localhost:8000/testUrl/', {
// //             method: 'GET',
// //             body: JSON.stringify({
// //                 'drug_name': drugname
// //             })
// //         })
// //         console.log(resp)
// //     }

//     const handleChange = (e) => {
//         const name = e.target.value
//         setDrugname(name)
//     }

//   return (
//     <div>
//         TestComponent
//         <form onSubmit={handleSubmit}>
//             <label>Drug Ka naam</label>
//             <input type="text" value={drugname} onChange={handleChange}/>
//             <button type='submit'>Predict</button>
//         </form>
//     </div>
//   )
// }

// export default TestComponent