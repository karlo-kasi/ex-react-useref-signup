import { useState, useEffect, useMemo, useRef } from 'react'

const letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = `!@#$%^&*()-_=+[]{}|;:'\\",.<>?/~`;

function App() {

  console.log("render")
  //gestione pop up
  const [isOpenAlert, setIsOpenAlert] = useState(null)


  //Gestione campi input
  const inputName = useRef()
  // const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const inputSelect = useRef()
  // const [specializzazione, setSpecializzazione] = useState("")
  const inputAnniEserienza = useRef()
  // const [anniEsperienza, setAnniEsperienza] = useState("")
  const [descrizione, setDescrizione] = useState("")


  const isUsernameValid = useMemo(() => {
    const charValid = username.split("").every(char =>
      letters.includes(char.toLowerCase()) ||
      numbers.includes(char)
    )
    return charValid && username.length >= 6;
  }, [username])

  const isPasswordValid = useMemo(() => {
    return (
      password.length >= 8 &&
      password.split("").some(chart => letters.includes(chart)) &&
      password.split("").some(num => numbers.includes(num)) &&
      password.split("").some(sym => symbols.includes(sym))
    )
  }, [password])

  const isDescriptionValid = useMemo(() => {
    return (
      descrizione.trim().length >= 100 &&
      descrizione.trim().length < 1000
    )
  }, [descrizione])


  // funzione invio form
  const handleSubmit = (e) => {
    e.preventDefault()

    if (
      !inputName.current.value.trim() ||
      !username.trim() ||
      !password.trim() ||
      !inputAnniEserienza.current.value.trim() ||
      !inputSelect.current.value.trim() ||
      inputAnniEserienza.current.value <= 0 ||
      !descrizione.trim() ||
      !isUsernameValid ||
      !isPasswordValid ||
      !isDescriptionValid
    ) {
      return setIsOpenAlert(true)
    } else {
      console.log({
        Nome: inputName.current.value,
        Username: username,
        Password: password,
        Specializzazione: inputSelect.current.value,
        AnnidiEsperienza: inputAnniEserienza.current.value,
        Descrizione: descrizione
      })
    }



  }

  return (
    <>
      <div className='container '>
        <div className='row d-flex justify-content-center'>
          <div className="col-12 col-md-8 col-lg-6 my-5 border rounded-1 p-4">
            <div>
              <h2 className='mb-3 text-center'>COMPILA IL MODULO</h2>
              <form
                onSubmit={handleSubmit}
              >
                {isOpenAlert && (
                  <div className="alert alert-danger d-flex align-items-center mt-3" role="alert">
                    <span className="me-2">⚠️</span>
                    <div>
                      Tutti i campi sono obbligatori.
                    </div>
                  </div>
                )}
                <div className="mb-3">
                  <label className="form-label">Nome Completo</label>
                  <input
                    type="text"
                    ref={inputName}
                    className="form-control"
                    placeholder="Inserisci il tuo nome"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input
                    type="text"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    className="form-control"
                    placeholder="Inserisci un username"
                  />
                  {username.trim() && (
                    <div>
                      <p className={isUsernameValid ? "text-success" : "text-danger"}>
                        {isUsernameValid ? "Username valido" : "Inserisci un Username valido (min. 6 caratteri, una lettera e un numero)."}
                      </p>
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="form-control"
                    placeholder="Inserisci la tua password"
                  />
                  {password.trim() && (
                    <div>
                      <p className={isPasswordValid ? "text-success" : "text-danger"}>
                        {isPasswordValid ? "Password Valida" : "Password NON valida (min. 8 caratteri, una lettera e un numero e un carattere speciale)."}
                      </p>
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label">Specializzazione</label>
                  <select
                    ref={inputSelect}
                    // value={specializzazione}
                    // onChange={(e) => setSpecializzazione(e.target.value)}
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option value="">Seleziona la Specializzazzione</option>
                    <option value="fullstack">Full Stack</option>
                    <option value="frontend">Frontend</option>
                    <option value="backend">Backend</option>
                  </select>


                </div>
                <div className="mb-3">
                  <label className="form-label">Anni di esperienza</label>
                  <input
                    type="number"
                    ref={inputAnniEserienza}
                    className="form-control"
                    placeholder="Inserisci gli ammi di esperienza"
                  />

                </div>
                <div className="mb-3">
                  <label className="form-label">Breve descrizione sullo sviluppatore</label>
                  <textarea
                    className="form-control"
                    rows="6"
                    value={descrizione}
                    onChange={e => setDescrizione(e.target.value)}
                  >
                  </textarea>

                  {descrizione.trim() && (
                    <div>
                      <p className={isDescriptionValid ? "text-success" : "text-danger"}>
                        {isDescriptionValid ? "Descrizione Valida" : `Inserisci una descrizione completa (min. 100 caratteri)${descrizione.length}`}
                      </p>
                    </div>
                  )}

                </div>
                <div className='d-grid mb-4'>
                  <button
                    className='btn btn-primary'
                    type="submit"
                  >
                    INVIA
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
