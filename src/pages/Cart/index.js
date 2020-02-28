import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTDE</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src="https://static.netshoes.com.br/produtos/tenis-nike-nightgazer-masculino/10/D12-3139-010/D12-3139-010_zoom1.jpg?ims=544x"
                alt="Tênis"
              />
            </td>
            <td>
              <strong>Nike Nightgazer</strong>
              <span>R$229,99</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="7159c1" />
                </button>
                <input type="number" readOnly value={1} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="7159c1" />
                </button>
              </div>
            </td>
            <td>
              <strong>R$229,99</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="7159c1" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>
      <footer>
        <button type="button">Finalizar pedido</button>
        <Total>
          <span>TOTAL</span>
          <strong>R$229,99</strong>
        </Total>
      </footer>
    </Container>
  );
}
