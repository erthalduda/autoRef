// import React from 'react'

// export default props => {

//     const rows = props.referencias.map( referencia => {
//         return (
//             <tr key={referencia.id}>
//                 <td>{referencia.formatoFinal}</td>
//                 <td>{referencia.citacaoDireta}</td>
//                 <td>{referencia.citacaoIndireta}</td>
//                 <td>
//                     <button type="button"  title="Excluir"
//                             className="btn btn-danger" 
//                             onClick={ e => props.deleteAction(referencia)}>
//                             <i className="pi pi-trash"></i>
//                     </button>
//                 </td>
//             </tr>
//         )
//     } )

//     return (
//         <table className="table table-hover">
//             <thead>
//                 <tr>
//                     <th scope="col">Descrição</th>
//                     <th scope="col">Valor</th>
//                     <th scope="col">Tipo</th>
//                     <th scope="col">Mês</th>
//                     <th scope="col">Situação</th>
//                     <th scope="col">Ações</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {rows}
//             </tbody>
//         </table>
//     )
// }