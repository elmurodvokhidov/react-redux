function Input({ label, type, state, setState }) {

    return (
        <div>
            <div className="form-floating mb-2">
                <input type={type} value={state} onChange={(e) => setState(e.target.value)} className="form-control" id="floatingInput" placeholder={label} />
                <label htmlFor="floatingInput">{label}</label>
            </div>
        </div>
    );
}

export default Input;