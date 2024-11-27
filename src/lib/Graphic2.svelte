<script>
  import { onMount } from 'svelte';
  import Chart from 'chart.js/auto';

  let chart; // Variable para almacenar la instancia del gráfico
  let canvas; // Referencia al canvas

  // Configuración de los datos
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']; // Etiquetas
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Ventas',
        data: [1230, 812, 934, 1011, 912, 898, 1103], // Datos de ejemplo
        fill: false, // Línea sin relleno
        borderColor: 'rgb(75, 192, 192)', // Color de la línea
        tension: 0.1 // Suavizado de la curva
      }
    ]
  };

  // Configuración del gráfico
  const config = {
    type: 'line', // Tipo de gráfico: línea
    data: data,
    options: {
      responsive: true, // Gráfico responsivo
      plugins: {
        legend: {
          display: true,
          position: 'top' // Posición de la leyenda
        },
        title: {
          display: true,
        }
      },
      scales: {
        x: {
          title: {
            display: true,
          }
        },
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Valores'
          }
        }
      }
    }
  };

  // Montar el gráfico
  onMount(() => {
    if (canvas) {
      const ctx = canvas.getContext('2d'); // Obtén el contexto 2D del canvas
      chart = new Chart(ctx, config); // Crea el gráfico

      return () => {
        if (chart) {
          chart.destroy(); // Limpia el gráfico al desmontar el componente
        }
      };
    }
  });
</script>

<!-- Canvas para el gráfico -->
<canvas bind:this={canvas}></canvas>

<style>
  canvas {
    width: 100%;
    height: 50%;
    border: 2px solid #fde379;
    border-radius: 20px;
    padding: 10px;
  }
</style>
