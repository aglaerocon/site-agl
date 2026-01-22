// Alterar estilo do menu ao rolar a página
window.onscroll = function() {
    const navbar = document.getElementById("navbar");
    if (window.pageYOffset > 50) {
        navbar.style.background = "#001f3f"; // Tom mais escuro
        navbar.style.padding = "0.5rem 0";
    } else {
        navbar.style.background = "#003366";
        navbar.style.padding = "1rem 0";
    }
	// Opcional: Aviso simples antes de enviar
const form = document.querySelector('.orcamento-form');
if(form) {
    form.onsubmit = function() {
        console.log("Enviando solicitação de orçamento...");
        // Você pode adicionar um alerta se desejar:
        // alert("Sua solicitação está sendo enviada!");
    };
}
};

// Log de inicialização
console.log("Site da AGL Consultoria carregado com sucesso.");