function Cake() {
    return (
        <div className='third'>
            <h1>Monte seu Bolo!</h1>

            <form>
                <input type="text" name="massa" value="massa" />
                <input type="text" name="recheio" value="recheio" />
                <input type="text" name="cobertura" value="cobertura" />
                <input type="text" name="camadas" value="camadas" />
                <input type="text" name="decor" value="decor" />
            </form>

            <div className='bolo'>

            </div>
        </div>
    );
}

export default Cake;