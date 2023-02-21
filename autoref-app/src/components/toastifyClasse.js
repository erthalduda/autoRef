import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.options = {
  closeButton: true,
  debug: false,
  newestOnTop: false,
  progressBar: true,
  positionClass: "toast-top-right",
  preventDuplicates: false,
  onclick: null,
  showDuration: "300",
  hideDuration: "1000",
  timeOut: "5000",
  extendedTimeOut: "1000",
  showEasing: "swing",
  hideEasing: "linear",
  showMethod: "fadeIn",
  hideMethod: "fadeOut",
};

export function exibeMensagem(titulo, mensagem, tipo) {
  toast[tipo](mensagem, titulo);
}

export function mensagemErro(mensagem) {
  exibeMensagem("Erro", mensagem, "error");
}

export function mensagemSucesso(mensagem) {
  exibeMensagem("Sucesso", mensagem, "success");
}

export function mensagemAlerta(mensagem) {
  exibeMensagem("Alerta", mensagem, "warning");
}
