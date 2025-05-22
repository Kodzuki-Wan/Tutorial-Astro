const img = document.getElementById('main-image');
        const originalSrc = '../../Public/Onix/ojos_abiertos.svg'; // Cambia por la ruta de tu imagen original
        const newSrc = '../../Public/Onix/ojos_cerrados.svg'; // Cambia por la ruta de tu imagen alternativa

        // Para escritorio: mouseover/mouseout
        img.addEventListener('mouseenter', () => img.src = newSrc);
        img.addEventListener('mouseleave', () => img.src = originalSrc);