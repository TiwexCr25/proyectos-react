import './css/productForm.css'

export function ProductForm () {
  return (
    <>
      <form id='formProducto' action='/api/products' method='post'>
        <fieldset>
          <legend>Nuevo producto</legend>
          <div class='grupo'>
            <div class='campo'>
              <label for='nombre'>Nombre</label>
              <input id='nombre' name='name' type='text' required minlength='2' maxlength='50' autocomplete='off' />
            </div>

            <div class='campo'>
              <label for='categoria'>Categoría</label>
              <select id='categoria' name='category' required>
                <option value=''>Selecciona una opción</option>
                <option value='limpieza'>Limpieza</option>
                <option value='alimentos'>Alimentos</option>
              </select>
            </div>
          </div>

          <div class='grupo'>
            <div class='campo'>
              <label for='precio'>Precio</label>
              <input id='precio' name='price' type='number' min='0' step='0.01' required />
            </div>

            <div class='campo'>
              <label for='stock'>Stock</label>
              <input id='stock' name='stock' type='number' min='0' step='1' required />
            </div>
          </div>

        </fieldset>
        <div className='buttonsContainer'>
          <button type='submit'>Guardar</button>
          <button type='reset'>Limpiar</button>
        </div>
      </form>
    </>
  )
}
