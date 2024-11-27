<script>
  import { onMount } from 'svelte';
  import Chart from 'chart.js/auto'; // Asegúrate de tenerlo instalado correctamente

  let chart; // Variable para almacenar la instancia del gráfico
  let canvas; // Referencia al canvas

  // Datos para el gráfico
  const data = {
    labels: ['Gengar Moch.', 'Nendroid Raihan', 'Arcanine Pin', 'Tandemaus Pl.', 'Pokeball Arceus', 'Cynthia Firgure', 'Pikachu Plush'],
    datasets: [
      {
        label: 'Ventas',
        data: [245, 234, 187, 123, 109, 90, 60],
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 205, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(201, 203, 207, 1)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1
      }
    ]
  };

  // Configuración del gráfico
  const config = {
    type: 'bar', // Tipo de gráfico
    data: data, // Datos
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
            text: 'Meses'
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
      const ctx = canvas.getContext('2d'); // Obtiene el contexto 2D del canvas
      chart = new Chart(ctx, config); // Crea la instancia del gráfico

      return () => {
        if (chart) {
          chart.destroy(); // Limpia el gráfico al desmontar el componente
        }
      };
    }
  });
</script>

<!-- Canvas para renderizar el gráfico -->
<canvas bind:this={canvas} ></canvas>

<style>
  canvas {
    width: 100%;
    height: 50%;
    border: 2px solid #fde379;
    border-radius: 20px;
    padding: 10px;
  }
</style>
