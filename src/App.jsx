import { useState } from 'react'


function App() {

  //gestione pop up
  const [isOpenAlert, setIsOpenAlert] = useState(null)
  const [valid, setValid] = useState(null)
  const [selector, setSelector] = useState(null)

  //Gestione campi input
  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [specializzazione, setSpecializzazione] = useState("")
  const [anniEsperienza, setAnniEsperienza] = useState("")
  const [descrizione, setDescrizione] = useState("")

  // funzione per gestire la validazione
  function validation() {

    if (!name.trim() || !username.trim() || !password.trim() || !anniEsperienza.trim() || !descrizione.trim() ) {
      setIsOpenAlert(true)
      return
    }
    setIsOpenAlert(false)

    if (!(anniEsperienza > 0)) {
      setValid(true)
      return
    }
    setValid(false)

    if (!specializzazione) {
      setSelector(true)
      return
    }
    setSelector(false)
  }

  // funzione invio form
  const handleSubmit = (e) => {
    e.preventDefault()

    validation()

    console.log(
      `
      Nome: ${name}
      Username: ${username}
      Password: ${password}
      Specializzazione: ${specializzazione}
      Anni di Esperienza: ${anniEsperienza}
      Descrizione: ${descrizione}
      `)

  }

  return (
    <>
      <div className='container d-flex justify-content-center'>
        <div className='row'>
          <div className='col-12 my-5 border rounded-1 p-4'>

            <div>
              <h2 className='mb-3 text center'>COMPILA IL MODULO</h2>
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
                    value={name}
                    onChange={e => setName(e.target.value)}
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
                </div>
                <div className="mb-3">
                  <label className="form-label">Specializzazione</label>
                  <select
                    value={specializzazione}
                    onChange={(e) => setSpecializzazione(e.target.value)}
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option value="">Seleziona la Specializzazzione</option>
                    <option value="fullstack">Full Stack</option>
                    <option value="frontend">Frontend</option>
                    <option value="backend">Backend</option>
                  </select>
                  {selector && (
                    <div className="text-danger">
                      Seleziona una casella.
                    </div>
                  )}

                </div>
                <div className="mb-3">
                  <label className="form-label">Anni di esperienza</label>
                  <input
                    type="number"
                    value={anniEsperienza}
                    onChange={e => setAnniEsperienza(e.target.value)}
                    className="form-control"
                    placeholder="Inserisci gli ammi di esperienza"
                  />
                  {valid && (
                    <div className="text-danger">
                      Metti un numero Valido.
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label">Breve descrizione sullo sviluppatore</label>
                  <textarea
                    className="form-control"
                    rows="3"
                    value={descrizione}
                    onChange={e => setDescrizione(e.target.value)}
                  >
                  </textarea>
                </div>
                <div className='d-grid mb-3'>
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
