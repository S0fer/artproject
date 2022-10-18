import cakeOptions from '../data/cakeOptions'
import "../styles/Cake.css"

function Cake() {
    const inputArray = Object.keys(cakeOptions)
    const inputs = inputArray.map((item, index) => {
        const options = cakeOptions[item].map((item2, index2) => {
            return (
                <option value={item2} key={index2}>{item2}</option>
            )
        });
        return (
            <div key={index}>
                <label htmlFor={item}>{item}</label>
                <select name={item}>
                    {options}
                </select>
            </div>
        )
    })

    return (
        <div className='third'>
            <h1>Monte seu Bolo!</h1>

            <form>
                {inputs}
            </form>

            <div className='cake'>
                <div className='icing'></div>
                <div className='layer'></div>
                <div className='filling'></div>
                <div className='layer'></div>
            </div>
        </div>
    );
}

export default Cake;