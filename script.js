const { createApp, ref, computed, onMounted, watch } = Vue;

createApp({
    setup() {
        // Estado do tema
        const isDarkMode = ref(document.documentElement.classList.contains('dark'));
        
        // Estado da navegação
        const activeTab = ref('agendamento');
        // Resto do código JavaScript...
        
        return {
            formData,
            tiposVeiculoAlmoxarifado,
            // Resto das variáveis retornadas...
        };
    }
}).mount('#app');