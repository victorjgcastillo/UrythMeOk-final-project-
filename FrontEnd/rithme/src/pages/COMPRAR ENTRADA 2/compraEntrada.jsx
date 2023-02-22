import "./style.css";

export default function compraEntrada() {
  return (
    <>
      <div>
        <div className="container">
          <div className="config">
            <h4>Pago</h4>
          </div>
        </div>

        <div className="container2" />
        <div className="pp1">
          <div className="pp2">
            <h3>Compra tus entradas</h3>
          </div>
          <div>
            <h5>Entrada General: 25€</h5>
          </div>
          <section className="ui">
            <div className="container-left">
              <form id="credit-card">
                <div className="number-container">
                  <label for="entradas" />
                  <p>Número de entradas</p>
                  <input name="entradas" type="number" placeholder="#" />

                  <label>Número de Tarjeta</label>
                  <input
                    type="text"
                    name="card-number"
                    id="card-number"
                    maxlength="19"
                    placeholder="xxxx - xxxx - xxxx - xxxx"
                    required
                    onkeypress="return event.charCode >= 48 && event.charCode <= 57"
                  />
                </div>
                <div className="name-container">
                  <label>Propietario</label>
                  <input
                    type="text"
                    name="name-text"
                    id="name-text"
                    maxlength="30"
                    placeholder="Nombre"
                    required
                    onkeypress="return (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123) || event.key == ' '"
                  />
                </div>
                <div className="infos-container">
                  <div className="expiration-container">
                    <label>Validez</label>
                    <input
                      type="text"
                      name="valid-thru-text"
                      id="valid-thru-text"
                      maxlength="5"
                      placeholder="02/40"
                      required
                      onkeypress="return event.charCode >=48 && event.charCode <= 57"
                    />
                  </div>
                  <div className="cvv-container">
                    <label>CVV</label>
                    <input
                      type="text"
                      name="cvv-text"
                      id="cvv-text"
                      maxlength="4"
                      placeholder="1234"
                      required
                      onkeypress="return event.charCode >=48 && event.charCode <= 57"
                    />
                  </div>
                </div>
                <input type="submit" value="Pagar" id="add" />
              </form>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
