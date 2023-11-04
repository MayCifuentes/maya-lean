const html = ({data}) => {
    
   const letra = data;
    const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/fabric.js/4.5.0/fabric.min.js"></script>
      <script src="https://kit.fontawesome.com/cdcabb7751.js" crossorigin="anonymous"></script>
      <style>
        body, html {
          margin: 0;
          padding: 0;
          overflow: hidden;
        }
        
        #drawingCanvas {
          position: absolute;
          top: 0;
          left: 0;
          background-color: transparent; /* Fondo blanco para el lienzo */
        }
        
        #resetButton {
          position: absolute;
          top: 30px;
          right: 30px;
          font-size: 100px;
          cursor: pointer;
          z-index: 2; /* Asegura que el botón esté sobre el lienzo de puntos */
        }
        
        #colorOptions {
          position: absolute;
          bottom: 5px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          justify-content: center;
          z-index: 2; /* Asegura que las opciones de color estén sobre el lienzo de puntos */
        }
        
        .colorOption {
          width: 70px;
          height: 70px;
          margin: 0 10px;
          cursor: pointer;
          border-radius: 50%;
        }
        
        #dottedCanvas {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1; /* Establece que el lienzo de puntos esté por debajo del lienzo de dibujo */
        }
      </style>
    </head>
    <body>
    <canvas id="drawingCanvas"></canvas>
    <div id="resetButton">
      <i class="fas fa-redo-alt"></i>
    </div>
    <div id="colorOptions">
      <div class="colorOption" id="redColor" style="background-color: red;"></div>
      <div class="colorOption" id="blueColor" style="background-color: blue;"></div>
      <div class="colorOption" id="blackColor" style="background-color: black;"></div>
    </div>
    <script>
    
    var canvas = new fabric.Canvas('drawingCanvas');
    canvas.setWidth(800);
    canvas.setHeight(300);
    canvas.setWidth(window.innerWidth);
    canvas.setHeight(window.innerHeight);
    
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
    var fontSize = 375; // Ajusta el tamaño de la fuente según tu preferencia
    
    var textA = new fabric.Text('${letra}', {
      left: centerX,
      top: centerY,
      fontSize: fontSize,
      originX: 'center',
      originY: 'center',
      stroke: 'blak',
      fill: 'transparent',
      selectable: false
    });
    
    canvas.add(textA);
      // Configurar el lienzo para dibujo libre
      canvas.isDrawingMode = true;
      canvas.freeDrawingBrush.width = 5;       // Ancho del pincel
    
      // Funciones para cambiar el color del pincel
      document.getElementById('redColor').addEventListener('click', function() {
        canvas.freeDrawingBrush.color = 'red';
      });
      document.getElementById('blueColor').addEventListener('click', function() {
        canvas.freeDrawingBrush.color = 'blue';
      });
      document.getElementById('blackColor').addEventListener('click', function() {
        canvas.freeDrawingBrush.color = 'black';
      });
    
      // Escuchar el evento de cambio de tamaño de ventana para ajustar el canvas
      window.addEventListener('resize', function() {
        canvas.setWidth(window.innerWidth);
        canvas.setHeight(window.innerHeight);
        canvas.renderAll();
      });
    
      // Limpiar el lienzo y reiniciar el dibujo al hacer clic en el botón
      document.getElementById('resetButton').addEventListener('click', function() {
        canvas.clear();
        canvas.renderAll();
      });
    </script>
    </body>
    </html>
    `;

    return html;


};

export default html;